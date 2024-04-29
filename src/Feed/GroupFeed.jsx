import React from 'react'
import style from '../Style/Cards.module.css'

function GroupFeed() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[90px] sm:mt-[11vw] md:mt-[90px] py-[5vw] px-[3vw] ' >
<div className={` ${style.shadows} mx-[4vw] md:mx-[10vw]  px-2 flex justify-center  flex-col `}>
   
   <div className='flex items-center justify-center flex-col'>
    <img className='w-[5vw] h-5vw] rounded-full my-2' src="https://png.pngtree.com/png-clipart/20221028/original/pngtree-right-symbol-png-image_8741184.png" alt="" />
<a className='font-semibold text-[2.3vw] md:text-[1.7vw]'>You're all caught up on Most Recent posts
</a>
<a className='font-thin py-4 '>Check back later for more updates</a>
</div>
   </div>
   </div>   
    </div>
  )
}

export default GroupFeed
