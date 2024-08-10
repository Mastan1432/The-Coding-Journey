import React from 'react'
import Banner from "../../assets/banner.png"
import {motion} from "framer-motion"

const Banner2 = () => {
  return (
    <section className='mt-16 pb-14'>
        <div className="container items-center flex lg:flex-row flex-col justify-between">
            <motion.div
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{delay:0.2}}
             className='content lg:p-4 p-14 justify-center w-[500px] flex flex-col gap-3'>
                <h1 className='font-bold lg:text-4xl text-2xl '>Join Our Community to Start your Journey</h1>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates possimus in vitae, accusamus deleniti nemo dignissimos saepe doloribus veritatis.</span>
                <div><button className='primary-btn '>Join Now</button></div>
            </motion.div>
            <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{delay:0.2}} className='img mr-[160px]  '>
                <img src={Banner} className='w-[350px]  ' alt="" />
            </motion.div>
        </div>
    </section>
  )
}

export default Banner2