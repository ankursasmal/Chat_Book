import React from 'react'
import Slider from './Slider'
 
import SliderStart from './SliderStart'
import style from './SliderMain.module.css'
import Slider1 from './Slider1'
function SliderMain() {
  return (
    <div  >
      <div  className={`flex mt-[87px] md:mt-2 ${style.hideslider}   overflow-x-auto ! importent     bg-[#F2F3F5] `}>
        <SliderStart />
        <Slider1/>
 <Slider/> 
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>
<Slider/>

      </div>
    </div>
  )
}

export default SliderMain
