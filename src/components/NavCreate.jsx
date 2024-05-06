import React from 'react'
import { FaPenToSquare ,FaBagShopping} from "react-icons/fa6";
import { IoMdBook } from "react-icons/io";
import { MdShopTwo,MdStarBorder,MdEventAvailable,MdGroups2 } from "react-icons/md";
import { IoFlagOutline } from "react-icons/io5";
import { AiOutlineSound } from "react-icons/ai";
import style from '../Style/Cards.module.css'

function NavCreate() {
  return (
    <div className={`${style.shadows} flex flex-col p-2 w-[250px] md:w-[300px] border-1px bg-white border-black  ml-3      overflow-y-auto  `}>
   <a className='text-[2.6vw] md:text-[2vw] font-bold my-3'>Create</a>   
<div className='flex items-center '>
    <FaPenToSquare className="mr-3"/>
    <a>Post</a>
</div>
<div className='flex items-center my-3'>
    <IoMdBook className="mr-3"/>
    <a>Story</a>
</div>
<div className='flex items-center '>
    <MdShopTwo className="mr-3"/>
    <a>Reals</a>
</div>
<div className='flex items-center my-3 '>
    <MdStarBorder className="mr-3"/>
    <a>Life Events</a>
</div>

<hr/>
<div className='flex items-center mt-3 '>
    <AiOutlineSound className="mr-3"/>
    <a>Ads</a>
</div>
<div className='flex items-center my-3 '>
    <MdGroups2 className="mr-3"/>
    <a>Groups</a>
</div>
<div className='flex items-center '>
    <MdEventAvailable className="mr-3"/>
    <a>Events</a>
</div>
<div className='flex items-center my-3'>
    <FaBagShopping className="mr-3"/>
    <a>MarketPlace List</a>
</div>

</div>

  )
}

export default NavCreate
