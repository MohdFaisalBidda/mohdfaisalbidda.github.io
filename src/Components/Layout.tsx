import React from "react";
import Projects from "./Projects";
import Home from "./Home";
import Contact from "./Contact";
import { useTab } from "../providers/TabProvider";
import { useTheme } from "../providers/ThemeProvider";
import NavBar from "./NavBar";
import ExperienceTimeline from "./ExperienceTimeline";
import ProjectCarousel from "./NewAllProjects";

function Layout() {
  const { theme } = useTheme();
  const { activeTab } = useTab();
  console.log(activeTab, "activeTab");

  const showTabs = (tab: string): JSX.Element => {
    switch (tab) {
      case "home":
        return <Home />;

      case "experience":
        return <ExperienceTimeline />;

      case "projects":
        return <ProjectCarousel />;

      case "contact":
        return <Contact />;

      default:
        return <></>;
    }
  };
  return (
    <div
      className={`min-h-screen w-full $
    bg-white dark:bg-[#0a192f] transition-colors duration-500 overflow-hidden`}
      id={theme}
    >
      <NavBar />
      {showTabs(activeTab)}
    </div>
  );
}

export default Layout;
