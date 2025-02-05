"use client";
import Image from 'next/image'
import { assets } from '@/public/assets'
import React, {useEffect, useRef, useState}  from 'react'
import { motion } from "motion/react"


const Navbar  = ({isDarkMode, setIsDarkMode}) => {
    const[isScroll, setIsScroll] = useState(false)
    

const sideMenuRef = useRef();

const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'

}

 const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
}
useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        if(scrollY > 50){
            setIsScroll(true)

        }else{
            setIsScroll(false)

        }
    })
    
},[])
  return (
   <>

   <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
   <Image src={assets.headercolor} alt='' className='w-full' />

   </div>
   <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
    <a href="#top">
        <motion.p
        
        initial={{ y: -20, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        
        
        
        >Aicha AMRI.</motion.p>
       {/*<Image src={isDarkMode ? assets.logod : assets.logo} alt =""  className='w-28 cursor-pointer mr-14'/>
      {/*isDarkMode ? assets.: */}
    </a>

    <ul className={`hidden md:flex  items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent"}`}>
       <li><a className='font-Ovo'  href="#top">Home</a></li>
       <li><a className='font-Ovo'  href="#about">About me </a></li>
       <li><a  className='font-Ovo' href="#services">Services </a></li>
       <li><a className='font-Ovo'  href="#work">My work </a></li>
       <li><a className='font-Ovo'   href="#contact">Contact me</a></li>

    </ul>
      <div className='flex items-center gap-4'>

       <button onClick={()=> setIsDarkMode(prev => !prev)}>
       <Image src={isDarkMode ? assets.sunicon : assets.moon} alt='' className='w-6' />
       </button>

       <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border  border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50' >Contact<Image src={isDarkMode ? assets.arrowicondark : assets.arrowwicon} alt ="" className='w-3'/></a>
        

       <button className='block md:hidden ml-3' onClick={openMenu}>
       <Image src={isDarkMode ? assets.menuwhite : assets.menublack} alt='' className='w-6' />
       </button>

      </div>

       {/* -----------------------MOBILE MENU----------------- */}

       <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 
    fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
       
       
        <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.closewhite : assets.closeblack}  alt=''  className='w-5 cursor-pointer mr-14' />


        </div>

        <li><a className='font-Ovo'   onClick={closeMenu}  href="#top">Home</a></li>
        <li><a className='font-Ovo'   onClick={closeMenu}  href="#about">About me </a></li>
        <li><a  className='font-Ovo'  onClick={closeMenu}  href="#services">Services </a></li>
        <li><a className='font-Ovo'   onClick={closeMenu}  href="#work">My work </a></li>
        <li><a className='font-Ovo'   onClick={closeMenu}  href="#contact">Contact me</a></li>





       </ul>

   </nav>
   
   </>
    
  )
}

export default Navbar 