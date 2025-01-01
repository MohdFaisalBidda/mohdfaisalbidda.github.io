import React, { FC } from "react";
import { motion } from "framer-motion";

const About: FC = () => {
  return (
    <>
      <div id="about" className="w-full pb-20 dark:bg-primary">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center align-middle w-full h-full">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ opacity: 80 }}
            transition={{ duration: 1.3 }}
            className=""
          >
            <p className="text-4xl font-bold inline border-b-4 border-black dark:text-secondary dark:border-secondary">
              About
            </p>
          </motion.div>

          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ opacity: 80 }}
            transition={{ duration: 1.3 }}
            className="text-xl mt-20 dark:text-gray-400"
          >
            I'm Faisal, a Full Stack Dev passionate about creating scalable, user-friendly web and
            mobile applications. With expertise in ReactJS, Next.js, TypeScript,
            and Three.js, I’ve contributed to projects ranging from B2C
            platforms like a GoDaddy-style hosting solution to B2B 3D model
            configurators. My experience spans UI/UX design, full-stack
            development, and real-time functionalities, delivering tailored
            solutions for diverse client needs.
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1cIl6gssF1SLLPnOusMPTaR4YsSt3cWMbQsjIYbBn_QM/edit?usp=sharing"
              className="pl-4 text-sm text-primary dark:text-secondary hover:text-primary/50 hover:dark:text-secondary/50 transition-all ease-in-out duration-200"
            >
              Read More
            </a>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default About;
