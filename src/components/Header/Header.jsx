import React, { useEffect, useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import {motion} from "framer-motion"

function Header() {

  const [isSearch, setisSearch] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || 'light');

  const toggleSearch = () => {
    setisSearch(!isSearch);
  };

  const DarkMode = () => {
    localStorage.setItem('theme', theme);
    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }
  };

  useEffect(() => {
    DarkMode();
  }, [theme]);
    


  return (
    <>
     <div
     className='w-full h-28 bg-transparent fixed z-50'
     >
        <div
        className='w-[90%] m-auto  flex justify-between items-center text-DarkPrimary dark:text-LightPrimary h-full'
        >

            {/* Left Side */}
            <div 
            className='flex space-x-14 justify-center items-center'
            >
                 {/* Logo */}
            <motion.div
                initial={{  x: '-150%' , opacity: 0 }}
                animate={{  x: 0 , opacity: 1 }}
                transition={{delay: 0.1}}
            >
                <h1
                className='text-3xl font-bold font-poppins max-sm:text-lg'
                >PhloX Shop</h1>
                <p
                className='font-roboto text-sm tracking-wider max-sm:text-xs'
                >Electronic Shop</p>
            </motion.div>

            <ul 
            className='text-[3D3D3D] font-cabin font-light tracking-wider flex justify-center items-center gap-10 max-xl:hidden'>
                <motion.li
                   initial={{  y: '-150%' , opacity: 0 }}
                   animate={{  y: 0 , opacity: 1 }}
                   transition={{delay: 0.8}}
                >Home</motion.li>
                <motion.li
                  initial={{  y: '-150%' , opacity: 0 }}
                  animate={{  y: 0 , opacity: 1 }}
                  transition={{delay: 1}}
                className='flex justify-center items-center gap-1'
                >Browse  <TiArrowSortedDown /></motion.li>
            </ul>

            </div>
           

            
            
            {/* Right Side */}
            <motion.div
              initial={{  x: '100%' , opacity: 0 }}
              animate={{  x: 0 , opacity: 1 }}
              transition={{delay: 0.2}}
           className={`  h-14 bg-LightPrimary rounded-3xl pr-10 max-lg:pr-0  flex justify-end items-center gap-4 dark:bg-DarkSecondary max-lg:bg-transparent dark:max-lg:bg-transparent  transition-all   duration-100 linear min-w-[200px] ` }

            >
              <div className='max-sm:hidden'>
              <input
              className={` rounded-3xl p-1 outline-none dark:bg-LightPrimary border-solid border-2 border-DarkSecondary dark:border-LightSecondary    ${isSearch ? ' w-[400px] max-xl:w-[300px] max-md:w-[200px] max-sm:w-[150px] opacity-100 ' : 'w-0 opacity-0'} text-DarkPrimary px-4 font-poppins font-medium duration-50 ease-linear transition-all` }
              type="text" />
              </div>
              
              
             <button
             className='max-sm:hidden'
             > <IoSearch onClick={toggleSearch}  className='text-2xl font-extrabold cursor-pointer' /></button>
              <h1
              className='text-3xl max-lg:hidden '
              >|</h1>

              <button
              className='max-sm:hidden'
              onClick={() => setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))}>
               <MdDarkMode className='text-2xl font-extrabold cursor-pointer max-lg:ml-2' />
                </button>

              <h1
              className='text-3xl max-lg:hidden '
              >|</h1>

              <button><IoMenu className='text-2xl font-extrabold cursor-pointer max-lg:ml-2 hidden max-lg:flex' />  </button>

              <div
              className='flex justify-center items-center gap-2 w-[180px] max-lg:hidden'
              >
                <FaShoppingBag />
                <p
                className='text-base font-normal font-poppins'
                >Shopping Basket</p>
              </div>

            </motion.div>
            
        </div>
        </div> 
    </>
  )
}

export default Header
