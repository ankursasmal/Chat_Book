import React, { useState } from 'react'
import Title from './Title'
import { Link } from "react-router-dom";


import { AiOutlineVideoCamera } from "react-icons/ai";
import { RiMemoriesFill } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { MdGroup } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { BiCalendarStar } from "react-icons/bi";
import { BiBookAdd } from "react-icons/bi";
import { IoChevronDownSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa6";
import { PiMessengerLogoThin } from "react-icons/pi";
import { IoFlagSharp } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

function NavSqureItems() {
    let [seen,setseen]=useState(true);
  return (
    <div div className='h-[50vh]'>
     <div className='pl-3 mr-6 overflow-y-auto h-[50vh] w-[250px] flex flex-col'  >
      <div className='flex flex-col    '> 
        <div className='flex items-center py-3  '>
        <div className='flex px-1 py-.5 md:px-2 md:py-1 items-center border-1px bg-gray-100  rounded-full  md:w-[95%]  w-[100%] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='search vedio' className='w-[92%] p-[1px]  bg-gray-100   outline-none border-none  text-[9px] lg:text-[15px] md:text-[13px] rounded-full' />
</div>
        </div>
        <Link to='/friends'>  <div className='flex items-center '>
            <img className='border rounded-full w-[40px] h-[40px] mr-4'  src="  https://www.shutterstock.com/image-vector/facebook-friends-user-interface-icon-260nw-465585674.jpg" alt=""   />
            <Title name={'Friends'}/>

        </div></Link>
        <Link to='/vedios'>  <div className='flex items-center my-3'>
        <AiOutlineVideoCamera className='mx-4'/>

             <Title name={'Vedios'}/>

        </div></Link>

      <Link to='/memories'>   <div className='flex items-center my-3'>
        <RiMemoriesFill className='mx-4'/>

             <Title name={'Memories'}/>

        </div></Link>
      
        <Link to='/save'>  <div className='flex items-center my-3'>
        <CiBookmark className='mx-4'/>

             <Title name={'Saved'}/>

        </div>
        </Link>
         
        <Link to='/groups'>   <div className='flex items-center my-3'>
        <MdGroup className='mx-4'/>

             <Title name={'Gropus'}/>

        </div>
        </Link>
        <Link to='/market-place'><div className='flex items-center my-3'>
        <FaShop className='mx-4'/>

             <Title name={'MarketPlacess'}/>

        </div>
         </Link>
        <Link to='/feeds'>  <div className='flex items-center my-3'>
        <BiBookAdd className='mx-4'/>

             <Title name={'Feeds'}/>

        </div></Link>

         </div>
         
     {seen?   <div className='flex items-center my-2' onClick={()=>{setseen(false)}}>
        <IoChevronDownSharp className='mx-4'/>
               <Title name={'See'}  />

        </div>
        :
        <div className='flex flex-col '> 
        <div className='flex items-center my-3'>
        <img className='border rounded-full w-[40px] h-[40px] mr-3'  src="https://t3.ftcdn.net/jpg/02/15/57/22/360_F_215572243_4HMbV2462b7m3nlRHwHxatX3fRLCfLTa.jpg" alt=""   />
             <Title name={'Blood Donation'}/>

        </div>
        <div className='flex items-center my-3'>
        <img className='border rounded-full w-[40px] h-[40px] mr-3'  src="        https://static.vecteezy.com/system/resources/thumbnails/001/312/526/small_2x/planet-earth-with-plant-growing-free-vector.jpg
 " alt=""   />
             <Title name={'Climet Science Center'}/>

        </div>
        <div className='flex items-center my-3'>
        <FaFacebookMessenger className='mx-4'/>

             <Title name={'Messenger'}/>

        </div>
        <div className='flex items-center my-3'>
        < PiMessengerLogoThin className='mx-4'/>
              <Title name={' Messanger Kids'}/>

        </div>
        <div className='flex items-center my-3'>
        < IoFlagSharp className='mx-4'/>
              <Title name={'Pages'}/>

        </div>
        <div className='flex items-center my-3'>
        < FaGamepad className='mx-4'/>
              <Title name={'Play Games'}/>

        </div>
        
        <div className='flex items-center my-3'>
        < CiImageOn className='mx-4'/>
              <Title name={'Recents Ad And Activity'}/>

        </div>
         <div className='flex items-center my-2' onClick={()=>{setseen(true)}}>
         <MdOutlineKeyboardArrowUp className='mx-4'/>
                <Title name={'See'}  />
 
         </div>
        </div>
         
        } 
         
</div>
</div>
   )
}
 

export default NavSqureItems
