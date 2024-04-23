import React from 'react'
import { GiPlantsAndAnimals } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import ExploreCards from './ExploreCards';
import { SlHome } from "react-icons/sl";
import { MdPeopleOutline } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { FaShirt } from "react-icons/fa6";
import { PiPersonSimpleRun } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { FaGamepad } from "react-icons/fa";
import { LuBook } from "react-icons/lu";
import { RiCakeLine } from "react-icons/ri";
import { CiHome } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { IoIosColorPalette } from "react-icons/io";
import { TiHeartOutline } from "react-icons/ti";
import { LuFlaskConical } from "react-icons/lu";
import { RiMovie2Line } from "react-icons/ri";
import { MdSportsBasketball } from "react-icons/md";
import { IoCopyOutline } from "react-icons/io5";
import { LuTrain } from "react-icons/lu";
import { TbBrandCraft } from "react-icons/tb";

function Explore() {
  return (
    <div className='h-[100vh]   bg-[#F2F3F5] '>
    <div className='  lg:mt-[85px] sm:mt-[10vw] md:mt-[85px]  flex justify-center flex-col mx-[7vw]  ' >
 <div className='flex items-center justify-between my-3 '>
<a className='text-3xl font-semibold'>Interests</a>
<a></a>
 </div>
 <div className='my-3 flex items-center flex-wrap '>
    
    <ExploreCards text={" Animals & Pets"} com={<GiPlantsAndAnimals/>}/>

    <ExploreCards text={"Books & Literature"} com={<BsBook/>}/>

<ExploreCards text={" Children & Parenting"} com={<MdPeopleOutline/>}/>
<ExploreCards text={"Education & Learning"} com={<RiVipCrownLine/>}/>
<ExploreCards text={"Fashion & Style"} com={<FaShirt/>}/>
<ExploreCards text={" Fitness & Workouts"} com={<PiPersonSimpleRun/>}/>
<ExploreCards text={"Food & Drink"} com={<ImSpoonKnife/>}/>
<ExploreCards text={"Games, Puzzles, & Play"} com={<FaGamepad/>}/>
<ExploreCards text={"History & Philosophy"} com={< LuBook/>}/>
<ExploreCards text={"Holidays & Celebrations"} com={<RiCakeLine/>}/>
<ExploreCards text={"Home & Garden"} com={<CiHome/>}/>
<ExploreCards text={"Music & Audio"} com={<CiMusicNote1/>}/>
<ExploreCards text={"Performing Arts"} com={<IoIosColorPalette/>}/>
<ExploreCards text={"Relationships, Friends, & Family"} com={<TiHeartOutline/>}/>

<ExploreCards text={"Science & Tech"} com={<LuFlaskConical/>}/>
<ExploreCards text={"Sports"} com={<MdSportsBasketball/>}/>
<ExploreCards text={"TV & Movies"} com={<RiMovie2Line/>}/>
<ExploreCards text={"Travel & Leisure Activities"} com={<IoCopyOutline/>}/>
<ExploreCards text={" Vehicles & Transportation"} com={<LuTrain/>}/>
<ExploreCards text={" evisual Arts, Architecture & Crafts"} com={<TbBrandCraft/>}/>

 </div>
  </div>
</div>
  )
}

export default Explore;
export {SlHome}
