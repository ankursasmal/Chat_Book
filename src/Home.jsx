import React from 'react'
import Reals from './components/Reals';
 import Allvedio from './components/Allvedio';
import SliderMain from './components/SliderMain';
import SearchBar from './components/SearchBar';
import Comment from './components/Comment';
import Grid1main from './components/Grid1main';
import Grid2main from './components/Grid2main';

function Home() {
  return (
       <div className="grid grid-cols-12 gap-2 mt-[85px]  justify-center  bg-[#F2F3F5]">
  <Grid1main/> 
  <div class="col-span-12 sm:col-span-8 lg:col-span-6 lg:mt-0  overflow-y-scroll  flex flex-col  justify-center md:px-4 px-[2px]"  style={{Height:'100vw'}}>
{/* 3th */}
{/* card */}
<SliderMain  />
{/* secarchbar */}
 <SearchBar/>
 {/* 5th */}
<Allvedio/>
 {/* slider reals */}
 <Reals/>
    </div>
  
  <Grid2main/>


   
    </div>
  )
}

export default Home
