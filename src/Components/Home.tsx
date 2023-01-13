import React,{FC} from 'react'
import {AiOutlineRight} from "react-icons/ai";
import Hero from '../assets/hero.png'

const  Home:FC = ()=> {
    return (
        <>
            <div id='home' className=" h-screen w-full dark:bg-primary">
                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-52 sm:pt-48">
                    <div className="my-8">
                        <h2 className=' text-3xl sm:text-6xl font-semibold text-black pb-5 dark:text-secondary'>I'm a Full stack Developer</h2>
                        <p className=' text-gray-600 text-md py-4 max-w-md dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt ad ab animi voluptatibus natus eaque repellat excepturi veniam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ut sed accusantium possimus temporibus </p>
                        <div className="">
                            <button className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-amber-300 hover:bg-amber-300  hover:border-white font-semibold border-solid hover:scale-105 duration-200 dark:border-2 dark:border-secondary dark:hover:bg-secondary dark:hover:text-primary dark:text-secondary '>Portfolio
                                 <span className='group-hover:rotate-90'>
                                    <AiOutlineRight size={20}/>
                                </span>
                            </button>
                        </div>
                    </div>

                <div className="rounded-xl mx-auto w-1/2 lg:ml-20">
                    <a href='https://github.com/MohdFaisalBidda' target="_blank" rel="noreferrer"><img src={Hero} alt=""  className='rounded-2xl mx-auto w-full md:w-full dark:grayscale duration-200 dark:hover:grayscale-0 dark:hover:scale-105 dark:duration-200'/></a>
                </div>

                </div>
            </div>
        </>
    )
}

export default Home
