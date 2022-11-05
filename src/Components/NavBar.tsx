import React, { useState } from 'react'
import { BsMenuButton, BsMoonStarsFill } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import Image from './Image'
import { FaBars, FaTimes } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

function NavBar() {
    const [nav, setNav] = useState(false);

    const lists: any = [
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
            link: "Projects",
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
            link: <BsMoonStarsFill className='text-black' onClick={()=>setNav(!nav)}/>,
        }
    ]

    return (
        <>
            <div className=' py-10 px-10 mb-4 flex justify-between items-center text-center w-full'>
                <div className="">
                    <h1 className=' font-serif font-bold text-amber-500 text-5xl font-signature'>Faisal</h1>
                </div>

                <ul className='hidden lg:flex'>
                    {lists.map((list: any) => {
                        return <>
                            <li key={list.id} className='px-8 cursor-pointer capitalize font-medium text-amber-500 hover:scale-105 duration-200 text-2xl'>{list.link}</li>
                        </>
                    })}
                </ul>


                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 lg:hidden">
                    {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </div>

                {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-amber-300 to-orange-600 text-black transition-all duration-200'>

                    {lists.map((list: any) => {
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

{/* <li className=' list-none'><a className=' bg-gradient-to-r from-amber-500 to-amber-200 text-white py-2 px-4 rounded-md  cursor-pointer'>Resume</a></li>
<BsMoonStarsFill className=' cursor-pointer ml-10' size={25} /> */}