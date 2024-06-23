import React, { FC, useCallback } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Hero from "../assets/hero.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import particlesConfig from "../particlesConfig.json";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <div id="home" className=" h-screen w-full dark:bg-primary ">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:gap-x-28 pt-52 sm:pt-48 ">
          <Particles
            className="absolute h-full w-full opacity-90 z-0"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig as any}
          />
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [-250, 0],
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="my-8"
          >
            <div className="flex space-x-2">
              <h2 className="text-3xl sm:text-4xl font-semibold text-black pb-5 dark:text-secondary">
                I'm a{" "}
              </h2>
              <div className="text-3xl sm:text-4xl font-semibold text-black pb-5 dark:text-secondary">
                <Typewriter
                  options={{
                    strings: ["Full Stack Dev", "Frontend Dev", "Backend Dev"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <p className=" text-gray-600 text-md text-justify py-4 max-w-md dark:text-gray-400">
              Full Stack Dev, I specialize in building and maintaining
              high-performance, user-friendly web applications using the
              Javascript. I am skilled in creating responsive UI components,
              implementing animations and user interactions, building end-to-end
              application and optimizing the overall performance of the
              application.
            </p>
            <div className="flex items-center space-x-5">
              <button className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-amber-300 hover:bg-amber-300  hover:border-white font-semibold border-solid hover:scale-105 duration-300 dark:border-2 dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary dark:text-secondary ">
                <Link to="portfolio" smooth>
                  Portfolio
                </Link>
                <span className="group-hover:rotate-90">
                  <AiOutlineRight size={20} />
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [80, 0],
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            className="rounded-xl mx-auto w-1/2 lg:ml-20 2xl:w-2/5 lg:w-1/3 md:w-1/3 "
          >
            <a
              href="https://github.com/MohdFaisalBidda"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Hero}
                alt=""
                className="rounded-2xl mx-auto w-full md:w-full dark:grayscale duration-200 dark:hover:grayscale-0 dark:hover:scale-105 dark:duration-200"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
