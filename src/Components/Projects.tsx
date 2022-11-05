import React from 'react'
import Card from './Card'

function Projects() {
    const lists: any = [
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
            <section className='min-h-screen mt-10 text-center'>
                <h2 className='text-3xl'>Projects</h2>
                <p>Here is some of my work.</p>


                <div className=" mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 justify-center ">
                {lists.map((list: any) => {
                    return <>
                            <div key={list.id} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl items-center justify-center">
                                {/* <BsGithub className='text-8xl'/> */} <img src={list.src} className='duration-200 hover:scale-105' alt="" />
                                <div className="flex items-center justify-center sm:py-0">
                                    <button className=' w-1/2 px-4 py-3 m-4  duration-200 hover:scale-105'>{list.code}</button>
                                    <button className=' w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105'>{list.code}</button>
                                </div>
                            </div>

                    </>
                })}
                </div>


            </section>
        </>
    )
}

export default Projects
