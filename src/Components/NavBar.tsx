import React, { useState } from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'

function NavBar(props: any) {
    const [nav, setNav] = useState(false);



    const lists = [
        {
            id: 1,
            link: "Home",
        },
        {
            id: 2,
            link: "About",
        },
        {
            id: 3,
            link: "Portfolio",
        },
        {
            id: 4,
            link: "Experience",
        },
        {
            id: 5,
            link: "Contact",
        }
        ,
        {
            id: 6,
            link: <BsMoonStarsFill className='text-black dark:text-secondary' onClick={props.handleTheme}/>,
        }
    ]

    return (
        <>
            <div className=' py-10 px-10 flex justify-between items-center text-center w-full dark:bg-black lg:fixed bg-slate-300'>
                <div className="">
                    <h1 className='font-bold text-black text-5xl font-signature dark:text-secondary'>Faisal</h1>
                </div>

                <ul className='hidden lg:flex'>

                    {
                    React.Children.toArray(lists.map((list) => {
                        return <>
                            <div key={list.id}>
                                <li className='px-8 cursor-pointer capitalize font-thin text-black hover:scale-105 duration-200 text-2xl dark:text-secondary'>{list.link}</li>
                            </div>
                        </>
                    }))}
                </ul>


                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 lg:hidden">
                    {nav ? <FaTimes className=' dark:text-secondary' size={25} /> : <FaBars size={25} className=' dark:text-secondary' />}
                </div>

                {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-amber-400 text-black bg-opacity-70  dark:text-secondary transition-all duration-200 dark:bg-primary dark:bg-opacity-80'>

                    {lists.map((list) => {
                        return <>
                            <li key={list.id} className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 py-6 text-4xl'>{list.link}</li>
                        </>
                    })}

                </ul>}


            </div>


        </>
    )
}

export default NavBar
