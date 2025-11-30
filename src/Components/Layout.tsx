import { useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import { useTab } from "../providers/TabProvider";
import { useTheme } from "../providers/ThemeProvider";
import NavBar from "./NavBar";
import ExperienceTimeline from "./ExperienceTimeline";
// import Projects from "./Projects";
import MinimalProjects from "./MinimalProjects";

function Layout() {
  const { theme } = useTheme();
  const { activeTab } = useTab();

  useEffect(() => {
    const titleMap: Record<string, string> = {
      home: "Faisal | Full Stack Developer",
      experience: "Experience | Faisal",
      projects: "Projects | Faisal",
      contact: "Contact | Faisal",
    };
    const descMap: Record<string, string> = {
      home: "Portfolio of Mohd Faisal Bidda — Full Stack Developer building elegant web apps with React, TypeScript, Node.js, and more.",
      experience: "Professional experience and timeline of Mohd Faisal Bidda.",
      projects: "Selected projects by Mohd Faisal Bidda showcasing full stack skills.",
      contact: "Get in touch with Mohd Faisal Bidda for collaboration or opportunities.",
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

  const showTabs = (tab: string): JSX.Element => {
    switch (tab) {
      case "home":
        return <Home />;

      case "experience":
        return <ExperienceTimeline />;

      case "projects":
        return <MinimalProjects />;

      case "contact":
        return <Contact />;

      default:
        return <></>;
    }
  };
  return (
    <div
      className={`min-h-screen w-full $
    bg-white dark:bg-[#040D12] transition-colors duration-500 overflow-hidden`}
      id={theme}
    >
      <NavBar />
      {showTabs(activeTab)}
    </div>
  );
}

export default Layout;
