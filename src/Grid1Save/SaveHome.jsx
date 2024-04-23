import React from 'react'
import { IoReorderTwoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function SaveHome() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[90px] sm:mt-[11vw] md:mt-[90px]  ' >
 
<div className=' flex justify-center my-4 mx-[10vw]  justify-between'>
<a className='font-bold text-2xl text-blue mb-5'>All</a>
<button className='text-2xl p-2 bg-gray-200'><IoReorderTwoSharp/></button>
</div> 

    </div>      
    </div>
  )
}

export default SaveHome
