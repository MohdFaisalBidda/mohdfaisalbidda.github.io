"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import colorApp from "../assets/project3.png";
import newsApp from "../assets/news.png";
import gApp from "../assets/project2.png";
import NoteKepper from "../assets/NoteKepper.png";
import Majesty from "../assets/Majesty.png";
import EcommerceStore from "../assets/project1.png";
import Builder from "../assets/builder.png";
import Adsy from "../assets/adsy.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  code: string;
  link: string;
}

const projects: Project[] = [
  // {
  //   id: 1,
  //   image: EcommerceStore,
  //   title: "Ecommerce Store",
  //   description:
  //     "Full stack Ecommerce store where Front-end is built using ReactJS and Back-end using NodeJS, ExpressJS, MongoDB and Redux for state management",
  //   code: "https://github.com/MohdFaisalBidda/E-commerce-website",
  //   link: "https://e-commerce-website1-0.vercel.app/",
  //   tech: ["Next.js", "TypeScript", "Tailwind"],
  // },
  {
    id: 1,
    image: Builder,
    title: "Builder",
    description:
      "The Builder application empowers users to effortlessly create forms using a visually intuitive drag-and-drop interface, providing a preview feature before saving. Easily share the form link to collect submissions and conveniently manage them through the user-friendly dashboard.",
    code: "https://github.com/MohdFaisalBidda/Builder",
    link: "https://dev-the-builder.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    image: Adsy,
    title: "Adsy Clone",
    description:
      'Clone of website named "Adsy" which is guest posting service website built with using Nextjs, sanity.io, and TailwindCSS',
    code: "https://github.com/MohdFaisalBidda/Adsy-Clone",
    link: "https://adsy-clone.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    image: NoteKepper,
    title: "Note Keeper",
    description:
      "Full stack application where Front-end is built using ReactJS and Back-end using NodeJS, ExpressJS, MongoDB",
    code: "https://github.com/MohdFaisalBidda/Note-Keeper-frontend",
    link: "https://note-keeper-frontend-eight.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    image: Majesty,
    title: "Majesty",
    description: "Majesty - A search engine designed by me.",
    code: "https://github.com/MohdFaisalBidda/Majesty",
    link: "https://majesty-pi.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    image: newsApp,
    title: "News App",
    description:
      "News Application to stay updated with Top headlines of the world.",
    code: "https://github.com/MohdFaisalBidda/News-App",
    link: "https://news-app-mohdfaisalbidda.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 4,
    image: colorApp,
    title: "Color App",
    description:
      "Color picker application built using react to choose varients of color of different shades.",
    code: "https://github.com/MohdFaisalBidda/Color_Picker",
    link: "https://color-picker-snowy.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 5,
    image: gApp,
    title: "Github Profile Viewer",
    description:
      "Github profile finder/viewer built using react and github-api",
    code: "https://github.com/MohdFaisalBidda/Github-Profile-Viewer",
    link: "https://github-profile-viewer-three.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!isScrolling) {
        setIsScrolling(true);
        if (e.deltaY > 0) {
          setCurrentIndex((prev) => (prev + 1) % projects.length);
        } else {
          setCurrentIndex(
            (prev) => (prev - 1 + projects.length) % projects.length
          );
        }
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsScrolling(false), 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [isScrolling]);

  // Auto-rotate every 5 seconds if not scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling) {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isScrolling]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {/* Background Video */}
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-black"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <img
            src={projects[currentIndex].image}
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

        {/* Project Content */}
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 h-full grid place-items-center"
        >
          <div className="w-full max-w-5xl px-4">
            {/* Project Counter */}

            {/* Project Card */}
            <motion.div
              className="relative grid grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() =>
                  window.open(projects[currentIndex].link, "_blank")
                }
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
                <motion.img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="w-full h-full object-fill"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Project Info */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-white border-white/20 hover:border-white/40 font-mono text-sm tracking-wider">
                    {String(currentIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="text-white/20 font-mono text-sm">
                    {String(projects.length).padStart(2, "0")}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold text-white leading-tight"
                >
                  {projects[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 text-lg"
                >
                  {projects[currentIndex].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-wrap gap-2"
                >
                  {projects[currentIndex].tech.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-white border-white/20 hover:border-white/40 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="outline"
                    className="text-white border-white/20 hover:bg-white/10 hover:scale-105 transform transition-all"
                    onClick={() =>
                      window.open(projects[currentIndex].link, "_blank")
                    }
                  >
                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrev}
          className="text-white border-white/20 hover:bg-white/10"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNext}
          className="text-white border-white/20 hover:bg-white/10"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
