import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { text } from 'stream/consumers'

function SocialLinks() {
    const links: any = [
        {
            id: 1,
            child: (
                <>Linkedin <FaLinkedin size={30} /> </>
            ),
            href: "https://linkedin.com",
            style: 'rounded-tr-md text-blue'
        },
        {
            id: 2,
            child: (
                <>Linkedin <FaLinkedin size={30} /> </>
            ),
            href: "https://linkedin.com",
            style: 'rounded-tr-md'
        },
        {
            id: 3,
            child: (
                <>Linkedin <FaLinkedin size={30} /> </>
            ),
            href: "https://linkedin.com",
            style: 'rounded-tr-md'
        },
        {
            id: 4,
            child: (
                <>Linkedin <FaLinkedin size={30} /> </>
            ),
            href: "https://linkedin.com",
            style: 'rounded-tr-md'
        },
    ]
    return (
        <>
            <div className="flex flex-col top-[55%] left-0 fixed max-lg:hidden">
                <ul>
                    {links.map((list: any,index:any) => {
                        return <>
                            <li  className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 bg-amber-300'>
                                <a key={index} href=""
                                    className='flex justify-between items-center w-full font-bold'
                                >
                                    <>
                                        {list.child}
                                    </>
                                </a>
                            </li>
                        </>
                    })}


                </ul>
            </div>
        </>
    )
}

export default SocialLinks
