import React from 'react'
import { motion } from "framer-motion";




function Hero() {
  
 
  
  return (
    <>
     <div
     className='w-[100%] h-[100vh]  bg-LightPrimary dark:bg-DarkPrimary relative overflow-hidden'
     >
      
        {/* Container */}
        <div
        className='w-[90%] h-full m-auto flex flex-col justify-start  items-start gap-4 z-50 pt-40 max-xl:pt-40 max-lg:pt-40 max-lg:center'
        >
          {/* Details */}
        <div 
        className=' max-lg:h-[80%] max-[1025px]:h-[80%] flex flex-col justify-center items-start gap-4 z-1'
        >
            {/* Hero Details */}
            <div className='overflow-hidden'>
            <motion.h1 
            initial={{  x: '-100%' , opacity: 0 }}
            whileInView={{  x: 0 , opacity: 1 }}
            
            className='text-9xl font-bold font-poppins text-DarkPrimary dark:text-LightPrimary max-xl:text-8xl max-[980px]:text-7xl max-md:text-6xl max-sm:text-5xl'
            >Smartphone <br /> Store </motion.h1>
          </div>

          {/* Mobile Details */}
          <div
          className=' font-light tracking-wider flex justify-center items-center overflow-hidden '
          >
            {/* Object Image */}
            < motion.img
             initial={{  y: '100%' }}
             whileInView={{  y: 0 }}
             transition={{delay: 0.5}}
            className='object-cover w-40 ml-[-50px] z-50 max-sm:w-28' 
            src="https://demo.phlox.pro/shop-mobile/wp-content/uploads/sites/218/2020/08/Group-1@2x.png" alt="" />
            
            {/* Object Title */}
           <div 
           className='gap-1 flex flex-col justify-center items-start z-50 overflow-hidden'
           >
           <motion.h1
           initial={{  x: '100%' }}
           whileInView={{  x: 0 }}
           transition={{delay: 0.5}}
            className='text-2xl font-bold font-poppins text-DarkSecondary dark:text-TextPrimaryColor z-50 max-sm:text-lg overflow-hidden'
            >Samsung Galaxy S10</motion.h1>
            
            {/* Sub Heading */}
            <motion.h4
             initial={{  x: '150%' }}
             whileInView={{  x: 0 }}
             transition={{delay: 0.8}}
            className='text-medium font-bold font-cabin text-[#444444] z-50 max-sm:text-sm '
            >  Starting from Rs 50599</motion.h4>
            
            {/* Price */}
            <div
            className='flex justify-start gap-4 items-center z-50 overflow-hidden'
            >
            <motion.h2
              initial={{  x: '100%' , opacity: 0 }}
              whileInView={{  x: 0 , opacity: 1 }}
              transition={{delay: 1}}
            className='text-2xl font-bold font-roboto text-DarkSecondary dark:text-TextPrimaryColor z-50 max-sm:text-lg'
            >Rs 53650 </motion.h2>

            <motion.h4
               initial={{  x: '100%' , opacity: 0 }}
               whileInView={{  x: 0 , opacity: 1 }}
               transition={{delay: 1.6}}
            className='font-normal  text-sm font-cabin  dark:text-[#F6F6F6B5] text-DarkSecondary line-through z-50 max-sm:text-xs'
            >  Rs 60000</motion.h4>
            </div>
            
           </div>
            
          </div>

        {/* Buttons */}
        <div
        className='flex justify-center items-center gap-4 z-50 overflow-hidden'
        >
        <motion.button
         initial={{  y: '150%' , opacity: 0 }}
         animate={{  y: 0 , opacity: 1 }}
         transition={{delay: 0.8}}
        className='w-[200px] h-[60px] max-md:w-[150px] max-md:h-[50px] max-sm:w-[100px] max-sm:h-[40px] max-sm:text-sm rounded-full bg-DarkSecondary dark:bg-ButtonColor text-TextPrimaryColor text-xl max-md:text-lg tracking-wider font-bold font-cabin transition-all linear duration-200 hover:bg-transparent hover:dark:bg-transparent hover:text-DarkPrimary hover:border-[2px] hover:border-solid hover:border-DarkSecondary hover:dark:text-LightPrimary hover:dark:border-2 hover:dark:border-solid hover:dark:border-LightSecondary'
        >Buy Now</motion.button>

        <motion.button
          initial={{  y: '150%' , opacity: 0 }}
          animate={{  y: 0 , opacity: 1 }}
          transition={{delay: 0.8}}
        className='w-[300px] h-[60px] max-md:w-[200px] max-md:h-[50px] max-sm:h-[40px] rounded-full dark:border-[1px] border-[2px] border-solid dark:border-LightSecondary border-DarkSecondary dark:text-TextPrimaryColor text-DarkSecondary text-lg max-md:text-xs tracking-wider font-bold font-cabin hover:translate-y-[-5px] duration-500'
        >Discover All Products</motion.button>
        </div>
        </div>
        
        <div
          className='w-[100vw] h-[100vh] 
          light:bg-HeroLightBg
          dark:bg-gradient-to-t from-[#000000] to-[#43434300] 
           z-10 hidden dark:block top-0 right-0 absolute'
          ></div>

          <div
          className='
          z-50 block   top-0 right-0 absolute'
          ></div>
        <motion.div
          initial={{  x: '150%' , opacity: 0 }}
          animate={{  x: 0 , opacity: 1 }}
          transition={{delay: 0.8}}
        className='absolute top-[-20%] right-[-5%] z-2 max-xl:top-[10%] max-[1025px]:top-[45%] max-[1025px]:right-[10%]  max-lg:top-[40%] max-lg:right-[5%] max-[980px]:top-[40%] max-md:right-[20%] max-md:top-[50%] max-sm:right-[0%]'
        >
          <img
          className='object-cover w-[900px] max-xl:w-[600px]  max-lg:w-[800px]   max-md:w-[400px]  '
          src="https://demo.phlox.pro/shop-mobile/wp-content/uploads/sites/218/2020/08/header_image@2x.png" alt="" />
         
         
        </motion.div>
      
        </div>
        
        </div> 
    </>
  )
}

export default Hero
