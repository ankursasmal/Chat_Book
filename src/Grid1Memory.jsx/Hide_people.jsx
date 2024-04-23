import React from 'react'
import Comment from '../components/Comment'
import style from '../Style/MemoryHome.module.css'

function Hide_people() {
  return (
<div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[92px] sm:mt-[12vw] md:mt-[92px]   ' >
<div className={`${style.shadows} flex flex-col justify-center mx-[2vw] md:mx-[10vw] p-1 md:p-2 my-[2vw] md:my-[8vw] `}>
      <a className='font-semibold  text-[3.5vw] md:text-[2.5vw] my-1'>Hide Memories of People
</a>
  <a className='my-2'>Tell us who you'd rather not see in your memories. The person won't be notified.
</a>  
<Comment/>
    </div>
    </div>
    </div>
  )
}

export default Hide_people
