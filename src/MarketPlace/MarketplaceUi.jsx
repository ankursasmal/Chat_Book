import React, { useState } from 'react'
import Nav from '../components/Nav'
import style from '../Style/Vedio.module.css'
import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { TbHome } from "react-icons/tb";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiInbox } from "react-icons/fi";
import { IoBagHandle } from "react-icons/io5";
import { MdOutlineSell,MdPets,MdGroups2 } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { GiLargeDress } from "react-icons/gi";
import { MdSell } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import { FaPen } from "react-icons/fa6";
import { FiMusic } from "react-icons/fi";
import { FcSupport } from "react-icons/fc";
import { FaSupple ,FaRunning,FaGamepad} from "react-icons/fa";

 import { MdArrowForwardIos } from "react-icons/md";
import MarketPlaceCards from './MarketPlaceCards';
import NavForRout from '../components/NavForRout';
import { createContext } from 'react';
// import innerText fr
const passItems=createContext();

 function MarketplaceUi() {
    // let [paramsValue,setparamsValue]=useState('');
    // let  {itemsType}=useParams();

//     let passvalue=()=>{
// setparamsValue( );
//     }
    return (
    <div>
        {/* <passItems.Provider value={paramsValue}>  */}
    <NavForRout/>
<div className='grid grid-cols-12 gap-1 '>
  
  {/* column 1 */}
  <div className='col-span-4 md:col-span-3   '  >
  <div div className='h-[100vh bg-white'>
    
 <div className='pl-3 bg-white mt-3 overflow-y-auto h-[100vh] w-[23%] flex flex-col' style={{position:'fixed',top:'76px',left:'0px'}}>
  <div className='flex flex-col    '> 
        <div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3  '>
    <a className={`${style.fontsizes} text-2xl font-semibold`}>MarketPlacess</a>
        <IoSettingsSharp className='text-2xl'  />
 </div>
 
    <div className='flex px-1 py-.5 md:px-2 md:py-1 my-3 items-center border-1px bg-gray-100  rounded-full  md:w-[95%]  w-[100%] '>
      <CiSearch className='text-3xl px-2' />

<input type="text" placeholder='search MarketPlaces' className='w-[92%] p-[1px]  bg-gray-100   outline-none border-none     text-[9px] lg:text-[15px] md:text-[13px]  rounded-full' />
</div>

       <Link to='/market-place'> 
 <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-3'>
      
 
    <TbHome className='mr-4'/>

   <a className={`${style.fontsizes}`}> Browse all</a>
</div>
</Link>
 
    <Link to='/market-place/notification'> 
   <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-3'>
 
    <FaBell className='mr-4'/>

    <a className={`${style.fontsizes}`}> Notifications</a>
</div>
 </Link> 
    
    <Link to="/market-place/Inbox"> 
     <div className='flex items-center sm:mx-0  md:mx-4 lg:mx-4 my-3'>
 
    <FiInbox className='mr-4'/>

    <a className={`${style.fontsizes}`}>Inbox</a>
</div>
 
    </Link>

    <Link to="/vedios/explore"> 
<div className='flex items-center justify-between my-3 sm:mx-0  md:mx-3 lg:mx-3 '>
<div className='flex items-center '>

    <IoBagHandle className='mr-3'/>
    <a className={`${style.fontsizes}`}>  Buying</a>

    </div>
    <MdArrowForwardIos />

    </div>
    
    </Link>

    <Link to="/vedios/savevideo"> 
<div className='flex items-center justify-between  sm:mx-0  md:mx-4 lg:mx-4 my-3'>
    <div className='flex items-center '>

    <MdOutlineSell className='mr-4'/>

    <a className={`${style.fontsizes}`}> Selling</a>
</div>
<MdArrowForwardIos />

    </div>
    
</Link>

<button className='py-[.5px] md:py-2 px-[4vw] items-center self-center rounded-lg text-[1vw] bg-blue-500 text-white my-3'>  +{" "}Create new Collection</button>
<hr className='my-3'/>
<div className='flex items-center justify-start my-3 sm:mx-0  md:mx-3 lg:mx-3  '>
    <a className={`text-[2.4vw]  md:text-[1.7vw] font-semibold`}>Categories</a>
  </div>   
  <Link to="/market-place/Categories/:itemsType">   <MarketPlaceCards text="Vehicles" com={<FaCar/>}    /></Link>   
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Property Rentals" com={<LuHome/>}/>  </Link> 
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Apparel" com={<GiLargeDress/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Classifieds" com={<MdSell/>}/>  </Link> 
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Electronics" com={<FaMobileScreen/>}/>  </Link> 
  <Link to="/market-place/Categories/:itemsType">  <MarketPlaceCards text="Entertainment" com={<BsCameraReelsFill/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Family" com={<GiSelfLove/>}/>   </Link>
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Free Stuff" com={<MdOutlineSell/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Hobbies" com={<FaPen/>}/>  </Link> 
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Home Goods" com={<LuHome/>}/></Link>   
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Home Improvement Supplies" com={<FcSupport/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Musical Instruments" com={<FiMusic/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Office Supplies" com={<FaSupple/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Pet Supplies" com={<MdPets/>}/>  </Link> 
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Sporting Goods" com={<FaRunning/>}/> </Link>  
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Toys & Games" com={<FaGamepad/>}/>  </Link> 
  <Link to="/market-place/Categories/:itemsType"> <MarketPlaceCards text="Buy and sell groups" com={<MdGroups2/>}/> </Link>  
 
   
    
    
     </div>
     

  
</div>
</div>
  </div>
  {/* column 2 */}
  <div className='col-span-8 md:col-span-9 h-[100vh] mt-[82px] md:mt-0  mr-3  bg-[#F2F3F5]  '>
<Outlet/>

</div>
</div>
{/* </passItems.Provider> */}
</div>
  )
}
 
export default MarketplaceUi
export {passItems}