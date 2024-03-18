import React from 'react'

function ShowComments(props) {
   // for js date module
  const currentDate = new Date();

// disstructur in new arr
let [...arr]=props.arr;
  return (
    <div>
        {arr.map((e,i)=>{
  
return (
      arr.lenght!=0?
      <div key={i++} className='flex flex-col mx-3 my-2 '>
      <div   className='flex items-center justify-between '>
      <div style={{display:'flex',flexDirection:'column', color:'black', border:'black'}} className='border-[.05px] ml-5 bg-slate-300 rounded-lg p-2 '  >
<a>{e.name}</a>
<a>{e.inputdata}</a>
</div>
</div>
<div className='flex items-center justify-between '>

<div className='flex items-center '>
  <a className='ml-5 mr-3'>{currentDate.getDate()}</a>
  <a >like</a>
  <a  className='mx-3'>Reply</a>
  </div>
</div>
</div>
:null
     
)  })
}

 
    </div>
  )
}

export default ShowComments
