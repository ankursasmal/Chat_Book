import React from 'react'

function CloseFriend() {
  return (
<div className='    bg-[#F2F3F5] '>
    <div className='  lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  flex  flex-col flex-nowrap  rounded-lg' >      
    <div className='flex  my-1 md:my-2 flex-col  mx-1 md:mx-4 '>
    <div className='flex justify-between flex-wrap '>
    <div className='flex  flex-col pl-2 '>

    <button className=' self-start py-[.7vw] rounded-lg my-2 text-blue-500 hover:bg-blue-400 hover:text-white border-none outline-none '>Close Friends</button>

 <a>Your friends, who you can share exclusively with if you want. Learn More
</a>
</div>
<a className=' font-semibold text-blue-500'>Mannage</a>
</div>

<div className='flex justify-center  flex-col items-center text-center my-[6vw]'>
<img src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg" alt="" className='w-[6vw]' />

    <a className='text-[2.5vw] font-semibold my-3'>You haven't added anyone to this list
</a>
<a href="">Get started by adding friends.</a>
<button className='px-[1vw] py-[.7vw] rounded-lg my-2 bg-blue-400 text-white'>Add Friends</button>
</div>
    </div>
    </div>  
    </div>
  )
}

export default CloseFriend