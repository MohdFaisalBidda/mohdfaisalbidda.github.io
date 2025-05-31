import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import Tooltip from "./Tooltip";

interface Project {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  year?: string;
  category?: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  isSourceCode?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/assets/3dbae.png",
    title: "3DBAE",
    subtitle: "Transform Your Product Display with Interactive 3D",
    year: "2025",
    category: "Saas",
    description:
      "Engage customers and boost sales with immersive 3D product configurators—no coding required. Showcase your products with beautiful 3D visuals. Easy to create, easy to embed—built for e‑commerce.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Cloudflare",
      "Docker",
      "PostgreSQL",
      "Zod",
      "Git",
      "GCP",
      "Framer Motion",
    ],
    liveUrl: "https://3dbae.com",
    githubUrl: "",
    isSourceCode: false,
  },
  {
    id: 2,
    image: "/assets/builder.png",
    title: "Builder",
    subtitle: "Drag-and-Drop Form Builder",
    year: "2024",
    category: "Web Application",
    description:
      "The Builder application empowers users to effortlessly create forms using a visually intuitive drag-and-drop interface, providing a preview feature before saving. Easily share the form link to collect submissions and conveniently manage them through the user-friendly dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "PostgreSQL",
      "Zod",
      "Git",
      "Framer Motion",
      "React DnD",
    ],
    liveUrl: "https://dev-the-builder.vercel.app",
    githubUrl: "https://github.com/MohdFaisalBidda/Builder",
    isSourceCode: true,
  },
  {
    id: 3,
    image: "/assets/adsy.png",
    title: "Adsy Clone",
    subtitle: "Guest Posting Service",
    year: "2023",
    category: "Website Clone",
    description:
      "Clone of website named 'Adsy' which is guest posting service website built with using Nextjs, sanity.io, and TailwindCSS.",
    tech: ["Next.js", "Sanity.io", "Tailwind CSS"],
    liveUrl: "https://adsy-clone.vercel.app/",
    githubUrl: "https://github.com/MohdFaisalBidda/Adsy-Clone",
    isSourceCode: true,
  },
];

export default function MinimalProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <div className="">
      {/* Header */}
      <div className="absolute top-5 right-5 lg:top-10 lg:right-10">
        <Tooltip content="All Repos" position="left" offset={10}>
          <Github
            onClick={() =>
              window.open("https://github.com/MohdFaisalBidda", "_blank")
            }
            className="w-4 h-4 lg:w-8 lg:h-8 text-white cursor-pointer"
          />
        </Tooltip>
      </div>
      <div className="lg:container mx-auto px-4 py-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            Featured Work
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 dark:text-gray-100 text-gray-900">
            Projects
          </h1>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Swipe through my selected projects
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[1000px] lg:h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute lg:inset-0"
            >
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute -left-14 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm border dark:border-gray-700 border-gray-200 shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 dark:text-gray-300 text-gray-700" />
          </button>
          <button
            onClick={nextProject}
            className="absolute -right-14 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full dark:bg-gray-800/50 bg-white/50 backdrop-blur-sm border dark:border-gray-700 border-gray-200 shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 dark:text-gray-300 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-40 lg:-bottom-8 left-0 right-0 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "dark:bg-blue-400 bg-yellow-500"
                    : "dark:bg-gray-600 bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-8">
      {/* Image Section (Left) */}
      <motion.div
        className="lg:w-1/2 h-full relative rounded-2xl border dark:border-gray-700 border-gray-200"
        whileHover={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 dark:to-black/30 z-10 "
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-fill rounded-sm"
        />
      </motion.div>

      {/* Content Section (Right) */}
      <div className="lg:w-1/2 h-full flex flex-col justify-center p-6 lg:p-12 dark:bg-gray-800/30 bg-white/30 backdrop-blur-sm rounded-2xl border dark:border-gray-700 border-gray-200">
        <div className="flex items-center gap-3 mb-4">
          <Badge
            variant="outline"
            className="text-xs border-gray-300 dark:border-gray-600 text-black dark:text-white"
          >
            {project.category}
          </Badge>
          <span className="text-xs dark:text-gray-400 text-gray-500">
            {project.year}
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold mb-3 dark:text-gray-100 text-gray-900">
          {project.title}
        </h2>
        <p className="text-lg mb-5 dark:text-gray-300 text-gray-600">
          {project.subtitle}
        </p>
        <p className="mb-8 dark:text-gray-400 text-gray-500 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-8">
          <p className="text-xs uppercase tracking-wider mb-3 dark:text-gray-400 text-gray-500">
            Built With
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs dark:border-gray-600 dark:text-gray-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Button
            onClick={() => window.open(project.liveUrl, "_blank")}
            className="relative font-bold 
    rounded-lg shadow-lg 
    transition-colors duration-300 text-white bg-primary flex-1 sm:flex-none"
          >
            <span className="shiny-overlay-light" />
            View Live
            <ArrowUpRight className="w-4 h-4" />
          </Button>
          {project.isSourceCode && (
            <Button
              variant="ghost"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="dark:text-gray-300 dark:hover:bg-gray-700 flex-1 sm:flex-none transition-all ease-in-out duration-300"
            >
              <Github className="mr-2 w-4 h-4" />
              Source Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
