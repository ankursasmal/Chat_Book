import React, { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
 import { HiBars3 } from "react-icons/hi2";

 import Nav2 from './Nav2';
import Nav3 from './Nav3';
import SlideNav from './SlideNav';
function NavForRout() {
   
  return (
    <div >
  
      <nav className='flex mb-1 justify-between z-30 items-center navbarmain'>
  <div className='flex px-0.5 items-center'>
<img className='pl-[6px] h-[50px] pr-2 ' src="https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg" alt="" />
<div className='lg:block hidden '> 
      <div className='flex   items-center border-1px border-black rounded-full  bg-slate-200 '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='Post a status update' className='w-[92%]  outline-none border-none  bg-slate-200  text-black  p-2  text-[9px] lg:text-[15px] md:text-[13px] rounded-full' />
</div>
</div>
 <CiSearch className='text-5xl px-2 lg:hidden'  />
 

   </div>
  <Nav2 />
  <Nav3/>
 </nav>
    </div>
  )
}
 
export default NavForRout
