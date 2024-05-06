import React, { useEffect, useState } from 'react'

function AllMarketThing() {
let [product,setproduct]=useState([]);
useEffect(()=>{
    fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    setproduct(data.products);
    console.log(data.products)
}).catch(e=>{
    console.log(e);
})
            
})
  return (

      <div className='   bg-[#F2F3F5]  flex flex-col ml-2vw  lg:mt-[87px] sm:mt-[11vw] md:mt-[87px] '>
        <a className='text-[3.2vw] md:text-[2.3vw] font-semibold mt-3' >Today's Pick</a>
    <div className='    flex items-center justify-center flex-wrap  ' >
        {product.map((e,i)=>{
            return(
<div key={i} className='flex flex-col w-50 h-[330px] md:h-[430] m-5 border-[.5px] p-[3px] rounded-lg border-black '>
    <img src={e.images[0]} alt=""  className='w-[200px]'/>
<a className='pt-3'>{e.title}</a>
<a className='pl-2 py-2'>price: {" "}{e.price}</a>
<a>rating:{" "}{e.rating}</a>
<a className='py-2'>category:{" "}{e.category}</a>
</div>
            )
         })}
 </div>
    </div>
  )
}

export default AllMarketThing
