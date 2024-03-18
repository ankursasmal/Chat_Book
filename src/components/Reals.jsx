import React from 'react'
import { SiYoutubeshorts } from "react-icons/si";
import { BsThreeDots } from "react-icons/bs";
 import Slider from './Slider';
 import style from './Reals.module.css'

function Reals() {
  return (
    <div className='mt-4'>
      <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center '>
        <SiYoutubeshorts className='text-4xl pl-1'/>
<a className='text-[22px] pl-2'>  Reals And Short Vedios</a>
        </div>

        <div className='flex items-center '>
        <a className='text-[22px] pr-4'>Create</a>
        <BsThreeDots  className='pr-1 text-3xl'/>
  
</div>

      </div>
      <div className={`flex mt-2 overflow-x-auto !  ${style.hideslider} importent slider-hidden`}>
      <Slider/> 
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
        </div>
      <h2 style={{alignSelf:'center',margin:'6px 0px'}}>See more</h2>
      </div>
    </div>
  )
}

export default Reals
