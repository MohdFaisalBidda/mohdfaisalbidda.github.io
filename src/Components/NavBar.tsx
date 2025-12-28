import { Briefcase, Home, Mail, Rocket } from "lucide-react";
import { useTab } from "../providers/TabProvider";
import Tooltip from "./Tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ToggleMode from "./ToggleMode";

const NavBar = () => {
  const { setActiveTab } = useTab();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up or at top of page
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }

      // Always update lastScrollY to current position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar, { passive: true });

    // Initial check in case page is loaded with scroll position
    if (window.scrollY <= 100) {
      setIsVisible(true);
    }

    // Cleanup
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex md:hidden fixed bottom-6 left-12 -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          duration: 0.3
        }}
      >
        <div className="flex items-center gap-2 px-4 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50">
          <nav className="flex justify-around items-center p-3 gap-7">
            <Tooltip content="Home" position="top" offset={10}>
              <Home className="w-4 h-4 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("home")} />
            </Tooltip>
            <Tooltip content="Experience" position="top" offset={10}>
              <Briefcase className="w-4 h-4 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("experience")} />
            </Tooltip>
            <Tooltip content="Projects" position="top" offset={10}>
              <Rocket className="w-4 h-4 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("projects")} />
            </Tooltip>
            <Tooltip content="Contact" position="top" offset={10}>
              <Mail className="w-4 h-4 transition-colors dark:text-blue-400 text-primary" onClick={() => setActiveTab("contact")} />
            </Tooltip>
            <div className="w-px h-6 bg-black/30  dark:bg-white/30" />
            <ToggleMode />
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
