import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets'
import { motion } from "motion/react"




const Footer = ({isDarkMode}) => {
  return (
    <div className='text-center'>
      <div className='mt-20'>

        {/*<Image  src={assets.logo2} alt='' className='w-36 mx-auto mb-2' />*/}
        <motion.p 
        
        initial={{ y: -20, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        
        className='w-36 mx-auto mb-2' >Aicha AMRI.</motion.p>
        
        <div className='w-max flex items-center gap-2 mx-auto'>

        <Image  src={isDarkMode ? assets.mailcondark : assets.mailicon} alt='' className='w-6' />
        amri.aicha26@gmail.com

        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 '>

        <p> © 2025 Aicha AMRI.All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:t-0'>
          <li><a  target='_blank' href='https://github.com/aycha01'>GitHub</a></li>
          <li><a  target='_blank' href='https://www.linkedin.com/in/aicha-amri/'>LinkedIn</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Footer
