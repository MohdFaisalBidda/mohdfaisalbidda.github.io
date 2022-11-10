import React from 'react'
import Html from "../assets/html.png"

function Experience() {

    const techs = [
        {
            id: '1',
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: '2',
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: '3',
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: '4',
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: '5',
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: '6',
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        }
    ]

    return (
        <div className=' w-full h-screen dark:bg-primary'>
            <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className='text-4xl font-bold border-b-4 inline border-black px-2 dark:text-secondary dark:border-secondary'>Experience</p>
                    <p className='py-6 text-gray-600 dark:text-gray-400'>These are the technologies I've worked with</p>
                </div>

                <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                    {
                    React.Children.toArray(techs.map(({id, src, title, style }) => {
                        return <>
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img  src={src} alt="" className='w-28 mx-auto ' />
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
