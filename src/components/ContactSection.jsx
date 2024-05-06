import React, { useEffect, useState } from 'react'

function ContactSection() {
  let [user,setuser]=useState([]);
   useEffect(()=>{

  fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then( data=>{
    setuser(data.users); 
  
   })
},[])
  return (
    <div  className='flex items-center justify-center flex-col'>
    {
       user.map((v,i)=>{
        return(
    <div className='mt-3 flex items-center justify-between  hover:p-1 hover:bg-gray-100 hover:rounded-md w-[90%]'>
       <div className=' flex items-center'>
             <img className='border rounded-full w-[40px] h-[40px] mr-4'  src={v.image} alt=""   />
<a className='pl-1'>{v.firstName} {" "}{v.lastName}</a>
   </div>
   <a></a>
    </div>
     )
    })
      }
 </div>
  )
}

export default ContactSection
