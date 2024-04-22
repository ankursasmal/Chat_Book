import React from 'react'
import RequestCard from './RequestCard'

 
function Suggestion() {
  return (
    
    <div className='h-[100vh]   bg-[#F2F3F5] '>
         <div className='  lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  flex flex-col justify-center rounded-lg' >
<div className='flex items-center my-1 md:my-2 flex-col  mx-1 md:mx-4 '>
<a className ='text-1xl md:text-2xl font-semibold pr-[3px] mb-2 md:pr-2'>Suggestion</a>
<a>People you may know</a>
</div>
<div className=' overflow-y-scroll  flex flex-wrap items-center  justify-center md:px-4 px-[2px]'> 
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>
 <RequestCard text={"Add Friend"} text1={"Remove"}/>

 </div>
  </div>

    </div>
    )
}

export default Suggestion
