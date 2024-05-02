import React from 'react'
import Nav from '../components/Nav'
import style from '../Style/Vedio.module.css'
import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";

 import { MdArrowForwardIos } from "react-icons/md";
import NavForRout from '../components/NavForRout';
 function Vedio() {
  return (
    <div>
    <NavForRout/>
<div className='grid grid-cols-12 gap-1 '>
  
  {/* column 1 */}
  <div className='col-span-4 md:col-span-3  '  >
  <div div className='h-[100vh]  bg-white '  >
    
 <div className='pl-3  mt-3  overflow-y-auto h-[100vh] w-[23%]  bg-white  flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
  <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3  '  >
    <a className={`${style.fontsizes} text-2xl font-semibold`}>Vedio</a>
        <IoSettingsSharp    className='text-2xl'/>
 </div>
 
    <div className='flex px-1 py-.5 md:px-2 md:py-1 my-3 items-center border-1px bg-gray-100  rounded-full  md:w-[95%]  w-[100%] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='search vedio' className='w-[92%] p-[1px]  bg-gray-100   outline-none border-none  text-[9px] lg:text-[15px] md:text-[13px] rounded-full' />
</div>

    <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
      
    <Link to='/vedios'> 
<div className='flex items-center '>

    <PiTelevisionSimpleBold className='mr-4'/>

   <a className={`${style.fontsizes}`} > Home</a>
</div></Link>
<MdArrowForwardIos />

    </div>
    <Link to='/vedios/live'> 
   <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
    <div className='flex items-center '>

    <MdOutlineVideoCameraBack className='mr-4'/>

    <a className={`${style.fontsizes}`} > Live</a>
</div>
<MdArrowForwardIos />

    </div></Link> 
    
    <Link to="/vedios/shows"> 
     <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
    <div className='flex items-center '>

    <SiYoutubeshorts className='mr-4'/>

    <a className={`${style.fontsizes}`} >Shows</a>
</div>
<MdArrowForwardIos />

    </div>
    </Link>

    <Link to="/vedios/explore"> 
<div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
    <IoRocketOutline className='mr-3'/>
    <a className={`${style.fontsizes}`} > Explore</a>

    </div>
    </Link>

    <Link to="/vedios/savevideo"> 
<div className='flex items-center justify-between  sm:mx-0  md:mx-4 lg:mx-4 my-3'>
    <div className='flex items-center '>

    <FaBookmark className='mr-4'/>

    <a className={`${style.fontsizes}`} > Saved Videos</a>
</div>
<MdArrowForwardIos />

    </div>
    
</Link>
    
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

export default Vedio
