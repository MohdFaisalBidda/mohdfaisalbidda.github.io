import React, { useContext } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { TabContext } from "../providers/TabProvider";
import { Coffee, Github, X } from "lucide-react";
import {
  BsFile,
  BsFillPersonLinesFill,
  BsFolder,
  BsGithub,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { Button } from "./Button";
import { Badge } from "./Badge";

interface SkillBadgeGroupProps {
  skills: string[];
}

const skills = [
  "JavaScript",
  "TypeScript",
  "C++",
  "Java",
  "Solidity",
  "Next.js",
  "React",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "Docker",
  "Redux",
  "Recoil",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "WebSocket",
  "foundry",
  "Zod",
  "Git",
];

const Home = () => {
  const floatingAnimation = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="container mx-auto px-4 pt-20 pb-28">
      <div className="space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Profile Image with Enhanced Background */}
          <motion.div
            className="relative"
            variants={floatingAnimation}
            animate="animate"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-full blur-2xl opacity-50" />
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 dark:border-gray-700 border-white/50 shadow-xl">
              <img
                src={Hero}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-4 h-4 dark:bg-blue-500 bg-yellow-400 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Badge variant="secondary" className="mb-4">
                Open to Contribute
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 dark:text-gray-100 text-gray-900">
                Full Stack Developer
              </h1>
              <p className="text-lg mb-6 dark:text-gray-300 text-gray-600">
                Transforming ideas into elegant digital solutions
              </p>

              {/* <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "TypeScript",
                  "Tailwind CSS",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-sm dark:text-gray-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div> */}
              <SkillBadgeGroup skills={skills} />
              <div className="flex gap-4 justify-center lg:justify-start pl-2">
                <Button size="icon" variant="ghost">
                  <BsGithub className="w-5 h-5 dark:text-gray-300" />
                </Button>
                <Button size="icon" variant="ghost">
                  <BsTwitter className="w-5 h-5 dark:text-gray-300" />
                </Button>
                <Button size="icon" variant="ghost">
                  <BsLinkedin className="w-5 h-5 dark:text-gray-300" />
                </Button>
                <Button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1KpHMfZpEdtyBO0FIlfXRLMkSTFrsA23t/view?usp=drivesdk"
                    )
                  }
                  size="icon"
                  variant="ghost"
                >
                  <BsFillPersonLinesFill className="w-5 h-5 dark:text-gray-300" />
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-gray-100 text-gray-900">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Freelancer",
                description:
                  "Passionate about creating clean, efficient, and scalable solutions that solve real-world problems.",
                Icon: Github,
              },
              {
                title: "Problem Solver",
                description:
                  "Analytical thinker with a knack for finding innovative solutions to complex technical challenges.",
                Icon: Coffee,
              },
              {
                title: "Continuous Learner",
                description:
                  "Always exploring new technologies and methodologies to stay at the forefront of web development.",
                Icon: X,
              },
            ].map(({ title, description, Icon }, idx) => (
              <motion.div
                key={idx}
                variants={floatingAnimation}
                animate="animate"
                className="p-6 rounded-xl dark:bg-gray-800/30 bg-white/30 backdrop-blur-sm"
              >
                <div className="mb-4 flex justify-center">
                  <Icon className="w-8 h-8 dark:text-blue-400 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center dark:text-gray-100 text-gray-900">
                  {title}
                </h3>
                <p className="text-center dark:text-gray-300 text-gray-600">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;

const SkillBadgeGroup: React.FC<SkillBadgeGroupProps> = ({ skills }) => {
  return (
    <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 pr-80 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center">
      {skills.map((skill, index) => (
        <Badge variant="outline" className="dark:text-white" key={index}>{skill}</Badge>
      ))}
    </div>
  );
};
