import React from 'react'
import style from '../Style/SaveUi.module.css';

function MarketPlaceCards({text,com}) {
  return (
    <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-3'>
    <a className=' mr-4'>{com}</a>    
    <a  className={`${style.fontsizes}`}>{text}</a>
   </div>
  )
}

export default MarketPlaceCards
