import { Briefcase, Home, Mail, Moon, Rocket, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import { useTab } from "../providers/TabProvider";
import { Card } from "./Card";
import { Button } from "./Button";
import Tooltip from "./Tooltip";
import { NAV_ITEMS } from "../constants";
import { motion } from "framer-motion";

const NavBar = () => {
  const { theme, handleTheme } = useTheme();
  const { setActiveTab } = useTab();

  const toggleDark = (val: string) => {
    console.log(val, "val");

    handleTheme(val);
  };

  return (
    <>
      {/* Bottom Navigation */}
      {/* <div className="fixed bottom-0 inset-x-0 p-4 z-50">
        <Card
          className="mx-auto max-w-md dark:bg-gray-800/20 bg-white/20
          } backdrop-blur-xl border-0 shadow-lg"
        >
          <nav className="flex justify-around p-2">
            <Tooltip content="Home" position="top" offset={10}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("home")}
                className="transition-colors dark:text-blue-400 text-yellow-600"
              >
                <Home className="w-8 h-8" />
              </Button>
            </Tooltip>
            <Tooltip content="Experience" position="top" offset={10}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("experience")}
                className="transition-colors dark:text-blue-400 text-yellow-600"
              >
                <Briefcase className="w-8 h-8" />
              </Button>
            </Tooltip>
            <Tooltip content="Projects" position="top" offset={10}>
              <Button
                title="Projects"
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("projects")}
                className="transition-colors dark:text-blue-400 text-yellow-600"
              >
                <Rocket className="w-8 h-8" />
              </Button>
            </Tooltip>
            <Tooltip content="Contact" position="top" offset={10}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("contact")}
                className="transition-colors dark:text-blue-400 text-yellow-600"
              >
                <Mail className="w-8 h-8" />
              </Button>
            </Tooltip>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleDark(theme === "dark" ? "light" : "dark")}
              className="transition-colors dark:text-blue-400 text-yellow-600"
            >
              {theme === "dark" ? (
                <Sun className="w-8 h-8" />
              ) : (
                <Moon className="w-8 h-8" />
              )}
            </Button>
          </nav>
        </Card>
      </div> */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="flex items-center gap-2 px-4 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50"
        >
          <nav className="flex justify-around items-center p-4 gap-7">
            <Tooltip content="Home" position="top" offset={10}>
                <Home className="w-5 h-5 transition-colors dark:text-blue-400 text-yellow-600" onClick={() => setActiveTab("home")} />
            </Tooltip>
            <Tooltip content="Experience" position="top" offset={10}>
                <Briefcase className="w-5 h-5 transition-colors dark:text-blue-400 text-yellow-600" onClick={() => setActiveTab("experience")}/>
            </Tooltip>
            <Tooltip content="Projects" position="top" offset={10}>
                <Rocket className="w-5 h-5 transition-colors dark:text-blue-400 text-yellow-600" onClick={() => setActiveTab("projects")} />
            </Tooltip>
            <Tooltip content="Contact" position="top" offset={10}>
                <Mail className="w-5 h-5 transition-colors dark:text-blue-400 text-yellow-600" onClick={() => setActiveTab("contact")}/>
            </Tooltip>
            <div className="w-px h-6 bg-black/30  dark:bg-white/30" />
            <span
            onClick={() => toggleDark(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer transition-colors dark:text-blue-400 text-yellow-600"
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
    </>
  );
};

export default NavBar;
