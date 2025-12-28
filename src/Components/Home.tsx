import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { ABOUTS, SOCIALS } from "../constants";

// Icon wrapper to handle different icon types
const IconWrapper: React.FC<{ icon: any; className?: string }> = ({ icon: Icon, className }) => {
  if (!Icon) return null;
  return <Icon className={className} />;
};

interface SkillBadgeGroupProps {
  skills: string[];
}

const skills = [
  "JavaScript",
  "TypeScript",
  "Solidity",
  "React",
  "Next.js",
  "Three.js",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "MySQL",
  "Docker",
  "Kubernetes",
  "Redux",
  "Recoil",
  "Zustand",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "WebSocket",
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
    <div className="lg:container mx-auto px-4 pt-20 pb-28 w-full">
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
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-900 rounded-full blur-2xl opacity-40 will-change-transform" />
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 dark:border-white border-white/50 shadow-xl">
              <img
                src={"/assets/hero.avif"}
                alt="Profile"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            {/* <motion.div
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-3 h-3 bg-white rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2" />
            </motion.div> */}
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 dark:text-transparent bg-clip-text bg-gradient-to-b dark:from-white dark:via-white text-black">
                Full Stack Developer
              </h1>
              <p className="text-xs lg:text-lg mb-6 dark:text-gray-300 text-gray-600">
                Transforming ideas into elegant digital solutions
              </p>

              <SkillBadgeGroup skills={skills} />
              <div className="flex gap-6 justify-center lg:justify-start pl-2 pt-5 lg:pt-0">
                {SOCIALS.map(({ platform, url, icon }, idx) => {
                  const IconComponent = icon as React.ComponentType<any>;
                  return (
                    <IconComponent
                      key={idx}
                      className="w-5 h-5 dark:text-gray-300 cursor-pointer hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(url, "_blank")}
                    />
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-3 gap-8 px-10 lg:px-0 pt-12">
            {ABOUTS.map(({ title, description, Icon }, idx) => (
              <motion.div
                key={idx}
                // variants={floatingAnimation}
                animate="animate"
                className="p-6 rounded-3xl backdrop-blur-sm border dark:border-white/10"
              >
                <div className="mb-4 flex justify-center">
                  <IconWrapper icon={Icon} className="w-8 h-8 dark:text-blue-400 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center dark:text-gray-100 text-gray-900">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-center dark:text-gray-300 text-gray-600 text-balance">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {/* <ScrollIndicator /> */}
    </div>
  );
};

export default Home;

const SkillBadgeGroup: React.FC<SkillBadgeGroupProps> = ({ skills }) => {
  return (
    <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 pr-80 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center">
      {skills.map((skill, index) => (
        <Badge variant="outline" className="dark:text-white dark:border-white/30" key={index}>
          {skill}
        </Badge>
      ))}
    </div>
  );
};
