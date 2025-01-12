import { Briefcase, Home, Mail, Moon, Rocket, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import { useTab } from "../providers/TabProvider";
import { Card } from "./Card";
import { Button } from "./Button";
import Tooltip from "./Tooltip";

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
      <div className="fixed bottom-0 inset-x-0 p-4 z-50">
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
                <Home className="w-5 h-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Experience" position="top" offset={10}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("experience")}
                className="transition-colors dark:text-blue-400 text-yellow-600"
              >
                <Briefcase className="w-5 h-5" />
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
                <Rocket className="w-5 h-5" />
              </Button>
            </Tooltip>
            <Tooltip content="Contact" position="top" offset={10}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setActiveTab("contact")}
                className="transition-colors dark:text-blue-400 text-yellow-600"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </Tooltip>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleDark(theme === "dark" ? "light" : "dark")}
              className="transition-colors dark:text-blue-400 text-yellow-600"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </nav>
        </Card>
      </div>
    </>
  );
};

export default NavBar;
