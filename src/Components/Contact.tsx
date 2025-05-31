import { FC } from "react";
import { motion } from "framer-motion";

const Contact: FC = () => {
  return (
    <div className="lg:container mx-auto lg:px-4 pt-20 px-10">
      {/* About Section */}
      <main className="lg:container mx-auto px-4 pt-20 pb-28">
        <div className="max-w-4xl mx-auto">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-32"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -left-4 top-0 w-1 h-32 bg-amber-500 dark:bg-secondary"
            />
            <div className="ml-8">
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-3xl lg:text-5xl font-bold mb-8 text-amber-500 dark:text-secondary"
              >
                About Me
              </motion.h2>
              <div className="space-y-6 text-sm lg:text-lg relative text-gray-600 dark:text-gray-300">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="relative z-10"
                >
                  I'm Faisal, a Full Stack Dev passionate about creating
                  scalable, user-friendly web and mobile applications. With
                  expertise in ReactJS, Next.js, TypeScript, and Three.js, I've
                  contributed to projects ranging from B2C platforms like a
                  GoDaddy-style hosting solution to B2B 3D model configurators.
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="relative z-10"
                >
                  My experience spans UI/UX design, full-stack development, and
                  real-time functionalities, delivering tailored solutions for
                  diverse client needs.
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-4 top-0 w-1 h-32 bg-amber-500 dark:bg-secondary"
            />
            <div className="mr-8 text-right">
              <motion.h2
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-3xl lg:text-5xl font-bold mb-8 text-amber-500 dark:text-secondary"
              >
                Get In Touch
              </motion.h2>
              <div className="space-y-4 relative text-gray-600 dark:text-gray-300">
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-sm lg:text-lg relative z-10"
                >
                  My inbox is always open, if you just want to say Hello👋
                </motion.p>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="text-sm lg:text-lg relative z-10"
                >
                  I'll try my best to get back to you! Feel free to mail me
                  about any job opportunity.
                </motion.p>

                <a href="mailto:biddafaisal@gmail.com">
                  <button className="text-center mt-16 border-4 border-amber-300 px-6 py-3 font-bold text-black hover:bg-amber-300 hover:text-black hover:scale-105 duration-200 rounded-lg dark:bg-primary dark:border-secondary dark:text-secondary dark:hover:text-primary dark:hover:bg-secondary">
                    Mail me
                  </button>
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
