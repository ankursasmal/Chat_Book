import React from 'react'
import style from '../Style/SaveVedio.module.css'

function SaveVedio() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[90px] sm:mt-[11vw] md:mt-[90px]  ' >
 <div className={`${style.shadows} flex flex-col p-3  w-[100%]`}>
    <a className='ml-3'>video{" "+'>'+" "}saved</a>
<a className='text-2xl font-semibold ml-4 py-4'>Saved Videos</a>
 </div>

  </div>
</div>
  )
}

export default SaveVedio
