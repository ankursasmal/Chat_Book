import React, { useRef, useState } from 'react'
import style from '../Style/MemoryHome.module.css'

function Hide_Date() {
    let [hide,sethide]=useState(false);
    let [save,setsave]=useState(true);
    let StartDate=useRef('');
    let EndDate=useRef('');
    let [date,setdate]=useState();
    let [date1,setdate1]=useState();

 
    let handelonClick=()=>{
        if(hide){
            sethide(false);
        }
        else{
            sethide(true);
        }
    }

// use ref depend on other event handler 
// 1 tar ref use ar janno anno event listner under a futionality likta hoba.

    let handelonClickSave=()=>{
        if(save){
            setsave(false);
            setdate(StartDate.current.value);
            setdate1(StartDate.current.value);

         }
        else{
            setsave(true);
            setdate(StartDate.current.value);
            setdate1(StartDate.current.value);

        }
    }

     
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[92px] sm:mt-[12vw] md:mt-[92px]   ' >
<div className={`${style.shadows} flex flex-col justify-center mx-[2vw] md:mx-[10vw] p-1 md:p-2 my-[2vw] md:my-[8vw] `}>
      <a className='font-semibold  text-[3.5vw] md:text-[2.5vw] my-1'>Hide Memories of Dates
    
</a>
  <a className='my-2 text-[2vw] md:text-[1.4vw]'> Tell us if there's a specific date or date range that you'd rather not see in your memories.
    
</a>  
 

{!save ? <div className='flex flex-col'>
<a className='md:text-[1.6vw] text-[2.3vw] my-1.5 font-thin text-blue-400'> Start Date:</a>
<a>{ date}</a>    
<a className='md:text-[1.6vw] text-[2.3vw] mb-1.5 font-thin  text-blue-400'> End Date:</a>
<a>{date1}</a>    
 
</div> :
 !hide?<button className='self-start rounded-lg bg-blue-500 text-white px-[1vw] py-[.5vw] text-[2.5vw] md:text-[1.5vw] ' onClick={handelonClick}>Add New Date</button>
 : <div>
    <div className='flex flex-col'>
<a className='md:text-[1.6vw] text-[2.3vw] my-1.5 font-thin'> Start Date</a>
    <input type="date" ref={StartDate}  className='mb-2 p-1 '     />
    
<a className='md:text-[1.6vw] text-[2.3vw] mb-1.5 font-thin'> End Date</a>
    <input type="date" ref={EndDate} className='p-1'   />
    <div className='my-[1vw] flex items-center justify-between'>
<a> {console.log(EndDate.current.valve)}</a>
<div className='flex items-center justify-between '>
<button className=' rounded-lg bg-gray-300 text-black px-[1vw] py-[.5vw] text-[2.5vw] md:text-[1.5vw] mx-1 md:mx-2 ' onClick={handelonClick}>Cancil</button>

<button className=' rounded-lg bg-blue-500 text-white px-[1vw] py-[.5vw] text-[2.5vw] md:text-[1.5vw] '   onClick={handelonClickSave}>Save</button>
</div>
    </div>
    </div>
    </div>
    } 

  
 
     </div>
    </div>
    </div>
  )
}

export default Hide_Date
