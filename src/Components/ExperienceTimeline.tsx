import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar } from "lucide-react";
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
          <p className="text-lg dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            My professional journey
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-[23px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

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
                  onMouseLeave={() => setActiveId(null)}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-2 top-1 w-8 h-8 flex items-center justify-center z-10">
                    {/* Glow */}
                    <div className={`absolute inset-0 dark:bg-blue-400 rounded-full blur-md transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`} />

                    {/* Core */}
                    <div className={`w-3 h-3 rounded-full border border-white/20 transition-all duration-300 ${isActive ? 'dark:bg-blue-400 scale-125 dark:border-blue-400' : 'bg-[#0A0A0A]'}`} />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    layout
                    className={`
                         p-6 md:p-8 rounded-2xl border transition-all duration-300
                         ${isActive
                        ? 'bg-[#0A0A0A] border-white/10 shadow-2xl'
                        : 'bg-transparent border-transparent hover:bg-white/[0.02]'
                      }
                       `}
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                      <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {exp.role}
                      </h3>
                      <span className="text-sm font-mono text-slate-500 mt-1 md:mt-0">{exp.period}</span>
                    </div>

                    <p className="dark:text-blue-400 font-medium mb-4">{exp.company}</p>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map(tech => (
                              <span key={tech} className="px-2 py-1 text-[10px] uppercase tracking-wider italic font-semibold rounded bg-cyan-950/30 dark:text-blue-400 border border-cyan-900/30">
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

const DesignationLabel: React.FC<{ exp: Experience; isHovered: boolean; align: 'left' | 'right' | 'center', mobile?: boolean }> = ({ exp, isHovered, align, mobile }) => {
  return (
    <div className={`flex flex-col ${align === 'right' ? 'items-end' : align === 'left' ? 'items-start' : 'items-center'} ${mobile ? '' : 'md:group cursor-pointer'}`}>
      <motion.span
        className={`text-2xl md:text-3xl font-bold font-space transition-colors duration-300 ${isHovered ? 'text-indigo-500' : 'text-zinc-900 dark:text-white'}`}
      >
        {exp.role}
      </motion.span>
      <span className={`text-base md:text-lg font-medium text-zinc-500 dark:text-zinc-400 mt-1`}>
        {exp.company}
      </span>
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 mt-3 rounded-full text-xs font-medium border ${isHovered ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-500'}`}>
        <Calendar className="w-3 h-3" />
        {exp.period}
      </span>
    </div>
  );
}

// Sub-component for the revealed detail card
const DetailCard: React.FC<{ exp: Experience; origin: 'left' | 'right' }> = ({ exp, origin }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: origin === 'left' ? -20 : 20, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: origin === 'left' ? -10 : 10, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`absolute w-full max-w-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-6 rounded-2xl border border-zinc-200 dark:border-zinc-700 shadow-2xl shadow-indigo-500/10 z-20 ${origin === 'left' ? 'left-0' : 'right-0'}`}
    >
      <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed mb-6">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-semibold tracking-wide bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md border border-zinc-200 dark:border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Decorative Arrow */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 transform rotate-45 ${origin === 'left'
          ? '-left-[7px] border-r-0 border-t-0'
          : '-right-[7px] border-l-0 border-b-0'
          }`}
      />
    </motion.div>
  );
}

export default ExperienceTimeline;
