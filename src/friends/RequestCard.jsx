import React, { useEffect, useState } from 'react'
import FriendCard from '../components/FriendCard'
import style from '../Style/RequestCard.module.css'

function RequestCard({text,text1}) {
  let [user,setuser]=useState([]);
 useEffect(()=>{

  fetch('https://dummyjson.com/users')
  .then(res => res.json())
  .then( data=>{
    setuser([...data.users]); 
     console.log(user[0]);
  })
},[])

  return (
    <div className='flex items-center flex-wrap justify-center' >
      {
       user.map((v,i)=>{

return(
 <div className={`${style.shadows} flex flex-col m-2 w-[200px] md:w-[300px] p-1  rounded-lg`}>
<div className=' flex items-center justify-between  '>
    <div className='flex items-center'> 
     <img className='border rounded-full w-[40px] h-[40px] mr-4'  src={v.image} alt=""   />
<div className='flex flex-col pl-2 '>
<a>{v.firstName} {" " }{v.lastName}</a>
<a>{v.age}</a>
</div>
</div>
<a>hours</a>
</div>
<FriendCard text={text} text1={text1}/>
</div>
)
      }) 
    }
</div>

    )
}

export default RequestCard
