import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronLeft, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import Tooltip from "./Tooltip";
import { projects } from "../constants";


export default function MinimalProjects() {
  return (
    <div className="">
      {/* Header */}
      <div className="absolute top-5 right-5 lg:top-10 lg:right-10">
        <Tooltip content="All Repos" position="bottom" offset={10}>
          <Github
            onClick={() =>
              window.open("https://github.com/MohdFaisalBidda", "_blank")
            }
            className="w-4 h-4 lg:w-8 lg:h-8 dark:text-white text-black cursor-pointer"
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
          <Badge variant="secondary" className="mb-2">
            Featured Work
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-2 dark:text-transparent bg-clip-text bg-gradient-to-b dark:from-white dark:via-white text-black tracking-tighter">
            Projects
          </h1>
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Swipe through my selected projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[320px] w-full rounded-2xl overflow-hidden bg-zinc-900/40 border border-white/5 backdrop-blur-sm cursor-default"
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 ease-out"
                  whileHover={{ scale: 1.1 }}
                />
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-500 mix-blend-overlay" />
              </div>

              {/* Decorative Border Glow */}
              <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:dark:border-blue-400/50 transition-colors duration-500" />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Floating Top Elements */}
                <div className="absolute top-6 right-6 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="px-2 py-1 text-[10px] font-mono border border-white/20 bg-black/50 backdrop-blur-md rounded text-zinc-300">
                    {project.year}
                  </span>
                </div>

                {/* Text Content Area */}
                <div className="relative z-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Title and Tech Line */}
                  <div className="mb-2">
                    <h3 className="text-2xl font-bold font-space text-white mb-2 leading-tight tracking-tight">
                      {project.title}
                    </h3>

                    {/* Animated Divider */}
                    <motion.div
                      className="h-0.5 bg-indigo-500 mb-3 origin-left"
                      initial={{ width: 0 }}
                      whileHover={{ width: '40px' }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Tech Stack - Staggered Fade In */}
                    <div className="flex flex-wrap gap-2 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 delay-75 overflow-hidden">
                      {project.tech.map((tag, i) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-indigo-200 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description - Fade/Slide In */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-500 ease-out">
                    <p className="text-zinc-300 text-sm leading-relaxed mb-6 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0">
                      <a
                        href={project.githubUrl}
                        className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
