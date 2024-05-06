import React from 'react'
import Cards from './Cards'

function Friends() {
  return (

    <div className='   lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  overflow-y-scroll  flex flex-col  justify-center md:px-4 px-[2px]' >
<div className='flex items-center justify-between mt-4 mx-4'>
<a className='text-2xl font-bold'>Friend Requests</a>
 <a>see all</a>     
    </div>
    <div className='flex flex-wrap justify-center mt-4'>
        <Cards/>
        

    </div>
    </div>


  )
}

export default Friends
