"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import { button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
import Hero from "../assets/hero.png";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Moon,
  Sun,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Send,
  Code,
  Brain,
  Coffee,
} from "lucide-react";

// Floating animation variants
const floatingAnimation = {
  animate: {
    y: ["0%", "5%", "0%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [shapes, setShapes] = useState(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
    }))
  );

  useEffect(() => {
    const handleResize = () => {
      setShapes(
        shapes.map((shape) => ({
          ...shape,
          x: Math.min(
            shape.x,
            ((window.innerWidth - shape.size) / window.innerWidth) * 100
          ),
          y: Math.min(
            shape.y,
            ((window.innerHeight - shape.size) / window.innerHeight) * 100
          ),
        }))
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Background shapes animation

  return (
    <div
      className={`min-h-screen w-full ${
        isDark
          ? "bg-[#0a192f]"
          : "bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-50"
      } transition-colors duration-500 overflow-hidden`}
    >
      {/* Animated Background Objects */}
      <div className="fixed inset-0 overflow-hidden">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute rounded-full cursor-move ${
              isDark ? "bg-blue-500/5" : "bg-yellow-400/10"
            } hover:scale-110 transition-transform`}
            style={{
              width: shape.size,
              height: shape.size,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            drag
            dragConstraints={{
              top: 0,
              left: 0,
              right: window.innerWidth - shape.size,
              bottom: window.innerHeight - shape.size,
            }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileDrag={{
              scale: 1.2,
              backgroundColor: isDark
                ? "rgba(59, 130, 246, 0.2)"
                : "rgba(250, 204, 21, 0.3)",
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
     

     
    </div>
  );
}
