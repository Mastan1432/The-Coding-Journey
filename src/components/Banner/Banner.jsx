import React from 'react'
import { FaBookReader } from 'react-icons/fa'
import { GrUserExpert } from 'react-icons/gr'
import { MdOutlineAccessTime } from 'react-icons/md'
import Education from "../../assets/education.png"
import {motion} from "framer-motion"
import { FadeUp } from '../Hero/Hero'
const content=[
    {
        id:1,
        title:"10,000+ Courses",
        icon:<FaBookReader/>
    },
    {
        id:2,
        title:"Expert Instruction",
        icon:<GrUserExpert/>
    },
    {
        id:3,
        title:"Lifetime Access",
        icon:<MdOutlineAccessTime/>
    }
]
const Banner = () => {
  return (
    <section className='mb-10'>
        <div className='pt-10 flex justify-center lg:flex-row  flex-col'>
            <div className='lg:w-1/2  flex justify-center items-center '>
                <motion.img 
                initial={{opacity:0,x:-50}}
                whileInView={{opacity:1,x:0}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                 src={Education} className='w-[350px] mt-10 ' alt="" />
            </div>
            <div className=' lg:w-2/5 mt-4 flex flex-col items-center'>
                <motion.h1 
                initial={{opacity:0,scale:0.5}}
                whileInView={{opacity:1,scale:1}}
                transition={{duration:0.5}}
                className='text-3xl mb-8 font-bold'>The World's Leading Online learning Platform</motion.h1>
                {content.map((c)=>(
                    <motion.div
                    variants={FadeUp(0.2)}
                    initial="initial"
                    whileInView={"animate"} 
                     key={c.id} className='flex bg-[#f4f4f4] w-[90%] mt-5 mb-5 text-2xl h-[70px] rounded-[20px] gap-2 items-center pl-3 hover:bg-white duration-300 hover:drop-shadow cursor-pointer'>
                        {c.icon}{c.title}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Banner