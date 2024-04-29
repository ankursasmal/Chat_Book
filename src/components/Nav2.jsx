import React, { useState } from 'react'
import { Link } from "react-router-dom";

 import { LuHome } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { MdGroups2 } from "react-icons/md";
import { AiOutlineYoutube } from "react-icons/ai";
 import { CiShop } from "react-icons/ci";
 import { HiBars3 } from "react-icons/hi2";
import { useRef } from 'react';
 import NavSqureMenu from './NavSqureMenu';

function Nav2() {
  
  let [clickSqureDot,setclickSqureDot]=useState(false);
  let displayclickSqureDot=useRef('');
  
  return (
    <div className='w-[52%]  ' >
     <div  className='w-[100%]  '> 
     <div className='hidden md:visible md:block   lg:pl-12'> 
       <div className='flex justify-around py-2 w-[100%] '>
       <div  ref={displayclickSqureDot} style={{display:'none'}} >< NavSqureMenu /></div>

  <Link to='/'> <LuHome className='text-4xl ' /></Link>
  <Link to='/friends'> <IoPerson className='text-4xl '/></Link>
  <Link to='/vedios'> <AiOutlineYoutube className='text-4xl '/></Link>
  <Link to='/market-place'> <CiShop className='text-4xl  '/></Link>
   {/*tailwind css a display:none ->hidden nama a work kora  */}
  <Link to='/groups'><MdGroups2 className='text-5xl hidden lg:block '/></Link> 
   <HiBars3  className='text-4xl  lg:hidden '  onClick={(e)=>{
      e.preventDefault();
if(clickSqureDot===true){
  setclickSqureDot(false);
  displayclickSqureDot.current.style.display='block';
}  
else{
  setclickSqureDot(true);
  displayclickSqureDot.current.style.display='none';

}    
     }}  />  


   </div>

  </div>
 
 </div> 
    </div>
  )
}

export default Nav2
