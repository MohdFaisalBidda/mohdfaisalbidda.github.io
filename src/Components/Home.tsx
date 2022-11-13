import React from 'react'
import {AiOutlineRight} from "react-icons/ai";
import Hero from '../assets/hero.png'

function Home() {
    return (
        <>
            <div className=" h-screen w-full dark:bg-primary">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                    <div className="my-8">
                        <h2 className=' text-5xl sm:text-6xl font-semibold text-black pb-5 dark:text-secondary'>I'm a Full stack Developer</h2>
                        <p className=' text-gray-600 text-md py-4 max-w-md dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt ad ab animi voluptatibus natus eaque repellat excepturi veniam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut sed accusantium possimus temporibus </p>
                        <div className="">
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-amber-300 font-semibold border-solid hover:scale-105 duration-200 dark:bg-secondary dark:text-primary '>Portfolio
                                 <span className='group-hover:rotate-90'>
                                    <AiOutlineRight size={20}/>
                                </span>
                            </button>
                        </div>
                    </div>

                <div className="rounded-xl mx-auto w-1/2 lg:ml-20">
                    <img src={Hero} alt=""  className='rounded-2xl mx-auto w-full md:w-full dark:grayscale duration-200 dark:hover:grayscale-0 dark:hover:scale-105 dark:duration-200'/>
                </div>

                </div>
            </div>
        </>
    )
}

export default Home
