import { animate, delay } from 'framer-motion'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { CiMobile3 } from 'react-icons/ci'
import { IoMdHappy } from 'react-icons/io'
import { IoPulseOutline } from 'react-icons/io5'
import { RiComputerLine } from 'react-icons/ri'
import { TbWorldWww } from 'react-icons/tb'
import {motion} from "framer-motion";

const service=[
    {
        id:1,
        title:"Web Development",
        link:"#",
        icon:<TbWorldWww/>,
        delay:0.2,
    },
    {
        id:2,
        title:"Mobile Development",
        link:"#",
        icon:<CiMobile3/>,
        delay:0.3,
    },
    {
        id:3,
        title:"Software Development",
        link:"#",
        icon:<RiComputerLine/>,
        delay:0.4,
    },
    {
        id:4,
        title:"Satisfied Clients",
        link:"#",
        icon:<IoMdHappy/>,
        delay:0.5,
    },
    {
        id:5,
        title:"SEO Optimization",
        link:"#",
        icon:<IoPulseOutline/>,
        delay:0.6,
    },
    {
        id:6,
        title:"24/7 support",
        link:"#",
        icon:<BiSupport/>,
        delay:0.7,
    }
    
]

const SlideLeft = (delay) => {
    return {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };

const Services = () => {
  return (
    <section className='bg-white'>
        <div className="container pb-14 pt-16">
            <h1 className="text-4xl text-left pb-10  font-bold">
                Services We Provide
            </h1>
            <di className="flex flex-wrap justify-center gap-8">
                {
                    service.map((s)=>(
                        <motion.div 
                        variants={SlideLeft(s.delay)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{once:true}}
                        key={s.id} className="bg-[#f4f4f4] rounded-2xl  flex flex-col gap-4 p-4 py-7 w-[150px] justify-center items-center cursor-pointer hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
                            <div className='text-4xl md-4'>{s.icon}</div>
                            <h1 className='text-lg font-semibold text-center px-3'>{s.title}</h1>
                        </motion.div>
                    ))
                }
            </di>
        </div>

    </section>
  )
}

export default Services