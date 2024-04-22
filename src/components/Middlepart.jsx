import React from 'react'
import Reals from './Reals';
 import Allvedio from './Allvedio';
import SliderMain from './SliderMain';
import SearchBar from './SearchBar';
 
function Middlepart() {
  return (
    <div>
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
  )
}

export default Middlepart
