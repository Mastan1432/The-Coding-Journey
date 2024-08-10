import React from 'react'
import Navbar from '../Navbar'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Blob from "../../assets/blob.svg"
import HeroPng from "../../assets/hero.png"
import {motion} from "framer-motion";

export const FadeUp=(delay)=>{
    return{
        initial:{
            opacity:0,
            y:50,
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                stiffness:100,
                duration:0.5,
                delay:delay,
                ease:"easeInOut",
            },
        },
    };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
        <Navbar />
        <div className="container min-h-[600px]  flex justify-between flex-col items-center lg:flex-row">
            {/*brand infoo*/}
            <div className=' w-[80%] pt-10 flex flex-col justify-center z-19 text-left lg:max-w-[400px] gap-4'>
                <motion.h1 
                variants={FadeUp(0.6)}
                initial="initial"
                animate="animate"
                 className='text-3xl lg:text-5xl font-bold  !leading-snug'>
                    Let's Learn to build a{" "} 
                    <span className='text-secondary'>Website</span> for your business
                </motion.h1>
                <motion.div
                variants={FadeUp(0.8)}
                initial="initial"
                animate="animate"
                 className="flex">
                    <button className='primary-btn flex items-center gap-2 group'>Get Started 
                        <IoIosArrowRoundForward className='text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300'/>
                    </button>
                </motion.div>
            </div>
            {/*brand image*/}
            <div className=' flex justify-center items-center'>
                <motion.img
                initial={{x:50,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
                 src={HeroPng} alt="" className='z-10 w-[350px] lg:w-[400px] xl:w-[600px] relative drop-shadow' />
                <motion.img
                 initial={{x:50,opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{duration:0.6,delay:0.2,ease:"easeInOut"}}
                src={Blob} alt="" className='absolute z-[1] w-[800px] md:w-[1500px] -bottom-32'/>
            </div>

        </div>
    </section>
  )
}

export default Hero