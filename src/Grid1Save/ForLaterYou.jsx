import React from 'react'
import { IoLockClosedOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

function ForLaterYou() {
  return (
<div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[90px] sm:mt-[11vw] md:mt-[90px]  ' >
 
<div className=' flex justify-center my-4 flex-col   '>
    <img src="https://source.unsplash.com/random/?movie,night" className='rounded-lg w-[78vw] h-[30vw]' alt="" />
<div className=' flex items-center my-4 mx-[4vw] justify-between flex-wrap  '>
<div className='flex flex-col mx-1'>
<a className='text-[3vw]'> For Later</a>
<div className='flex items-center mb-2'>
<IoLockClosedOutline/>
<a className='mx-[2px] font-thin'>Only me</a>
</div>
</div>
   <div className='flex items-center justify-between'> 
   <img className='w-[4vw] h-[4vw] rounded-full ml-[2vw]' src="https://media.licdn.com/dms/image/D4D03AQHUsR6wSFHSTA/profile-displayphoto-shrink_200_200/0/1679241006988?e=2147483647&v=beta&t=3t0t05OSCsynqbifgP6lMe-oq2Kv6AtkaFHT2zZJO7o" alt="" />
   <button className='mx-[2vw] px-[3vw] py-[1vw] rounded-lg bg-blue-400 text-white font'> {"+ "+"  "} Invite</button>
   <button className='text-2xl px-[3vw] py-[1vw] bg-gray-200'><BsThreeDots/></button>

    </div> 
</div>    
<h1 className='my-[5vh] self-center font-semibold text-2xl'> See all Vedios</h1>

</div>
</div>      
    </div>
  )
}

export default ForLaterYou
