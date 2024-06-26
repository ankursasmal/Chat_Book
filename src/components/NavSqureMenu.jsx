import React from 'react'
import NavSqureItems from './NavSqureItems'
 
import style from '../Style/Cards.module.css'
import NavCreate from './NavCreate';

function NavSqureMenu() {
  return (
   <div div className="lg:block hidden"> 
    <div className={`${style.shadows}   flex flex-col p-2  border-1px bg-white border-black fixed  lg:top-[89px] sm:top-[10vw] md:top-[85px] right-[4vw]  `}>
    <div className='text-[2.6vw] md:text-[2vw] font-bold'>Saved</div>
    <div className={ `flex justify-start px-[1.5vw] py-[8px] flex-nowrap `}>
       <div className={`${style.shadows} `}> 

 <NavSqureItems/>
</div>
 
<NavCreate/>
 
</div>
</div>
</div>
  )
}

export default NavSqureMenu
