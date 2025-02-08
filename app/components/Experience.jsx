import React from 'react'
import Image from 'next/image'
import { assets } from '@/public/assets'
import { experienceData } from '@/public/assets'
import { motion } from "motion/react"

const Experience = () => {
  return (
    <div id ="experience"  className='w-full px-[12%] py-10 scroll-mt-20'>
        <div >
   <h2  
    className='text-center text-5xl font-Ovo' >My Professional Experiences</h2>
   <h4 className='text-center mb-2 text-lg font-Ovo mt-5'>My last experiences</h4>
   </div>

   <motion.div
        
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
   
        
      
        
        className='grid grid-cols-auto gap-6 my-10'>
            {experienceData.map(({icon, title, description, link}, index)=>(

                <motion.div
                
                whileHover={{scale: 1.05}}
           
                
                
                
                key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-red'>
                <Image al=''  src={icon}   className='w-10'   />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white mt-5'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80 mt-5 '>{description}</p>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80 mt-5'>{link}</p>

               


                </motion.div>
            ))}

        </motion.div>

  


   
    </div>
  )
}

export default Experience
