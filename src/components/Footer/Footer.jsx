import React from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <section>
        <motion.div 
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:0.5,delay:0.5}}
        className=" bg-[#f4f4f4] flex  flex-wrap lg:p-[100px]   justify-center">
            <div className=' lg:p-10 flex flex-col justify-center  items-center '>
                <ul className='flex flex-col gap-3 text-xl text-[#989696]'>
                    <li><h1 className='font-bold text-dark text-2xl'>Courses</h1></li>
                    <li>Web Development</li>
                    <li>Software Development</li>
                    <li>Apps Development</li>
                    <li>E-learning</li>
                </ul>
            </div>
            <div className=' lg:p-10 p-3 flex flex-col justify-center  items-center'>
                
                <ul className='flex flex-col gap-3 text-xl text-[#989696]'>
                    <li><h1 className='font-bold text-dark text-2xl'>Links</h1></li>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className=' p-10 flex flex-col gap-5'>
                <h1 className='font-bold text-dark text-2xl'>Get In Touch</h1>
                <div className='flex justify-center items-center h-[55px]'>
                    <input type="text" placeholder='Enter your email' className='h-[100%] rounded-tl-md rounded-bl-md pl-3 border-none'/>
                    <button className='primary-btn rounded-br-md rounded-tl-none rounded-bl-none h-[100%] shadow-none'>Go</button>
                </div>
                <div className='flex gap-5 text-xl'>
                <FaWhatsapp className='hover:text-primary cursor-pointer'/>
                <FaInstagram className='hover:text-primary cursor-pointer'/>
                <TbWorldWww className='hover:text-primary cursor-pointer'/>
                <FaYoutube className='hover:text-primary cursor-pointer'/>
                </div>
            </div>
            
        </motion.div>

    </section>
  )
}

export default Footer