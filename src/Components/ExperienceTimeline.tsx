import React from "react";
import { motion } from "framer-motion";

function ExperienceTimeline() {
  return (
    <div className="lg:container mx-auto lg:px-4 pt-20 pb-28 px-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Experience
        </h2>
        <div className="">
          {[
            {
              title: "Full Stack Developer",
              company: "CG VIZ STUDIO",
              period: "2024 - Present",
              description:
                "Handling the entire project from initialization to deployment, ensuring that the final product meets the client's expectations and exceeds their requirements for the Multi vendor marketplace and 3D Model Configurator. Developing these application using Next.js and Three.js, catering to a B2B audience by providing customizable 3D model services for client websites. This project further strengthens my experience in understanding client needs and delivering effective solutions in a B2B environment.",
            },
            {
              title: "Freelance",
              company: "Securemyorg.",
              period: "2023 - 2024",
              description:
                "I engaged in freelance work with both B2B and B2C clients. My projects involved enhancing layouts, building client-specific websites, and integrating features like blog posting, pagination, and blog listings. This experience allowed me to understand B2C user engagement while also working with B2B clients who had specific organizational needs. Additionally, I contributed to organizational UI screens using React Native and delivered end-to-end MERN-based solutions, especially in food e-commerce, focusing on creating engaging, user-friendly UIs.",
            },
            {
              title: "Full Stack Developer",
              company: "Techdarkshak Software LLP",
              period: "2022 - 2023",
              description:
                "I gained hands-on experience with tech stack, including ReactJS, Next.js, Typescript, TailwindCSS, SCSS, and Firebase. My primary responsibilities involved leading the design and development of the company's website and working on a platform similar to GoDaddy’s hosting solution called 'atomicat.' This project was B2C-focused, allowing users to create and host web pages effortlessly. I played a key role in crafting various components necessary for web page creation and implementing dynamic preview functionalities, enhancing the user experience. I also managed the migration of the platform from ReactJS to Next.js, which significantly boosted its efficiency and scalability.",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 pb-12 last:pb-0 border-gray-200 dark:border-gray-700"
            >
              <div className="absolute w-4 h-4 rounded-full -left-[9px] top-0 bg-yellow-400 dark:bg-blue-500" />
              <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                {job.title}
              </h3>
              <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
                {job.company} • {job.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {job.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceTimeline;
