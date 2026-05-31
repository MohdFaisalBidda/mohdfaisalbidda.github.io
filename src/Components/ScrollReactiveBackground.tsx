"use client";

import { Canvas } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import GrainyGradient, { Ripple } from "./GrainyGradient";
import { ErrorBoundary } from "react-error-boundary";

// Define color palettes for each section - Modern Pastel Mix
const colorPalettes = {
  hero: [
    // [243, 232, 255], // Lavender mist
    // [232, 225, 254], // Soft purple
    // [254, 235, 246], // Pink mist
    // [255, 241, 235], // Peachy cream
    // [237, 237, 251], // Periwinkle
    // [213, 225, 243], // Soft blue
    // [195, 208, 234], // Slate blue
  ],
  gradient: [
    // [255, 242, 245], // Rose quartz
    // [251, 235, 238], // Blush
    // [255, 240, 229], // Warm cream
    // [251, 237, 217], // Soft sand
    // [237, 242, 251], // Whisper blue
    // [224, 234, 247], // Cloud blue
    // [207, 221, 239], // Powder blue
  ],
  features: [
    // [255, 245, 240], // Lightest peach
    // [255, 235, 225], // Soft peach
    // [255, 228, 210], // Warm peach
    // [252, 218, 195], // Peachy pink
    // [245, 220, 215], // Dusty rose
    // [235, 215, 220], // Mauve
    // [220, 210, 225], // Soft lavender
  ],
  footer: [
    // [255, 245, 240], // Lightest peach
    // [255, 235, 225], // Soft peach
    // [255, 228, 210], // Warm peach
    // [252, 218, 195], // Peachy pink
    // [245, 220, 215], // Dusty rose
    // [235, 215, 220], // Mauve
    // [220, 210, 225], // Soft lavender
  ],
};

// Interpolate between two colors
function lerpColor(color1: number[], color2: number[], t: number): number[] {
  return color1.map((c, i) => c + (color2[i] - c) * t);
}

// Interpolate between two palettes
function lerpPalette(
  palette1: number[][],
  palette2: number[][],
  t: number,
): number[][] {
  return palette1.map((color, i) => lerpColor(color, palette2[i], t));
}

function isWebGLSupported(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export default function ScrollReactiveBackground() {
  const [colorPalette, setColorPalette] = useState<number[][]>(colorPalettes.hero);
  // const [ripples, setRipples] = useState<Ripple[]>([]);
  const gradientRef = useRef<any>(null);
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setCanRenderWebGL(isWebGLSupported());
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle global click events for ripples (disabled)
  // useEffect(() => {
  //   const handleClick = (e: MouseEvent) => {
  //     if (gradientRef.current) {
  //       const currentTime = gradientRef.current.getCurrentTime();
  //
  //       const newRipple: Ripple = {
  //         id: Math.random(),
  //         x: e.clientX,
  //         y: e.clientY,
  //         startTime: currentTime,
  //       };
  //
  //       setRipples((prev) => {
  //         const activeRipples = prev.filter(
  //           (r) => currentTime - r.startTime < 2.0,
  //         );
  //         const updatedRipples = [...activeRipples, newRipple];
  //         if (updatedRipples.length > 10) {
  //           return updatedRipples.slice(updatedRipples.length - 10);
  //         }
  //         return updatedRipples;
  //       });
  //     }
  //   };
  //
  //   window.addEventListener("click", handleClick);
  //   return () => window.removeEventListener("click", handleClick);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;

      // Define section boundaries (in viewport heights)
      const heroEnd = windowHeight;
      const gradientEnd = windowHeight * 2;
      const featuresEnd = documentHeight - windowHeight * 0.5; // Start footer transition near end

      let newPalette: number[][];

      if (scrollY < heroEnd) {
        // Hero section: interpolate from hero to gradient palette
        const t = scrollY / heroEnd;
        newPalette = lerpPalette(colorPalettes.hero, colorPalettes.gradient, t);
      } else if (scrollY < gradientEnd) {
        // Gradient section: use full gradient palette
        newPalette = colorPalettes.gradient;
      } else if (scrollY < featuresEnd) {
        // Features section: interpolate from gradient to features palette
        const t = (scrollY - gradientEnd) / (featuresEnd - gradientEnd);
        newPalette = lerpPalette(
          colorPalettes.gradient,
          colorPalettes.features,
          Math.min(t, 1),
        );
      } else {
        // Footer section: interpolate from features to footer palette
        const t = (scrollY - featuresEnd) / (documentHeight - featuresEnd);
        newPalette = lerpPalette(
          colorPalettes.features,
          colorPalettes.footer,
          Math.min(t, 1),
        );
      }

      setColorPalette(newPalette);
    };

    handleScroll(); // Initial call
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <FallbackBackground />
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full transition-opacity duration-[3000ms] ease-out"
        style={{ opacity: canvasReady ? 1 : 0 }}
      >
        {/* @react-three/fiber docs suggest using double error handling:
          1. Fallback for Canvas for handling WebGL context init errors
          2. ErrorBoundary for handling WebGL crashes.

          The two above do not seem to catch all errors related to WebGL
          initialization and rendering, so we also have a canRenderWebGL
          check to completely skip rendering the Canvas on unsupported devices.
      */}
        {canRenderWebGL && isDesktop && (
          <ErrorBoundary fallback={<div />}>
            <Canvas
              camera={{ position: [0, 0, 1] }}
              gl={{
                preserveDrawingBuffer: false,
                powerPreference: "high-performance",
              }}
              onCreated={() => {
                // Wait one frame so the first paint lands before we fade in.
                requestAnimationFrame(() => setCanvasReady(true));
              }}
              fallback={<FallbackBackground />}
            >
              <GrainyGradient
                ref={gradientRef}
                colorPalette={colorPalette}
              />
            </Canvas>
          </ErrorBoundary>
        )}
      </div>
    </>
  );
}

function FallbackBackground() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full dark:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgb(243, 232, 255) 0%, rgb(232, 225, 254) 20%, rgb(254, 235, 246) 40%, rgb(255, 241, 235) 60%, rgb(237, 237, 251) 80%, rgb(213, 225, 243) 100%)",
        }}
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 h-full w-full hidden dark:block"
        style={{
          background:
            "linear-gradient(180deg, rgb(8, 12, 24) 0%, rgb(18, 22, 42) 20%, rgb(32, 22, 48) 40%, rgb(45, 24, 44) 60%, rgb(24, 28, 52) 80%, rgb(10, 20, 40) 100%)",
        }}
      />
    </>
  );
}
