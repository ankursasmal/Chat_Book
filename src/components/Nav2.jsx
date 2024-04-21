import React from 'react'
 import { LuHome } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
 import { CiShop } from "react-icons/ci";
 import { HiBars3 } from "react-icons/hi2";

function Nav2() {
  return (
    <div className='w-[52%]  ' >
     <div  className='w-[100%]  '> 
     <div className='hidden md:visible md:block   lg:pl-12'> 
       <div className='flex justify-around py-2 w-[100%] '>
  <LuHome className='text-4xl ' />
  <IoPerson className='text-4xl '/>
   <AiOutlineYoutube className='text-4xl '/>
   <CiShop className='text-4xl  '/>
   <FaGamepad className='text-5xl  hidden lg:block '/>
   <HiBars3  className='text-5xl  lg:hidden ' />


   </div>

  </div>
 
 </div> 
    </div>
  )
}

export default Nav2
