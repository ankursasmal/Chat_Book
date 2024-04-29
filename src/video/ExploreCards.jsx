import React from 'react'
 function ExploreCards({text,com}) {
   return (
    <div className='flex w-[29vw] p-2 items-center rounded-lg m-2 bg-blue-600'>
     <a className='text-white md:text-2xl'>{com}</a>    
     <a className='text-[1.8vw] ml-2 m font-semibold text-white '>{text}</a>
    </div>
  )
}

export default ExploreCards
