import React from 'react'
import style from '../Style/MemoryHome.module.css'

function InboxMarketplace() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[87px] sm:mt-[11vw] md:mt-[87px]   ' >
<div className={`  flex flex-col justify-center mx-[2vw] md:mx-[10vw] p-2 md:p-3 my-[2vw] md:my-[8vw] `}>
<div className={`${style.shadows} flex py-4 my-4  w-[100%]  flex-col `}>
<div className={`  flex items-center  px-2  `}>

      <a className='font-semibold hover:text-blue-400 pr-[3vw] text-[1.8vw] md:text-[1.2vw] my-1'> Selling
</a>
<a className='font-semibold  hover:text-blue-400 text-[1.8vw] md:text-[1.2vw] my-1'> Buying
</a>
</div>
<div className='font-bold bg-black w-[100%] h-[.6px] my-4'></div>

    <a className='font-light text-gray-400 px-2 '>Filter By Label</a>
<div className='flex p-2 my-1 items-center flex-wrap justify-center'>
<a className='px-[.7vw] py-[.4vw] text-[2.2vw]   mx-[.7vw] md:text-[.75vw] font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg'>All</a>
<div  className='flex items-center px-[.7vw] py-[.4vw] text-[2.2vw]   mx-[.7vw] md:text-[.75vw] font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg  '><a className='pr-[2px]'>Pending</a> <a>payment</a></div>
<a className='px-[.7vw] py-[.4vw] text-[2.2vw] mx-[1vw]  md:text-[.75vw]   font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg'>Paid</a>
<div className='flex items-center px-[.7vw] py-[.4vw] text-[2.2vw]   mx-[.7vw] md:text-[.75vw] font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg    '><a >To</a> <a className='px-1'>be</a> <a>shipped</a> </div>
<a className='px-[.7vw] py-[.4vw] text-[2.2vw] mx-[1vw]   md:text-[.75vw]    font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg'>Shipped</a>
<div className='flex items-center px-[.7vw] py-[.4vw] text-[2.2vw]   mx-[.7vw] md:text-[.75vw] font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg  '> <a > Cash</a> <a className='px-2'>on</a> <a>delivery</a>  </div>
<a className='px-[.7vw] py-[.4vw] text-[2.2vw] mx-[1vw]   md:text-[.75vw] font-semibold bg-gray-300 hover:bg-white hover:text-blue-400 rounded-lg'>Completed </a>

</div>
</div>
<div className={` ${style.shadows} flex py-[4vw] items-center justify-center flex-col`}>
    <img className='w-[7vw]' src="https://www.facebook.com/images/comet/empty_states_icons/messages/null_states_messages_gray_wash.svg" alt="" />
<a className='mt-3 mb-1 text-[2vw] md:text-[1.3vw] font-semibold'>No chats
</a>
<a className='font-thin text-[2.2vw] md:text-[1.5vw] '>Chats older than 60 days are not shown</a>
</div> 
     </div>
     </div>
    </div>
   )
}

export default InboxMarketplace
