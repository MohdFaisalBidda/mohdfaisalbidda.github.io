import React, { useState } from 'react'
import { BsFillPersonLinesFill, BsGithub, BsLinkedin, BsMailbox, BsMoonStarsFill } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'
// import { BsSun } from 'react-icons/bs'

interface List {
    id : number,
    link: string | any
}

const NavBar =(props: any)=> {
    const [nav, setNav] = useState(false);

    const lists:List[] = [
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
            link: <BsMoonStarsFill className='text-black dark:text-secondary' onClick={props.handleTheme} />
        }
    ]

    return (
        <>
            <div className='py-10 px-10 flex justify-between items-center text-center w-full dark:bg-primary dark:shadow-xl dark:z-[999] z-[999] fixed bg-white shadow-lg'>
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

                {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black bg-opacity-90  dark:text-secondary transition-all duration-200 dark:bg-primary dark:bg-opacity-80'>

                    {lists.map((list) => {
                        return <>
                            <li onClick={()=>setNav(!nav)} key={list.id} className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 py-6 text-4xl'>{list.link}</li>
                        </>
                    })}

                    <div className=' pt-10'>
                        <p className='uppercase tracking-widest font-bold'>Let's Connect</p>
                        <div className="my-4 flex justify-between items-center ">
                            <a rel='noreferrer' target='_blank' href='https://linkedin.com/in/mohd-faisal-bidda'><BsLinkedin className='mx-4 cursor-pointer hover:scale-105 duration-200' size={50} /></a>
                            <a rel='noreferrer' target='_blank' href='https://github.com/MohdFaisalBidda'><BsGithub className='mx-4 cursor-pointer hover:scale-105 duration-200' size={50} /></a>
                            <a rel='noreferrer' target='_blank' href='mailto:biddafaisal@gmail.com'><BsFillPersonLinesFill className='mx-4 cursor-pointer hover:scale-105 duration-200' size={50} /></a>
                            <a rel='noreferrer' target='_blank' href='mailto:biddafaisal@gmail.com'><BsMailbox className='mx-4 cursor-pointer hover:scale-105 duration-200' size={50} /></a>
                        </div>
                    </div>

                </ul>}


            </div>


        </>
    )
}

export default NavBar
