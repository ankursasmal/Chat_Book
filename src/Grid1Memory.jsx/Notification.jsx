import React from 'react'
import style from '../Style/MemoryHome.module.css'

function Notification() {
  return (
<div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[92px] sm:mt-[12vw] md:mt-[92px]   ' >
<div className={`${style.shadows} flex flex-col justify-center mx-[2vw] md:mx-[10vw] p-1 md:p-2 my-[2vw] md:my-[8vw] `}>
<div className={`  flex flex-col my-1.5 px-[3vw]`}>
<a className='font-semibold text-2xl mb-1'>Notifications
</a>
<a>
You can choose how often you want to be notified about your memories.
</a>
</div>


  <div className='flex items-center justify-between px-[3vw]'>

<div className='flex flex-col  '>
<a className='font-semibold text-2xl mb-1'>All memories
</a>
<a>
we will notify you no more than once a day</a>
</div>
<input type="radio" />
</div>


<hr className='my-1.5'/>


<div className='flex items-center justify-between px-[3vw]'>

<div className='flex flex-col  '>
<a className='font-semibold text-2xl mb-1'>Highlights
</a>
<a>
We'll periodically update you about select memories.</a>
</div>
<input type="radio" />
</div>

<div className='flex items-center justify-between my-1.5 px-[3vw]'>

<div className='flex flex-col  '>
<a className='font-semibold text-2xl mb-1'>None
</a>
<a>
We won'+ notif» vou about memorioc
</a>
</div>
<input type="radio" />
</div>


</div>
   </div>   
    </div>
  )
}

export default Notification
