import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Experience } from "../constants";
import { Badge } from "./Badge";

const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "CG VIZ STUDIO",
    period: "2024 - Present",
    technologies: ["Next.js", "Three.js", "Typescript", "TailwindCSS", "SCSS", "Firebase"],
    description:
      "Handling the entire project from initialization to deployment, ensuring that the final product meets the client's expectations and exceeds their requirements for the Multi vendor marketplace and 3D Model Configurator. Developing these application using Next.js and Three.js, catering to a B2B audience by providing customizable 3D model services for client websites. This project further strengthens my experience in understanding client needs and delivering effective solutions in a B2B environment.",
  },
  {
    id: 2,
    role: "Freelance",
    company: "Securemyorg.",
    period: "2023 - 2024",
    technologies: ["ReactJS", "Next.js", "Typescript", "TailwindCSS", "SCSS", "Firebase"],
    description:
      "I engaged in freelance work with both B2B and B2C clients. My projects involved enhancing layouts, building client-specific websites, and integrating features like blog posting, pagination, and blog listings. This experience allowed me to understand B2C user engagement while also working with B2B clients who had specific organizational needs. Additionally, I contributed to organizational UI screens using React Native and delivered end-to-end MERN-based solutions, especially in food e-commerce, focusing on creating engaging, user-friendly UIs.",
  },
  {
    id: 3,
    role: "Full Stack Developer",
    company: "Techdarkshak Software LLP",
    period: "2022 - 2023",
    technologies: ["ReactJS", "Next.js", "Typescript", "TailwindCSS", "SCSS", "Firebase"],
    description:
      "I gained hands-on experience with tech stack, including ReactJS, Next.js, Typescript, TailwindCSS, SCSS, and Firebase. My primary responsibilities involved leading the design and development of the company's website and working on a platform similar to GoDaddy’s hosting solution called 'atomicat.' This project was B2C-focused, allowing users to create and host web pages effortlessly. I played a key role in crafting various components necessary for web page creation and implementing dynamic preview functionalities, enhancing the user experience. I also managed the migration of the platform from ReactJS to Next.js, which significantly boosted its efficiency and scalability.",
  },
]

function ExperienceTimeline() {
  const [activeId, setActiveId] = useState<number | null>(1);

  return (
    <div className="lg:container mx-auto px-4 py-10 pb-40 w-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-2">
            Experience
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-2 dark:text-transparent bg-clip-text bg-gradient-to-b dark:from-white dark:via-white text-black tracking-tighter">
            Experience
          </h1>
          <p className="text-xs lg:text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            My professional journey
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[23px] top-4 bottom-0 w-[1px] bg-gradient-to-b dark:from-white/20 dark:via-white/5 dark:to-transparent from-primary/20 via-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isActive = activeId === exp.id;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20 group"
                  onMouseEnter={() => setActiveId(exp.id)}
                  onMouseLeave={() => setActiveId(1)}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-2 top-1 w-8 h-8 flex items-center justify-center z-10">
                    {/* Glow */}
                    <div className={`absolute inset-0 bg-blue-400 dark:bg-blue-400 rounded-full blur-md transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`} />

                    {/* Core */}
                    <div className={`w-3 h-3 rounded-full border dark:border-white/20 transition-all duration-300 ${isActive ? 'bg-blue-400 dark:bg-blue-400 scale-125 dark:border-blue-400' : 'bg-white dark:bg-[#0A0A0A]'}`} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    layout
                    className={`p-6 md:p-8 rounded-2xl border transition-all duration-300
                         ${isActive
                        ? 'bg-gradient-to-br from-white via-white to-blue-50/50 dark:from-zinc-900/90 dark:via-zinc-900/90 dark:to-zinc-800/50 border-primary/10 dark:border-white/10 shadow-xl shadow-blue-500/5 dark:shadow-black/50 border-l-4 border-l-blue-400 dark:border-l-blue-400'
                        : 'bg-transparent border-transparent hover:bg-white/[0.02] '
                      }
                       `}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-black dark:text-white' : 'dark:text-slate-300 text-primary'}`}>
                        {exp.role}
                      </h3>
                      <span className="text-sm font-spaceMono text-slate-500 mt-1 md:mt-0">{exp.period}</span>
                    </div>

                    <p className={`text-blue-400 dark:text-blue-400 font-medium mb-4`}>{exp.company}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="dark:text-slate-400 leading-relaxed mb-6 text-sm">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map(tech => (
                              <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-transparent dark:text-blue-400 border border-cyan-900/30 font-spaceMono">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                      <div className="h-4 overflow-hidden">
                        <p className="text-slate-600 text-sm truncate">
                          {exp.description}
                        </p>
                      </div>
                    )}

                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceTimeline;
