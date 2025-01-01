import React from "react";
import colorApp from "../assets/project3.png";
import newsApp from "../assets/news.png";
import gApp from "../assets/project2.png";
import NoteKepper from "../assets/NoteKepper.png";
import Majesty from "../assets/Majesty.png";
import EcommerceStore from "../assets/project1.png";
import Adsy from "../assets/adsy.png";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { ExternalLink } from "lucide-react";

interface Project {
  id: number;
  image: any;
  title: string;
  description: string;
  code: string;
  preview: string;
  tech: string[];
}

const Projects = () => {
  const lists: Project[] = [
    {
      id: 1,
      image: EcommerceStore,
      title: "Ecommerce Store",
      description:
        "Full stack Ecommerce store where Front-end is built using ReactJS and Back-end using NodeJS, ExpressJS, MongoDB and Redux for state management",
      code: "https://github.com/MohdFaisalBidda/E-commerce-website",
      preview: "https://e-commerce-website1-0.vercel.app/",
      tech: [""],
    },
    {
      id: 2,
      image: Adsy,
      title: "Adsy Clone",
      description:
        'Clone of website named "Adsy" which is guest posting service website built with using Nextjs, sanity.io, and TailwindCSS',
      code: "https://github.com/MohdFaisalBidda/Adsy-Clone",
      preview: "https://adsy-clone.vercel.app/",
      tech: [""],
    },
    {
      id: 3,
      image: NoteKepper,
      title: "Note Keeper",
      description:
        "Full stack application where Front-end is built using ReactJS and Back-end using NodeJS, ExpressJS, MongoDB",
      code: "https://github.com/MohdFaisalBidda/Note-Keeper-frontend",
      preview: "https://note-keeper-frontend-eight.vercel.app/",
      tech: [""],
    },
    {
      id: 2,
      image: Majesty,
      title: "Majesty",
      description: "Majesty - A search engine designed by me.",
      code: "https://github.com/MohdFaisalBidda/Majesty",
      preview: "https://majesty-pi.vercel.app/",
      tech: [""],
    },
    {
      id: 3,
      image: newsApp,
      title: "News App",
      description:
        "News Application to stay updated with Top headlines of the world.",
      code: "https://github.com/MohdFaisalBidda/News-App",
      preview: "https://news-app-mohdfaisalbidda.vercel.app/",
      tech: [""],
    },
    {
      id: 4,
      image: colorApp,
      title: "Color App",
      description:
        "Color picker application built using react to choose varients of color of different shades.",
      code: "https://github.com/MohdFaisalBidda/Color_Picker",
      preview: "https://color-picker-snowy.vercel.app/",
      tech: [""],
    },
    {
      id: 5,
      image: gApp,
      title: "Github Profile Viewer",
      description:
        "Github profile finder/viewer built using react and github-api",
      code: "https://github.com/MohdFaisalBidda/Github-Profile-Viewer",
      preview: "https://github-profile-viewer-three.vercel.app/",
      tech: [""],
    },
  ];
  return (
    <div className="container mx-auto px-4 pt-20 pb-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lists.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">
                    View Project <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
