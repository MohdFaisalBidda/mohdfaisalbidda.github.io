"use client";

import React, { useEffect, lazy, Suspense, useState } from "react";
import Home from "./Home";
import { useTab } from "../providers/TabProvider";
import { useTheme } from "../providers/ThemeProvider";
import NavBar from "./NavBar";
import ToggleMode from "./ToggleMode";

const ExperienceTimeline = lazy(() => import("./ExperienceTimeline"));
const MinimalProjects = lazy(() => import("./MinimalProjects"));
const Contact = lazy(() => import("./Contact"));

const ScrollReactiveBackground = lazy(() => import("./ScrollReactiveBackground"));

function Layout() {
  const { theme } = useTheme();
  const { activeTab } = useTab();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: "Faisal | Full Stack Engineer",
      experience: "Experience | Faisal",
      projects: "Projects | Faisal",
      contact: "Contact | Faisal",
    };
    const descMap: Record<string, string> = {
      home: "Portfolio of Mohammad Faisal Bidda — Full Stack Engineer building elegant web apps with React, TypeScript, Node.js, and more.",
      experience: "Professional experience and timeline of Mohammad Faisal Bidda.",
      projects: "Selected projects by Mohammad Faisal Bidda showcasing full stack skills.",
      contact: "Get in touch with Mohammad Faisal Bidda for collaboration or opportunities.",
    };

    const title = titleMap[activeTab] || "Faisal's Portfolio";
    const description = descMap[activeTab] || descMap.home;

    document.title = title;

    const ensureMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
      } else {
        const keys = Object.keys(attrs);
        keys.forEach((k) => el!.setAttribute(k, attrs[k]));
      }
      return el;
    };

    const setMetaContent = (name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[name='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMetaContent("description", description);
    ensureMeta("meta[property='og:title']", { property: "og:title", content: title });
    ensureMeta("meta[property='og:description']", { property: "og:description", content: description });
    ensureMeta("meta[name='twitter:title']", { name: "twitter:title", content: title });
    ensureMeta("meta[name='twitter:description']", { name: "twitter:description", content: description });
  }, [activeTab]);

  const showTabs = (tab: string): React.ReactNode => {
    switch (tab) {
      case "home":
        return <Home />;

      case "experience":
        return <Suspense fallback={null}><ExperienceTimeline /></Suspense>;

      case "projects":
        return <Suspense fallback={null}><MinimalProjects /></Suspense>;

      case "contact":
        return <Suspense fallback={null}><Contact /></Suspense>;

      default:
        return <></>;
    }
  };
  return (
    <>
      {/* <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, rgb(243,232,255) 0%, rgb(232,225,254) 20%, rgb(254,235,246) 40%, rgb(255,241,235) 60%, rgb(237,237,251) 80%, rgb(213,225,243) 100%)",
        }}
      /> */}

      {activeTab === "home" && (
        <Suspense fallback={null}>
          <ScrollReactiveBackground />
        </Suspense>
      )}

      <div
        className={`relative z-10 min-h-screen w-full transition-colors duration-500`}
        id={theme}
      >
        <NavBar />
        <ToggleMode className="hidden md:flex md:fixed md:top-8 md:right-8" iconSize="w-6 h-6" />
        {showTabs(activeTab)}
        <div className="hidden md:flex flex-col md:pt-24">
          <Suspense fallback={null}><ExperienceTimeline /></Suspense>
          <Suspense fallback={null}><MinimalProjects /></Suspense>
          <Suspense fallback={null}><Contact /></Suspense>
        </div>
      </div>
    </>
  );
}

export default Layout;
