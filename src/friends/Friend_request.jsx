import React from 'react'
 import RequestCard from './RequestCard'

function Friend_request() {
  return (
    <div className='h-[100vh] lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]   bg-[#F2F3F5] '>

          <div className='    flex flex-col justify-center' >
<div className='flex items-center my-1 md:my-2 flex-wrap  mx-1 md:mx-4  '>
<a className ='text-1xl md:text-2xl font-semibold pr-[3px] md:pr-2 '>(Numbers of friend)</a>
<a className='font-bold text-1xl md:text-2xl'>Replay</a>
</div>
<div className='   bg-[#F2F3F5]  flex flex-wrap items-center  justify-center md:px-4 px-[2px]  overflow-x-auto'> 
 
      <RequestCard text={"Confirm"} text1={'Delete'}/>
     

 </div>
  </div>

    </div>
  )
}

export default Friend_request
