import React from 'react'
import { Link, Outlet } from "react-router-dom";

import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
 import { FaGift } from "react-icons/fa";
import Friends from './Friends';
// import Title from '../components/Title';
import Nav from '../components/Nav';
import style from '../Style/SecondUiPage.module.css';

function SecondUiPage() {
  return (
    <div>
        <Nav/>
    <div className='grid grid-cols-12 gap-1 '>
      {/* column 1 */}
      <div className='col-span-4 md:col-span-3   '>
      <div div className='h-[100vh bg-white'>
        
     <div className='pl-3 bg-white mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
      <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3  '>
        <a className={`${style.fontsizes}`}>Friends</a>
            <IoSettingsSharp   />


        </div>
             <Link to='/friends'> <div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
        <FaUserFriends className='mr-3'/>
      <a className={`${style.fontsizes}`}>Home</a>

        </div></Link>
        <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
          
          <Link to="/friends/friend-request"><div className='flex items-center '>

        <MdGroupAdd className='mr-4'/>

       <a className={`${style.fontsizes}`}> Friend Requests</a>
</div></Link>
<MdArrowForwardIos />

        </div>
      <Link to="/friends/suggestion">   <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
        <div className='flex items-center '>

        <MdGroupAdd className='mr-4'/>

        <a className={`${style.fontsizes}`}> Suggestions</a>
</div>
<MdArrowForwardIos />

        </div></Link>
        
        <Link to="/friends/all-friend"> 
         <div className='flex items-center justify-between sm:mx-0  md:mx-4 lg:mx-4 my-3'>
        <div className='flex items-center '>

        <MdGroupAdd className='mr-4'/>

        <a className={`${style.fontsizes}`}> All friends</a>
</div>
<MdArrowForwardIos />

        </div>
        </Link>

        <Link to="/friends/birthday"> 
    <div className='flex items-center my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
        <FaGift className='mr-3'/>
        <a className={`${style.fontsizes}`}> Birthdays</a>

        </div>
        </Link>

        <Link to="/friends/custom"> 
   <div className='flex items-center justify-between  sm:mx-0  md:mx-4 lg:mx-4 my-3'>
        <div className='flex items-center '>

        <MdGroupAdd className='mr-4'/>

        <a className={`${style.fontsizes}`}> Custom Lists</a>
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

export default SecondUiPage 