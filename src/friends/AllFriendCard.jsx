import React from 'react'
import ContactSection from '../components/ContactSection'
import { BsThreeDots } from "react-icons/bs";
import style from '../Style/AllFriendCard.module.css'

function AllFriendCard() {
  return (
    <div className={` ${style.shadows} flex items-center justify-between mx-1 md:p-3 p-1 md:mx-4 my-3 w-[50vw] md:w-[40vw] rounded-lg`}>
       <ContactSection/>
       <BsThreeDots className='text-[3vw] md:text-[2vw]'/>

   </div>
    
  )
}

export default AllFriendCard
