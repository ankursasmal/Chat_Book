import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import style from '../Style/Cards.module.css'
function Cards() {
  let [user,setuser]=useState([]);
  
  useEffect(()=>{
 
   fetch('https://dummyjson.com/users')
   .then(res => res.json())
   .then( data=>{
     setuser([...data.users]); 
    })
 },[])
   return (
    <div  className='flex items-center justify-center flex-wrap'>
    {
     user.map((v,i)=>{

return(
    <div className={` ${style.shadows} flex flex-col m-3 rounded-lg `}>
      <img src={v.image} alt=""  className=' w-[200px]'/>
    <div className='flex flex-col mx-2 my-2'>
<a>{v.firstName}  </a> 
<div className='flex items-center '>
    <img src="" alt="" className='h-4 w-4' /> 
    <Title name="Mutual Friends"></Title>
</div>
<button className='px-2 my-2 py-1 bg-blue-500 rounded-lg text-white'>Confirm</button>
<button className='px-2 mb-2 py-1 bg-gray-300 text-black rounded-lg'>Delete</button>
    </div>
    </div>


)
     })
    }

    </div>
  )
}

export default Cards
