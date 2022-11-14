import React from 'react'
import html from "../assets/html.png"
import bootstrap from "../assets/bootstrap.png"
import express from "../assets/express.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import react from "../assets/react.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"


function Experience() {

    const techs = [
        {
            id: '1',
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: '2',
            src: javascript,
            title: "Javascript",
            style: "shadow-orange-500"
        },
        {
            id: '3',
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-orange-500"
        },
        {
            id: '4',
            src: node,
            title: "Node",
            style: "shadow-orange-500"
        },
        {
            id: '5',
            src: express,
            title: "Express",
            style: "shadow-orange-500"
        },
        {
            id: '6',
            src: mysql,
            title: "MySql",
            style: "shadow-orange-500"
        },
        {
            id: '7',
            src: mongodb,
            title: "MongoDb",
            style: "shadow-orange-500"
        }
        ,
        {
            id: '8',
            src: react,
            title: "React",
            style: "shadow-orange-500"
        }
        ,
        {
            id: '9',
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-orange-500"
        }
    ]

    return (
        <div className=' w-full h-full dark:bg-primary '>
            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className='text-4xl font-bold border-b-4 inline border-black px-2 dark:text-secondary dark:border-secondary'>Experience</p>
                    <p className='py-6 text-gray-600 dark:text-gray-400'>These are the technologies I've worked with</p>
                </div>

                <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        React.Children.toArray(techs.map(({ id, src, title, style }) => {
                            return <>
                                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <img src={src} alt="" className='w-28 mx-auto h-28' />
                                    <p className='mt-4 text-lg dark:text-secondary'>{title}</p>
                                </div>
                            </>
                        }))}

                </div>
            </div>
        </div>
    )
}

export default Experience
