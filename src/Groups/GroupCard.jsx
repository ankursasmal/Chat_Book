import React from 'react'
import Title from '../components/Title'

import style from '../Style/Cards.module.css'

function GroupCard() {
  return (
    <div className={` ${style.shadows} flex flex-col  m-3 rounded-lg `}>
    <img src="https://media.licdn.com/dms/image/D4D03AQHUsR6wSFHSTA/profile-displayphoto-shrink_200_200/0/1679241006988?e=2147483647&v=beta&t=3t0t05OSCsynqbifgP6lMe-oq2Kv6AtkaFHT2zZJO7o" alt=""   style={{ width:'300px !important ',}}/>
  <div className='flex flex-col   w-[300px]  my-2'>
<Title className="md:text-[2vw] text-[3vw] font-bold" name="api name"/>
<div className='flex p-1  flex-nowrap '>
  <img src="" alt="" className='h-4 w-4' /> 
  <Title className="self-start" name="(num) Member.posts"></Title>
</div>
<button className='px-2 my-2 mx-1 py-1 bg-blue-500 rounded-lg text-white'>Join Group</button>
  </div>
  </div>
  )
}

export default GroupCard
