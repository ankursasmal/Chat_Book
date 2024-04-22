import React from 'react'
import AllFriendCard from './AllFriendCard'
import { CiSearch } from "react-icons/ci";

function AllFriend() {
  return (
    <div className='    bg-[#F2F3F5] '>
    <div className='  lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  flex items-center flex-col flex-nowrap justify-center rounded-lg' >      
    <div className='flex items-center my-1 md:my-2 flex-col  mx-1 md:mx-4 '>
<a className ='text-1xl md:text-2xl font-semibold pr-[3px] mb-2 md:pr-2'>Friends</a>
<a>All Friends (number)</a>
<div className='flex p-2 my-3 items-center border-1px bg-white border-red-700 rounded-full  w-[50vw] md:w-[40vw] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='Post a status update' className='w-[92%] p-[7px]  outline-none border-none   text-[9px] rounded-full' />
</div>
</div>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>
 <AllFriendCard/>

</div>
</div>
  )
}

export default AllFriend
