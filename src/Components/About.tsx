import React, { FC } from 'react'
import { motion } from 'framer-motion';


const About: FC = () => {

  return (
    <>
      <div id='about' className="w-full h-screen dark:bg-primary xsm:pt-[600px]">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center align-middle w-full h-full">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [-250, 0],
              opacity: 1
            }}
            transition={{ duration: 1 }}
            className="">
            <p className='text-4xl font-bold inline border-b-4 border-black dark:text-secondary dark:border-secondary'>About</p>
          </motion.div>

          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [-250, 0],
              opacity: 1
            }}
            transition={{ duration: 1 }}
            className='xl:text-2xl text-xl mt-20 dark:text-gray-400'>Welcome to my personal portfolio website! My name is <b >Faisal</b> and I am a passionate web developer. I specialize in creating custom websites using the latest technologies and best practices to ensure that my clients' online presence is both professional and effective.
            My skillset includes expertise in <b>HTML, CSS, JavaScript, and PHP</b>, as well as experience with popular web development<b> frameworks such as React</b>. I am also well-versed in web design principles and know how to create visually appealing and user-friendly websites.</motion.p>
          <br />
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [250, 0],
              opacity: 1
            }}
            transition={{ duration: 1 }}
            className='xl:text-2xl text-xl dark:text-gray-400'>I am a proactive problem solver, who always strive for the best, and I take pride in my ability to understand my clients' needs and goals, and work closely with them to create a website that reflects their brand and helps them achieve their objectives.
            In addition, I am continuously expanding my knowledge and skills by staying up-to-date with the latest web development trends and best practices.
            I am excited to work with you and help you establish your online presence, so please feel free to browse my portfolio and don't hesitate to contact me if you have any questions or need help with your next project.
          </motion.p>
        </div>
      </div>




    </>
  )
}

export default About
