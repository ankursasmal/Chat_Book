import React from 'react'
import ContactSection from '../components/ContactSection'
import Comment from '../components/Comment'
import style from '../Style/BirthDay.module.css'

function BirthDay() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className={`    lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  flex flex-col items-center justify-center rounded-lg`} >
        
        {/* recent birth day */}
        <div className={`  ${style.shadows} flex flex-col mt-4 w-[40vw] p-2 rounded-lg`}>
<a className='text-2xl font-semibold'>Recent birthdays
</a>
<ContactSection className="pl-1"/>
<Comment/>
        </div>
        {/* upcoming birthday */}
        <div className={`  ${style.shadows} flex flex-col w-[40vw] p-2 my-4 rounded-lg`}>
<a className='text-2xl font-semibold'>Upcomeing birthdays
</a>
<div className={`   flex items-center justify-between mx-1 md:p-3 p-1 md:mx-4 my-3  w-[40vw] rounded-lg`}>
       <ContactSection/>
<a className='pr-[3vw]'>(age)</a>
   </div>     
   
      </div>

      {/* month wise birthday */}
      <div className={`  ${style.shadows} flex flex-col w-[40vw] p-2 my-4 rounded-lg`}>
      <a className='text-2xl font-semibold'>Upcomeing birthdays</a>
      <a>people those have bithday on tish monty</a>
      <div className='flex items-center flex-wrap'>  
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-red-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-blue-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-grey-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-green-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-yellow-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-red-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-blue-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-grey-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-green-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-yellow-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-red-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-blue-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-grey-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-green-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-yellow-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-red-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-blue-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-grey-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-green-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-yellow-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-red-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-blue-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-grey-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-green-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-yellow-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-red-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-blue-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-grey-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-green-200'/>
<img src="" alt="" className='w-7  h-7  rounded-full m-2 bg-yellow-200'/>

</div>
</div>

 </div>
    </div>
  )
}

export default BirthDay
