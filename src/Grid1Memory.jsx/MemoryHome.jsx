import React from 'react'
import style from '../Style/MemoryHome.module.css'

function MemoryHome() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[90px] sm:mt-[11vw] md:mt-[90px] py-[5vw] px-[3vw] ' >
<div className={` ${style.shadows} mx-[4vw] md:mx-[10vw] flex justify-center items-center flex-col `}>
<img className='w-[50vw] rounded-lg' src="https://www.facebook.com/images/goodwill/throwback/permalink/tetra/tetra_home_header-2x.png" alt="" />
<a className='font-semibold  text-[3.5vw] md:text-[2.5vw] my-3'>No memories today
</a>
<a className='text-center text-[2.5vw] md:text-[1.5vw]'>There aren't any Memories to see or share today, but we'll let you know when you have some to look back on.</a>
</div>
    </div>      
    </div>
  )
}

export default MemoryHome
