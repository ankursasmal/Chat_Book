import React from 'react'
import { Link } from "react-router-dom";

 import { LuHome } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
 import { CiShop } from "react-icons/ci";
 import { HiBars3 } from "react-icons/hi2";

function Nav2() {
  return (
    <div className='w-[52%]  ' >
     <div  className='w-[100%]  '> 
     <div className='hidden md:visible md:block   lg:pl-12'> 
       <div className='flex justify-around py-2 w-[100%] '>
  <Link to='/'> <LuHome className='text-4xl ' /></Link>
  <Link to='/friends'> <IoPerson className='text-4xl '/></Link>
  <Link to='/vedios'> <AiOutlineYoutube className='text-4xl '/></Link>
  <Link to='/marketplace'> <CiShop className='text-4xl  '/></Link> 
  <Link to='/groups'><MdGroups2 className='text-5xl  hidden lg:block '/></Link> 
  <Link to='/vedios'><HiBars3  className='text-5xl  lg:hidden ' /></Link> 


   </div>

  </div>
 
 </div> 
    </div>
  )
}

export default Nav2
