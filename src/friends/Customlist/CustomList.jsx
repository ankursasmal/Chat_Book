import React from 'react'
import { IoStarOutline } from "react-icons/io5";
import { TbLockOff } from "react-icons/tb";
import { FaPhotoVideo } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
 import style from '../../Style/CustomList.module.css'
import { Link, Outlet } from "react-router-dom";
import NavForRout from '../../components/NavForRout';

function CustomList() {
  return (
    <div>
<NavForRout/>
<div className='grid grid-cols-12 gap-1 '>
  {/* column 1 */}
  <div className='col-span-4 md:col-span-3   ' >
  <div div className='h-[100vh bg-white'>
    
 <div className='pl-3 bg-white mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
 <div className='flex flex-col    '> 

     <div className='flex flex-col my-3 sm:mx-0  md:mx-3 lg:mx-3  '>
    <a className={`${style.fontsizes}`}>Friends</a>
 <a className='font-bold text-2xl mt-3'>Custom List</a>

    </div>
        
    <div className='flex   flex-col justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
      
      <Link to="/friends/custom">
      <div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>

    <IoStarOutline className='mr-4'/>

   <a className={`${style.fontsizes}`}>Close friends</a>
</div></Link>
   
      <Link to="/friends/custom/restriction"> 
<div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
   
    <TbLockOff className='mr-4'/>

    <a className={`${style.fontsizes}`}> Restriction</a>
</div>

     </Link>
    
    <Link to="/friends/custom/Acquaintances"> 
    <div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
 
    <FaPhotoVideo className='mr-4'/>

    <a className={`${style.fontsizes}`}> Acquaintance</a>
 </div>
     </Link>

     <Link to="/friends/custom/createlist"> 
<div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
    <GoPlusCircle className='mr-3'/>
    <a className={`${style.fontsizes}`}> Create List</a>

    </div>
    </Link>
  
 </div>
  
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

export default CustomList
