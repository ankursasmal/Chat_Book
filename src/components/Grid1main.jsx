import React, { useState } from 'react'
import Grid1 from './Grid1';

function Grid1main() {
   
  return (
    // ******* tailwid a none ar kaj ja hidden sai kaj kora none nam hoi na kaj 
    <div       
    className="col-span-3 w-[80%]  overflow-y-scroll hidden lg:block     " style={{height:'100vh'}}>
<Grid1/>
  </div>
  )
}

export default Grid1main
