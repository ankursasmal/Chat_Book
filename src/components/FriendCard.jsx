import React, { useState } from 'react'

function FriendCard() {
   let [confirm,setconfirm]=useState(true);
   let [confirm1,setconfirm1]=useState(false);

  return (
       <div className='flex items-center justify-between'>
    <a></a>
    
    { confirm && confirm1===false ? <div className='flex items-center  ' > 
<button className='px-4 py-2 bg-blue-600 rounded-md text-white mr-4' onClick={(e)=>{
   e.preventDefault();
   setconfirm(false);
}}>Confirm</button> 
<button className='px-4 py-2 bg-gray-300 rounded-md text-black ' onClick={(e)=>{
   e.preventDefault();
setconfirm1(true);
}}>Delete</button>
</div> :
<button className='px-4 py-2 bg-slate-300 rounded-md text-black mr-4'  >Requested {!confirm?'Accepted':confirm1?'Deleted':null}</button>}

</div>
   )
}

export default FriendCard
