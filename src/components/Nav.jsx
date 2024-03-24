import React from 'react'
import { CiSearch } from "react-icons/ci";
 import { HiBars3 } from "react-icons/hi2";

 import Nav2 from './Nav2';
import Nav3 from './Nav3';
function Nav() {
  return (
    <div>
      <nav className='flex mb-1 justify-between items-center navbarmain'>
  <div className='flex px-0.5 items-center'>
<img className='pl-[6px] h-[50px] pr-2 ' src="https://png.pngtree.com/element_our/png/20181229/vector-chat-icon-png_302635.jpg" alt="" />
<div className='lg:block hidden '> 
      <div className='flex   items-center border-1px border-black rounded-full  bg-slate-300 '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='Post a status update' className='w-[92%]  outline-none border-none  bg-slate-300  text-white  p-2 text-[9px] rounded-full' />
</div>
</div>
 <CiSearch className='text-5xl px-2 lg:hidden'  />
<HiBars3  className='text-5xl  md:hidden ' />

   </div>
  <Nav2 />
  <Nav3/>
 </nav>
    </div>
  )
}

export default Nav
