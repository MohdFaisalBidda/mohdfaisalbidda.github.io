import React from 'react'
import {AiOutlineRight} from "react-icons/ai";
import Hero from '../assets/profile.jpg'

function Home() {
    return (
        <>
            <div className=" h-screen w-full bg-gradient-to-b from-white to-amber-100">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row dark:bg-slate-800">
                    <div className="my-8">
                        <h2 className=' text-5xl sm:text-6xl font-semibold text-amber-500 pb-5'>I'm a Full stack Developer</h2>
                        <p className=' text-md  py-4 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt ad ab animi voluptatibus natus eaque repellat excepturi veniam,  </p>
                        <div className="">
                            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-amber-300 to-amber-400 font-semibold border-solid hover:scale-105 duration-200'>Portfolio
                                 <span className='group-hover:rotate-90'>
                                    <AiOutlineRight size={20}/>
                                </span>
                            </button>
                        </div>
                    </div>

                <div className=" rounded-xl mx-auto w-2/3 md:w-full lg:ml-20">
                    <img src={Hero} alt=""  className=' rounded-2xl mx-auto w-full md:w-full'/>
                </div>

                </div>
            </div>
        </>
    )
}

export default Home
