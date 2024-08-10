import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import SignIn from './SignIn';
import {delay, motion} from "framer-motion";

const NavbarMenu=[
    {
        id:1,
        title:"Home",
        link:"#",
    },
    {
        id:2,
        title:"Services",
        link:"#",
    },
    {
        id:3,
        title:"About Us",
        link:"#",
    },
    {
        id:4,
        title:"Out Team",
        link:"#",
    },
    {
        id:5,
        title:"Contact Us",
        link:"#",
    },
];
const Navbar = () => {
    const[hamburger,setHamburger]=useState(false);
    const[signIn,setSignIn]=useState(false);
    const navbarHandler=()=>{
        if(hamburger){
            setHamburger(false);
        }
        else{
            setHamburger(true);
        }
        
    }

    const handleSignIn=(props)=>{
        setSignIn(props);
    }

  return (
    <motion.nav 
    initial={{opacity:0,y:-90}}
    animate={{opacity:1,y:0,transition:{delay:0.5}}}
    className='relative z-20' >
       <div className='container flex justify-between items-center py-10'>
           {/*Logo section*/}
            <div className='font-bold text-2xl'>
                <h1>The Coding Journey</h1>
            </div>
            {/*Menu section */}
            <div className='hidden lg:block'>
                <ul className='flex gap-3 items-center'>
                    { NavbarMenu.map((menu)=>(
                            <li key={menu.id} >
                                <a href={menu.link} className=' inline-block py-3 px-3 hover:text-secondary relative group'>
                                    <div className="w-2 h-2 bg-secondary absolute mt-2 left-1/2  rounded-full bottom-0 hidden group-hover:block "></div> 
                                    {menu.title}
                                </a>
                            </li>
                    ))
                    }
                    <button className='primary-btn' onClick={()=>{setSignIn(true)}}>Sign In</button>
                </ul>
            
            </div>
            <button className='primary-btn lg:hidden text-[13px] py-1 px-3' onClick={()=>{setSignIn(true)}}>Sign In</button>
            {/*Mobile hamburger section*/}
            <IoMdMenu className='lg:hidden cursor-pointer text-3xl' onClick={()=>{navbarHandler(true)}} />
       </div>
       
       {/*-----------------------------hamberger side navbar-------------------------------------------------*/}
       <div className={`bg-secondary rounded-sm text-white w-1/4 absolute right-0 top-[80px] lg:hidden block shadow-[0px_10px_8px_-7px_#69a79c] ${hamburger? 'translate-x-[0px]':'translate-x-[350px]'}`}>
            <ul className='flex gap-3 items-center flex-col'>
                { NavbarMenu.map((menu)=>(
                        <li key={menu.id} >
                            <a href={menu.link} className=' inline-block mt-2 mb-2 py-1 rounded-md hover:shadow-[0px_10px_8px_-7px_#ffd978] px-2  hover:bg-primary lg:hidden  relative group'>
                                
                                {menu.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
        {signIn && <SignIn handleSignIn={handleSignIn} onClick={()=>{setHamburger(false)}} className="z-20"/>}
    </motion.nav>
  )
}

export default Navbar