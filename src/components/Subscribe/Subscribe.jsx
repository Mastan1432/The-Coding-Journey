import React from 'react'
import Bg from "../../assets/bg.png"
import { FaBell } from 'react-icons/fa'
import {motion} from "framer-motion"
const Subscribe = () => {
  return (
    <section>
        <div className='pt-10 relative' >
            <img src={Bg} alt="" className='w-[100%] z-18'/>
            <motion.div
            initial={{opacity:0,scale:0.5}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.6,ease:"easeInOut"}}
             className='absolute lg:top-1/3 top-[50%] lg:left-[40%] right-[20%]  w-[300px] lg:w-[400px] flex flex-col items-center text-center lg:gap-5 justify-center'>
                <h1 className='lg:text-4xl text-[15px] font-bold'>450K+ Students are learning from us</h1>
                <span className='lg:text-xl text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, non.</span>
                <button className='group primary-btn flex items-center justify-center gap-2 lg:text-xl text-[10px]'>Subscibe Now <FaBell className='group-hover:animate-bounce'/> </button>
            </motion.div>
        </div>
    </section>
  )
}

export default Subscribe