import React from 'react'


const Card = (props: any) => {
    return (

        <>
            <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center  my-10 ">
                <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
                    {/* <BsGithub className='text-8xl'/> */} <img src={props.src} className='duration-200 hover:scale-105' alt="" />
                    <div className="flex items-center justify-center">
                        <button className=' w-1/2 px-4 py-3 m-4  duration-200 hover:scale-105'>{props.code}</button>
                        <button className=' w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105'>{props.github}</button>
                    </div>
                </div>

            </div>
            {/* <div className="text-center  py-20 rounded-xl my-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex justify-center">
                <BsGithub className='text-8xl'/>
                </div>
                <h3 className='text-lg font-medium pt-8 pb-2'>{props.title}</h3>
                <p className='py-1'>{props.desc}</p>
                <h4 className='py-4 text-amber-500 text-xl'>{props.head}</h4>
                <p className='py-1 text-gray-800 font-serif'>{props.para}</p>
                <p className=' text-gray-800 font-serif'>{props.para1}</p>
            </div> */}
        </>
    )
}

export default Card