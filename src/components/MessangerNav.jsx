import React from 'react'
import { BsArrowsFullscreen } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import style from '../Style/Cards.module.css'
import { FaPenSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import ContactSection from './ContactSection';

function MessangerNav() {
  return (
    <div className={`${style.shadows} flex flex-col p-2 w-[220px] md:w-[320px] lg:w-[430px] border-1px bg-white border-black fixed  md:top-[88px] top-[74px] right-[4vw] lg:h-[40vw] md:h-[500px] h-[500px] overflow-y-auto`}>
    <div className={ `flex flex-col px-[1.5vw] py-[2vw]   `}>
        <div className='flex items-center justify-between '>
<a className='text-[2.6vw] md:text-[2vw] font-bold'>Chats</a>     
  <div className='fleex items-center'> 
<BsThreeDots/>    
<BsArrowsFullscreen className='px-[1.5vw]'/>
<FaPenSquare/>   
</div>     
</div>
<div className='flex px-1 py-.5 md:px-2 md:py-1 mt-[1.2vw] items-center border-1px bg-gray-100  rounded-full  md:w-[95%]  w-[100%] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='search vedio' className='w-[92%] p-[1px]  bg-gray-100   outline-none border-none  text-[9px] lg:text-[15px] md:text-[13px] rounded-full' />
</div>

<div className='flex items-center  '>
<a className='font-semibold mr-2 px-1 py-.5  hover:bg-blue-400 hover:text-white '>All</a>
<a className='font-semibold px-1 py-.5 hover:bg-blue-400 hover:text-white'>Unread</a>
</div>
 </div>
  
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>
<ContactSection/>


</div>
  )
}

export default MessangerNav
