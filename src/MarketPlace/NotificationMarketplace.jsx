import React from 'react'
import style from '../Style/MemoryHome.module.css'
import { FaBell } from "react-icons/fa";

function NotificationMarketplace() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[87px] sm:mt-[11vw] md:mt-[87px]   ' >
<div className={`${style.shadows} flex flex-col justify-center mx-[2vw] md:mx-[10vw] p-2 md:p-3 my-[2vw] md:my-[8vw] `}>
      <a className='font-semibold  text-[3.5vw] md:text-[2.5vw] my-1'>Notification
</a>
<div className='flex items-center  flex-col mt-4'>
<FaBell className='md:text-8xl text-6xl'/>
  <a className='my-2  text-[3vw] md:text-[2vw] font-semibold text-gray-400'> You have no notifications.
</a>  
     </div>
     </div>
    </div>
    </div>
  )
}

export default NotificationMarketplace
