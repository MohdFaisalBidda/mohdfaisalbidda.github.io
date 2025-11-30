import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
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
      <div className="lg:container mx-auto px-4 py-10 pb-40 w-full relative">
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
          <p className="text-xs lg:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            Swipe through my selected projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[400px] w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Media Container */}
              <div className="absolute inset-0 overflow-hidden bg-slate-200 dark:bg-transparent">
                {project.video ?
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    className="w-full h-full absolute top-0 left-0"
                  /> :
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain transition-transform duration-700 ease-out"
                    whileHover={{ scale: 1.05 }}
                  />
                }

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                {/* Top Right Year Tag */}
                {/* <div className="absolute top-6 right-6">
                  <span className="px-3 py-1 text-xs font-mono font-medium text-white bg-black/50 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                    {project.year}
                  </span>
                </div> */}

                {/* Bottom Content Area */}
                <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">

                  {/* Title */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {project.title}
                    </h3>

                    {/* Action Buttons - Reveal on Hover */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/40 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-colors border border-white/30">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-black/40 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-colors border border-white/30">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-secondary rounded-full mb-3 group-hover:w-20 transition-all duration-500 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />

                  {/* Hidden Details - Slide Up Reveal */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                    <div className="overflow-hidden">
                      <p className="text-slate-100 font-medium text-sm leading-relaxed mb-4 line-clamp-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pb-1">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] lg:text-xs font-semibold font-spaceMono text-blue-100 px-2.5 py-1 rounded-full border backdrop-blur-sm shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
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
