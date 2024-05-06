import React from 'react'
import FriendCard from './FriendCard'
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import ContactSection from './ContactSection';
import { CiCirclePlus } from "react-icons/ci";

function Grid2() {
  return (
    <div className='h-[100vh]  '>
     <div className='p-4 mt-3  flex flex-col  '  >
        <div className='flex flex-col '>
            <h1>Sponcerad</h1>
<div className='flex items-center hover:border-[.05px] hover:border-black p-2' >
 <img src="https://source.unsplash.com/random/?electronics" alt=""  className='h-30 w-[40%] p-1 bg-gray-200'/>
 <div className='flex flex-col pl-4'>
    <a href='https://www.flipkart.com'>Flipcart</a>
    <a href='https://www.flipkart.com' className='text-[12px]'>Flipcart.com</a>
 </div>
 </div>
 <div className='flex items-center hover:border-[.05px] hover:border-black p-2 mt-3' >
 <img src="https://source.unsplash.com/random/?electronics,laptop" alt=""  className='h-30 w-[40%] p-1 bg-gray-200'/>
 <div className='flex flex-col pl-4'>
    <a href='https://www.Amazon.com'>Amazon</a>
    <a href='https://www.Amazon.com' className='text-[12px]'>Amazon.com</a>
 </div>
 </div>
 <hr className='m-3 '/>
 <div className='flex flex-col '>
<div className='flex items-center justify-between'>
    <a>Friend Request</a>
    <a>see All</a>
</div>
<div className='m-1 flex items-center justify-between'>
    <div className='flex items-center'> 
     <img className='border rounded-full w-[40px] h-[40px] mr-4'  src="data:image/jpeg;base64,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" alt=""   />
<div className='flex flex-col pl-2 '>
<a>Name</a>
<a>friend Details</a>
</div>
</div>
<a>hours</a>
</div>
 <FriendCard text={"Confirm"} text1={"Delete"}/>
 <div className='mt-3 flex flex-col px-1'>
 <div className=' flex items-center   justify-between'>
    <a className='text-[20px]'>contact</a>
    <div className='flex items-center'> 
             <CiSearch className='text-5xl px-2' />
             <BsThreeDots className='pr-1 text-4xl' />

    </div>
</div>
 </div>
 <ContactSection/>
  
  
 <hr className='m-3 '/>
<h3 className='text-2xl font-semibold'>Recomanded Grops</h3>
<ContactSection/>
 
{/* create group */}
<div className='mt-3 pl-1 flex items-center justify-between  hover:p-1 hover:bg-gray-100 hover:rounded-md'>
       <div className=' flex items-center'>
       <CiCirclePlus className='text-4xl mr-4 ' />
<a className='pl-1 '>Create new Grounp</a>
   </div>
   <a></a>
    </div>
 </div>

        </div>
      </div>
    </div>
  )
}

export default Grid2
