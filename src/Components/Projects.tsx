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
            <div className='w-full min-h-screen dark:bg-primary py-10'>
                <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className='text-4xl font-bold inline border-b-4 border-black dark:text-secondary dark:border-secondary'>Portfolio</p>
                        <p className='py-6 text-gray-600 dark:text-gray-400'>Here is some of my work.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:px-0 justify-center">
                        {React.Children.toArray(lists.map((list,index) => {
                            return <>
                                <div key={index} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl dark:shadow-secondary dark:shadow-mditems-center justify-center">
                                    {/* <BsGithub className='text-8xl'/> */} <img src={list.src} className='z-[9] duration-200 hover:scale-105' alt="" />
                                    <div className="flex items-center justify-center sm:py-0">
                                        <button className=' z-10 w-1/2 px-4 py-3 m-4  duration-200 hover:scale-105 dark:text-secondary text-lg'>{list.code}</button>
                                        <button className=' w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105 dark:text-secondary text-lg'>{list.code}</button>
                                    </div>
                                </div>

                            </>
                        }))}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Projects
