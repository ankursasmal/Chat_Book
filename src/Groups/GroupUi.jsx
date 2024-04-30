import React from 'react'
import Nav from '../components/Nav'
 import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { BiSolidRadio } from "react-icons/bi";
import { IoCompass } from "react-icons/io5";
import { MdGroups3 } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import style from '../Style/MemoryUi.module.css';

 import { MdArrowForwardIos } from "react-icons/md";
 function GroupUi() {
    return (
    <div>
    <Nav/>
<div className='grid grid-cols-12 gap-1 '>
  
  {/* column 1 */}
  <div className='col-span-4 md:col-span-3   '>
  <div div className='h-[100vh bg-white'>
    
 <div className='pl-3  bg-white mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
  <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3  '>
    <a className={`${style.fontsizes} text-2xl font-semibold`}>Groups</a>
        <IoSettingsSharp    className='text-1xl md:text-2xl'/>
 </div>
 
    <div className='flex px-1 py-.5 md:px-2 md:py-1 my-3 items-center border-1px bg-gray-100  rounded-full  md:w-[95%]  w-[100%] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='search Groups' className='w-[92%] p-[1px]  bg-gray-100   outline-none border-none  text-[9px] lg:text-[15px] md:text-[13px] rounded-full' />
</div>

     <Link to='/groups'> 
  <div className='flex items-center  sm:mx-0  md:mx-4 lg:mx-4 my-3'>
      
  
    <BiSolidRadio className='mr-3'/>

   <a className={`${style.fontsizes}`}> Your Feed</a>
</div></Link>
 
  
    <Link to='/groups/discover'> 
   <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
    <div className='flex items-center '>

    <IoCompass className='mr-3'/>

    <a className={`${style.fontsizes}`}> Discover</a>
</div>
<MdArrowForwardIos />

    </div></Link> 
    
    <Link to="/groups/your-groups"> 
     <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-3'>
 
    <MdGroups3 className='mr-3'/>

    <a className={`${style.fontsizes}`}>Groups</a>
</div>
 
    </Link>
    <hr className='my-3'/>
    <button className='py-[1px] md:py-2 px-[4vw] items-center self-center rounded-lg text-[1vw] bg-blue-500 text-white my-3'>  +{" "}Create new Groups</button>

    <hr className='my-4'/>

    <Link to=" "> 
<div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
     <a className={` text-[1.9vw] md:text-[1.6vw] mr-3 font-semibold `}> Groups You Join</a>
<a className='text-[1.8vw] md:text-[1.3vw]'>See All</a>
 
    </div>
    </Link>

     
    </div>
     

  
</div>
</div>
  </div>
  {/* column 2 */}
  <div className='col-span-8 md:col-span-9  mt-[82px] md:mt-0  mr-3  bg-[#F2F3F5]  '>
<Outlet/>

</div>
</div>
</div>
  )
}

 

export default GroupUi
