import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

function ScrollToTop() {
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
          <div className=' text-4xl w-16 h-16 fixed bg-black text-white dark:bg-secondary dark:text-primary flex justify-center items-center rounded-full cursor-pointer right-8 bottom-6' onClick={gotoBtn}><FaArrowUp className='animate-bounce' /></div>
        </div>
      }
    </>

  )
}

export default ScrollToTop
