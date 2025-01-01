import React, {FC, useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop:FC = ()=> {
  const [visible, setVisible] = useState(false);
  const listenToScroll = () => {
    let heigthToHidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    
    if (winScroll > heigthToHidden) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)
    return ()=> window.removeEventListener("scroll",listenToScroll);
  }, [])

  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <>
      {visible &&
        <div className="flex justify-end">
          <div className='opacity-60 hover:bg-black md:text-4xl text-xl h-10 w-10 fixed bg-black text-white dark:bg-secondary dark:text-primary flex justify-center items-center rounded-full cursor-pointer right-8 bottom-6 overflow-y-hidden z-10' onClick={gotoBtn}><FaArrowUp className='w-5 h-5' /></div>
        </div>
      }
    </>

  )
}

export default ScrollToTop
