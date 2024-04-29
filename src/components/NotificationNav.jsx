import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import ContactSection from './ContactSection';
import style from '../Style/Cards.module.css'

function NotificationNav() {
 
  return (
    <div className={`${style.shadows} flex flex-col p-2 w-[200px] md:w-[320px] lg:w-[430px] border-1px bg-white border-black fixed  h-[40vw] overflow-y-auto lg:top-[89px] sm:top-[10vw] md:top-[85px] right-[4vw]`}>
        <div className={ `flex flex-col px-[1.5vw] py-[2vw]   `}>
            <div className='flex items-center justify-between '>
<a className='text-[2.6vw] md:text-[2vw] font-bold'>Notification</a>       
<BsThreeDots/>            
</div>
<div className='flex items-center mt-[1.2vw]'>
    <a className='font-semibold mr-2 px-1 py-.5  hover:bg-blue-400 hover:text-white '>All</a>
    <a className='font-semibold px-1 py-.5 hover:bg-blue-400 hover:text-white'>Unread</a>
</div>
     </div>
     <div className='flex items-center justify-between '>
    <a className='font-semibold '>New</a>
    <a className='font-thiin text-blue-400 '>see All</a>
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

export default NotificationNav
