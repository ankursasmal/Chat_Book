import React from 'react'
import style from '../Style/Cards.module.css'
import GroupCard from './GroupCard'
import { BsThreeDots } from "react-icons/bs";

function Your_feed_Groups() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[87px] sm:mt-[11vw] md:mt-[87px]  overflow-x-auto  ' >
<div className={`flex flex-col justify-center mx-[2vw] md:mx-[6vw] p-2 md:p-3 my-[1vw] md:my-[3vw] `}>
<div className={`${style.shadows} flex items-center justify-between px-2 py-[.5vw]`}> 
<a className='text-[2vw] md:text-[1.6vw]  font-bold'>Suggetion For you</a>
<BsThreeDots className='text-2xl'/>
</div>
<div className={`text-[2vw] md:text-[1.6vw]  flex overflow-x-auto  `}>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
</div>
<div className={`${style.shadows} flex items-center justify-between px-2 py-[.5vw] mt-[4vw]`}> 
<a className='text-[2vw] md:text-[1.6vw]  font-bold'> Friend Groups</a>
<BsThreeDots className='text-2xl'/>
</div>
<div className={`text-[2vw] md:text-[1.6vw]  flex overflow-x-auto  `}>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
<GroupCard/>
</div>

<div className={`${style.shadows} flex mt-[2.2vw] p-2 flex-col items-center justify-center`}>
    <img className='w-[8vw] py-[4vw]' src="https://www.facebook.com/images/comet/empty_states_icons/media/null_states_media_gray_wash.svg" alt="" />
<a className='text-[3vw] md:text-[2vw] font-semibold '>You're all caught up
</a>
<a className='text-[2.2vw] md:text-[1.7vw] font-thin  my-1'>Check back later for more updates</a>
<button className='self-center px-[2vw] py-[.5vw] text-[1.6vw] md:text-[1.1vw ] mb-[2vw] rounded-lg bg-blue-400 text-white'>Discover More Groups</button>
</div>
   </div>

    </div>  
    </div>
   )
}

export default Your_feed_Groups
