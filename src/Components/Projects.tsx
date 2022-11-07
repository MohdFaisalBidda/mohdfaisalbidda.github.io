import React from 'react'
import Card from './Card'

function Projects() {
    const lists = [
        {
            id: 1,
            src: "https://picsum.photos/300/300",
            code: "Code"
        },
        {
            id: 2,
            src: "https://picsum.photos/300/300",
            code: "Code"

        },
        {
            id: 3,
            src: "https://picsum.photos/300/300",
            code: "Code"

        }
        ,
        {
            id: 4,
            src: "https://picsum.photos/300/300",
            code: "Code"

        }
        ,
        {
            id: 5,
            src: "https://picsum.photos/300/300",
            code: "Code"

        }

    ]
    return (
        <>
            <div className='w-full min-h-screen'>
                <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full dark:bg-slate-800">
                    <div className="pb-8">
                        <p className='text-4xl font-bold inline border-b-4 border-amber-600'>Projects</p>
                        <p className='py-6'>Here is some of my work.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0 justify-center ">
                        {lists.map((list,index) => {
                            return <>
                                <div key={index} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl items-center justify-center">
                                    {/* <BsGithub className='text-8xl'/> */} <img src={list.src} className='duration-200 hover:scale-105' alt="" />
                                    <div className="flex items-center justify-center sm:py-0">
                                        <button className=' w-1/2 px-4 py-3 m-4  duration-200 hover:scale-105'>{list.code}</button>
                                        <button className=' w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105'>{list.code}</button>
                                    </div>
                                </div>

                            </>
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects
