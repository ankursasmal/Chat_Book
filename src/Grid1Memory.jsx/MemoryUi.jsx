import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { FaBell } from "react-icons/fa";

import { IoHomeOutline } from "react-icons/io5";
import { BiGroup } from "react-icons/bi";
import { BsCalendar2Date } from "react-icons/bs";

 import Nav from '../components/Nav';
import style from '../Style/MemoryUi.module.css';

function Memory() {
  return (
    <div>
        <Nav/>
    <div className='grid grid-cols-12 gap-1 '>
      {/* column 1 */}
      <div className='col-span-4 md:col-span-3   ' style={{zIndex:'-1'}}>
      <div div className='h-[100vh bg-white'>
        
     <div className='pl-3 bg-white mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
      <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-4 sm:mx-0  md:mx-3 lg:mx-3   '>
        <a className={`${style.fontsizes} font-semibold`}>Memory</a>
<a></a>

        </div>
        <Link to="/memories"><div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-3'>

<IoHomeOutline className='mr-3'/>
<a className={`${style.fontsizes}`}> Memories Home</a>
</div></Link>
                 <hr/>
 
         <a className='font-semibold text-[3.3vw] md:text-[1.6vw] mb-1 md:mb-2 '>Setting</a> 

          <Link to="/memories/notification">
            <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-4'>
          <FaBell className='mr-3'/>

 
       <a className={`${style.fontsizes}`}> Notification</a>
</div></Link>
 
<Link to="/memories/hide-people">
  <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-4'>
          <BiGroup className='mr-3'/>

 <div className='flex flex-col'>
       <a className={`${style.fontsizes}`}> Hide People</a>
       <a className= {`${style.fontsizes} font-thin `}>(num){" "} Hidden</a>
       </div>
</div></Link>
<Link to="/memories/hide-date"><div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-4'>
          <BsCalendar2Date className='mr-3'/>

 
          <div className='flex flex-col'>
       <a className={`${style.fontsizes}`}> Hide Date</a>
       <a className={`${style.fontsizes} font-thin `}>(num){" "} Hidden</a>
       </div></div></Link>
 
         </div>
         
 
      
</div>
</div>
      </div>
      {/* column 2 */}
      <div className='col-span-8 md:col-span-9 h-[100vh] mt-[82px] md:mt-0  mr-3  bg-[#F2F3F5]  '>
<Outlet/>

</div>
    </div>
    </div>
  )
}
export default Memory
