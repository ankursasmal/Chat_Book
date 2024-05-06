import React, { useEffect, useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import style from '../Style/AllFriendCard.module.css'

function AllFriend() {
  let [user,setuser]=useState([]);
  let [inputval,setinputval]=useState([]);
  useEffect(()=>{

  fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then( data=>{
    setuser(data.users); 
    // ata fixed but user change hota thakba
    setinputval(data.users); 

   })
},[])

  return (
    <div className='    bg-[#F2F3F5] '>
    <div className='  lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  flex items-center flex-col flex-nowrap justify-center rounded-lg' >      
    <div className='flex items-center my-1 md:my-2 flex-col  mx-1 md:mx-4 '>
<a className ='text-1xl md:text-2xl font-semibold pr-[3px] mb-2 md:pr-2'>Friends</a>
<a>All Friends {inputval.length}</a>
<div className='flex p-2 my-3 items-center border-1px bg-white border-red-700 rounded-full  w-[50vw] md:w-[40vw] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='Post a status update' className='w-[92%] p-[7px]  outline-none border-none   text-[14px] rounded-full'  onChange={(e)=>{ 
  // input change a user array ta change hota thakba
  setuser(inputval.filter((val=> val.firstName.toLowerCase().includes(e.target.value))))


//  if(e.target.value===' '){
// setuser(inputval);
// }
}

}/>
</div>
</div>
 
     <div  className='flex items-center justify-center flex-wrap'>
    {
       user.map((v,i)=>{
        return(
    <div key={i} className={` ${style.shadows} flex items-center justify-between mx-1 md:p-3 p-1 md:mx-4 my-3 w-[50vw] md:w-[40vw] rounded-lg`}>
<div className='mt-3 flex items-center justify-between  hover:p-1 hover:bg-gray-100 hover:rounded-md'>
       <div className=' flex items-center'>
             <img className='border rounded-full w-[40px] h-[40px] mr-4'  src={v.image} alt=""   />
<a className='pl-1'>{v.firstName} </a>
   </div>
   <a></a>
    </div>       <BsThreeDots className='text-[3vw] md:text-[2vw]'/>

   </div>
      )
    })
      }
 </div>  

</div>
</div>
  )
}

export default AllFriend
