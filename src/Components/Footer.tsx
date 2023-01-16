import React from 'react'
import { BsGithub, BsMailbox, BsTwitter } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

interface SLink {
    id: string,
    child: React.ReactNode
    href: string,
    style: string
}

const Footer = () => {
    const links: SLink[] = [
        {
            id: "1",
            child: (
                <><FaLinkedin size={30}  /> </>
            ),
            href: "https://linkedin.com/in/mohd-faisal-bidda",
            style: 'text-blue-800 dark:text-blue-600'
        },
        {
            id: "2",
            child: (
                <><BsGithub size={30}  /> </>
            ),
            href: "https://github.com/MohdFaisalBidda",
            style: 'text-gray-800 dark:text-gray-400'
        },
        {
            id: "3",
            child: (
                <><BsTwitter size={30} /> </>
            ),
            href: "https://twitter.com/FaisalBidda",
            style: 'text-blue-400'
        },
        {
            id: "4",
            child: (
                <> <BsMailbox size={30} /> </>
            ),
            href: "mailto:biddafaisal@gmail.com",
            style: 'text-amber-600'
        }
    ]
    return (
        <div
            className='flex flex-col text-center dark:bg-primary w-full'>
            <div
                className="flex justify-center ">
                {React.Children.toArray(links.map(({ id, child, href, style }) => {
                    return <>
                        <li
                            key={id} className={`list-none h-12 align-middle mx-4 px-4 rounded-full ${style}`}>
                            <a rel="noreferrer" href={href} target="_blank"
                                className='font-bold'
                            >
                                <>
                                    {child}
                                </>
                            </a>
                        </li>
                    </>
                }))}

            </div>
            <div className="py-2 text-sm dark:text-gray-400">
                Designed & Built by <b>Faisal</b>
            </div>
        </div>
    )
}

export default Footer
