import React, { FC } from 'react'
import { AiOutlineRight } from "react-icons/ai";
import Hero from '../assets/hero.png'
import { Link } from "react-scroll"
import { motion } from 'framer-motion';


const Home: FC = () => {

    return (
        <>
            <div id='home' className=" h-screen w-full dark:bg-primary ">

                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-52 sm:pt-48 ">
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{
                            x: [-250, 0],
                            opacity: 1
                        }}
                        transition={{ duration: 1 }}
                        className="my-8">
                        <h2 className=' text-3xl sm:text-4xl font-semibold text-black pb-5 dark:text-secondary '>I'm a React Developer</h2>
                        <p className=' text-gray-600 text-md py-4 max-w-md dark:text-gray-400'>As a React-based developer, I specialize in building and maintaining high-performance, user-friendly web applications using the React JavaScript library. I am skilled in creating responsive UI components, implementing animations and user interactions, and optimizing the overall performance of the application.</p>
                        <div className="">
                            <button className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-amber-300 hover:bg-amber-300  hover:border-white font-semibold border-solid hover:scale-105 duration-200 dark:border-2 dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary dark:text-secondary '><Link to="portfolio" smooth >Portfolio</Link>
                                <span className='group-hover:rotate-90'>
                                    <AiOutlineRight size={20} />
                                </span>
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{
                            x: [125, 0],
                            opacity: 1
                        }}
                        transition={{ duration: 1 }}
                        className="rounded-xl mx-auto w-1/2 lg:ml-20 2xl:w-2/5 lg:w-1/3 md:w-1/3 ">
                        <a href='https://github.com/MohdFaisalBidda' target="_blank" rel="noreferrer"><img src={Hero} alt="" className='rounded-2xl mx-auto w-full md:w-full dark:grayscale duration-200 dark:hover:grayscale-0 dark:hover:scale-105 dark:duration-200' /></a>
                    </motion.div>

                </div>
            </div>
        </>
    )
}

export default Home
