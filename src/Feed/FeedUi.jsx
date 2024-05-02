import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

import { HiOutlineRadio } from "react-icons/hi2";
import { RiGroupFill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { MdOutlineFlag } from "react-icons/md";

 import Nav from '../components/Nav';
import style from '../Style/MemoryUi.module.css';

function FeedUi() {
    return (
    <div>
        <Nav/>
    <div className='grid grid-cols-12 gap-1 '>
      {/* column 1 */}
      <div className='col-span-4 md:col-span-3   ' style={{zIndex:'-1'}}>
      <div div className='h-[100vh bg-white  '  >
        
     <div className='pl-3 bg-white mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
      <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-4 sm:mx-0  md:mx-3 lg:mx-3   '>
        <a className={`${style.fontsizes} font-semibold`}>Feeds</a>
<a></a>

        </div>
        <Link to="/feeds"><div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 '>

<HiOutlineRadio className='mr-3'/>
<a className={`${style.fontsizes}`}> All</a>
</div></Link>
  
 
<Link to="/feeds/favorite">   
         <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-3'>
          <FaStar className='mr-3'/>

 
       <a className={`${style.fontsizes}`}> Favorites</a>
</div></Link>
 
<Link to="/feeds/friend">
  <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-4'>
          <RiGroupFill className='mr-3'/>

        <a className={`${style.fontsizes}`}> Friends</a>
       
</div></Link>
<Link to="/feeds/groups">
  <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-4'>
          <MdGroups2 className='mr-3'/>

        <a className={`${style.fontsizes}`}> Groups</a>
       
</div></Link>
<Link to="/feeds/pages">
  <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-4'>
          <MdOutlineFlag className='mr-3'/>

        <a className={`${style.fontsizes}`}> Pages</a>
       
</div></Link>
 
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
 



export default FeedUi
