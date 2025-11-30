import { Briefcase, Home, Mail, Moon, Rocket, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import { useTab } from "../providers/TabProvider";
import Tooltip from "./Tooltip";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme, handleTheme } = useTheme();
  const { setActiveTab } = useTab();

  const toggleDark = (val: string) => {
    console.log(val, "val");

    handleTheme(val);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="flex items-center gap-2 px-4 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50"
      >
        <nav className="flex justify-around items-center p-4 gap-7">
          <Tooltip content="Home" position="top" offset={10}>
            <Home className="w-5 h-5 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("home")} />
          </Tooltip>
          <Tooltip content="Experience" position="top" offset={10}>
            <Briefcase className="w-5 h-5 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("experience")} />
          </Tooltip>
          <Tooltip content="Projects" position="top" offset={10}>
            <Rocket className="w-5 h-5 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("projects")} />
          </Tooltip>
          <Tooltip content="Contact" position="top" offset={10}>
            <Mail className="w-5 h-5 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("contact")} />
          </Tooltip>
          <div className="w-px h-6 bg-black/30  dark:bg-white/30" />
          <span
            onClick={() => toggleDark(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer transition-colors dark:text-blue-400 text-primary"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </span>
        </nav>
      </motion.div>
    </div>
  );
};

export default NavBar;
