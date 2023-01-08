import React,{FC} from 'react'
import { BsFillPersonLinesFill, BsGithub, BsMailbox } from 'react-icons/bs'
import { FaLinkedin } from 'react-icons/fa'

interface SLink {
    id : string,
    child : React.ReactNode
    href : string,
    style : string
}

const SocialLinks:FC = ()=> {
    const links:SLink[] = [
        {
            id: "1",
            child: (
                <>Linkedin <FaLinkedin size={30} className="text-blue-300" /> </>
            ),
            href: "https://linkedin.com/in/mohd-faisal-bidda",
            style: 'rounded-tr-md bg-blue-800 text-blue-300'
        },
        {
            id: "2",
            child: (
                <>Github <BsGithub size={30} className=" text-gray-500" /> </>
            ),
            href: "https://github.com/MohdFaisalBidda",
            style: 'rounded-tr-md bg-black text-gray-500'
        },
        {
            id: "3",
            child: (
                <>Resume <BsFillPersonLinesFill size={30} className="text-blue-800 " /> </>
            ),
            href: "",
            style: 'rounded-tr-md bg-white'
        },
        {
            id: "4",
            child: (
                <>Mail <BsMailbox size={30} /> </>
            ),
            href: "mailto:biddafaisal@gmail.com",
            style: 'rounded-tr-md bg-amber-400'
        }
    ]
    return (
        <>
            <div className="flex flex-col top-[55%] left-0 fixed max-lg:hidden">
                <ul>
                    {React.Children.toArray(links.map(({ id, child, href, style }) => {
                        return <>
                            <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200 ${style}`}>
                                <a rel="noreferrer" href={href} target="_blank"
                                    className='flex justify-between items-center w-full font-bold'
                                >
                                    <>
                                        {child}
                                    </>
                                </a>
                            </li>
                        </>
                    }))}


                </ul>
            </div>
        </>
    )
}

export default SocialLinks
