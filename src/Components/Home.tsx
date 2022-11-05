import React from 'react'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Image from './Image'

function Home() {
    return (
        <>
            <div className=" h-screen w-full bg-gradient-to-b from-white to-amber-100">
                <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                    <div className=" my-8">
                        <h2 className=' text-4xl sm:text-7xl font-semibold text-amber-500 pb-5'>I'm a Full stack Developer</h2>
                        <p className=' text-md  py-4 max-w-md'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil sunt ad ab animi voluptatibus natus eaque repellat excepturi veniam,  </p>
                        <div className="">
                            <button>Portfolio
                                 <span>
                                    Arrow
                                </span>
                            </button>
                        </div>
                    </div>

                <div className=" rounded-xl mx-auto w-2/3 md:w-full">
                    <Image/>
                </div>

                </div>
            </div>
        </>
    )
}

export default Home
