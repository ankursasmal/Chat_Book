import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { VscSaveAll } from "react-icons/vsc";

import { IoSettingsSharp } from "react-icons/io5";
 
 import Nav from '../components/Nav';
import style from '../Style/SaveUi.module.css';

function SaveUi() {
    return (
    <div>
        <Nav/>
    <div className='grid grid-cols-12 gap-1 '>
      {/* column 1 */}
      <div className='col-span-4 md:col-span-3   '>
      <div div className='h-[100vh'>
        
     <div className='pl-3  mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'85px',left:'0px'}}>
      <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3  '>
        <a className={`${style.fontsizes} font-semibold`}>Saved</a>
            <IoSettingsSharp   />


        </div>
        <Link to='/save'> <div className='flex items-center my-4 sm:mx-0  md:mx-3 lg:mx-3 '>
        <VscSaveAll className='mr-3'/>
      <a className={`${style.fontsizes}`}>Saved items</a>

        </div></Link>
        <hr/>
        <a className={`${style.fontsizes} font-semibold my-3`}>My Collection</a>

           
          <Link to="/save/for-later"><div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 mb-4'>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKffcEm2GzcWSXsRH3XcBwJ5dWnToaqgEu52w_kSmVZQ&s"  className='w-[4vw] h-[4vw] rounded-full  mr-4'/>

       <a className={`${style.fontsizes}`}>  For Later</a>
</div></Link>
 
    <button className='py-[.5px] md:py-2 px-[4vw] items-center self-center rounded-lg text-[1vw] bg-blue-500 text-white '>  +{" "}Create new Collection</button>
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

  

export default SaveUi
