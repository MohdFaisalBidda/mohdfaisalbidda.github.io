import React,{FC} from 'react'
import html from "../assets/html.png"
import bootstrap from "../assets/bootstrap.png"
import express from "../assets/express.png"
import javascript from "../assets/javascript.png"
import node from "../assets/node.png"
import tailwind from "../assets/tailwind.png"
import react from "../assets/react.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"
import typescript from "../assets/typescript.png"

interface Tech {
    id : string,
    src : any,
    title : string,
    style : string,
    link : string
}


const Experience:FC = ()=> {

    const techs:Tech[] = [
        {
            id: '1',
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
            link:"https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
            id: '2',
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
            link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            id: '3',
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-500",
            link:"https://getbootstrap.com/"
        },
        {
            id: '4',
            src: node,
            title: "Node",
            style: "shadow-green-500",
            link:"https://nodejs.org/en/docs/"
        },
        {
            id: '5',
            src: express,
            title: "Express",
            style: "shadow-gray-500",
            link:"https://expressjs.com/"
        },
        {
            id: '6',
            src: mysql,
            title: "MySql",
            style: "shadow-blue-500",
            link:"https://dev.mysql.com/doc/"
        },
        {
            id: '7',
            src: mongodb,
            title: "MongoDb",
            style: "shadow-green-500",
            link:"https://www.mongodb.com/docs/"
        }
        ,
        {
            id: '8',
            src: react,
            title: "React",
            style: "shadow-blue-500",
            link:"https://reactjs.org/docs/getting-started.html"
        }
        ,
        {
            id: '9',
            src: tailwind,
            title: "Tailwind CSS",
            style: "shadow-blue-600",
            link:"https://v2.tailwindcss.com/docs"
        }
        ,
        {
            id: '9',
            src: typescript,
            title: "Typescript",
            style: "shadow-blue-500",
            link:"https://www.typescriptlang.org/"
        }
    ]

    return (
        <div className=' w-full h-full dark:bg-primary pt-20'>
            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className='text-4xl font-bold border-b-4 inline border-black px-2 dark:text-secondary dark:border-secondary'>Experience</p>
                    <p className='py-6 text-gray-600 dark:text-gray-400'>These are the technologies I've worked with</p>
                </div>

                <div className=" w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                        React.Children.toArray(techs.map(({ id, src, title, style,link }) => {
                            return <>
                                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                    <a href={link} target="_blank" rel="noreferrer" ><img src={src} alt="" className='w-28 mx-auto h-28' /></a>
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
