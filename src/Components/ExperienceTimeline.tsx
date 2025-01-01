import React from "react";
import { motion } from "framer-motion";

function ExperienceTimeline() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-28">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">
          Experience
        </h2>
        <div className="space-y-12">
          {[
            {
              title: "Full Stack Developer",
              company: "Tech Innovators Inc",
              period: "2021 - Present",
              description:
                "Led development of enterprise-scale applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.",
            },
            {
              title: "Freelance",
              company: "Digital Solutions Ltd",
              period: "2019 - 2021",
              description:
                "Developed and maintained multiple client projects. Introduced automated testing that reduced bugs by 60%.",
            },
            {
              title: "Full Stack Developer",
              company: "StartUp Hub",
              period: "2018 - 2019",
              description:
                "Worked on front-end development using React and Redux. Collaborated with UX team to implement responsive designs.",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700"
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
