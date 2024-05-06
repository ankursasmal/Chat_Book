import React, { createContext, useEffect, useRef, useState } from 'react'
 import { IoEarthSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
 import { AiOutlineLike } from "react-icons/ai";
import { LuMessageCircle } from "react-icons/lu";
import { IoIosShareAlt } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Comment from '../components/Comment';
  
//***1. channel id wise all vedio only channelId alada channel wise hoba 
const url1='https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAxTE23s4UXmVX2XYfi1dZbNx1pJxrsj2s&channelId=UCwfaAHy4zQUb2APNOGXUCCA&part=snippet,id&order=date&maxResults=3' ;
//***2.  most popular vedio link below only key is my from-> console.google.com
  let url2='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyD9k1boQl04rNgL3zHK6dVwrBNMN_rFOxc&maxResults=2';
    
 
  function VedioSearch({vedioId}) {
    console.log(vedioId);
 //**3 search url */
  // const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${vedioId}&key=AIzaSyCuQrip2LNCteALTv7_BLsrykbuawoIBMk`;

   let [commentbar,setcommentbar]=useState(true);
  let [values,setval]=useState([]);
  let refinput=useRef(null);
let reflike=useRef(null);
  let len=values.length;
  let [showcomment,setShowcomment]=useState([false,false]);
   
  // commentaction for hide and show comment bar
let commentaction=(i)=>{
    showcomment.filter((a,id)=>{
       if(commentbar){
    if(i===id){
     setcommentbar(false);
 
    }
  }
  else{
    if(i===id){

    setcommentbar(true);

     }
  }
    
  })
  
   
  }

  // like handel
   
    

 //  use effect under api handel ,[] dependency nothing means only one time exiquit 
useEffect(()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${vedioId}&key=AIzaSyAa6ZYHs9CZx3AEwZiqmoOjRqei5Gt3sFY`).then(res=>res.json()).then(data=>{ 
           let {items}=data;
          //  value arr under arr elemet transper
            setval(items);
         
    })
  
},[]);
 

  return (
    <div className='lg:mt-[85px] sm:mt-[10vw] md:mt-[85px] '>
   {/* for ifream disply   media  src="https://www.youtube.com/embed/as it is only add (vedioId)" */}
 {values.map((e,i) => {
  return (
    <div key={i} className='flex flex-col my-5  py-2'>
    <div className='flex p-3 justify-between items-center'>
    <div className='flex items-center '>
      <img className='border rounded-full md:w-[70px] md:h-[70px] w-[50px] h-50px ' src={`${e.snippet.thumbnails.default.url}`} alt=""   />
    <div className='flex ml-4 flex-col justify-evenly'>
      <div className='flex items-center md:text-3xl text-1xl'> 
      <h3 className='pr-1 text-blue-500 namefont md:text-[14px] text-[10px] '>{e.snippet.channelTitle} .</h3>
      <a className='text-blue-500 namefont md:text-[14px] text-[10px] '> Follow</a>
      </div>
      <div className='flex items-center '> 
      <a className='pr-.5px text-black md:text-[12px] text-[10px]'>{e.snippet.publishedAt}.</a>
      <IoEarthSharp className='pl-1 md:text-2xl text-1xl'/>
     </div>
    </div>
    
    </div>
    <div className='flex items-center '>
    
     <BsThreeDots className='md:text-3xl text-1xl  pl-1 mx-1' />
    
     <RxCross1 className='md:text-2xl text-1xl pl-1 mr-1'/>
    
    </div>
    
    </div>
    {/* vedio section */}
                <div className='mt-1 '>

   <iframe key={i} className='h-[200px] w-[100%]   lg:h-[700px] w-[100%] md:w-[100%] h-[500px]  object-cover' src={`https://www.youtube.com/embed/${e.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>  
   
       </div>  
        
    
<hr className='my-3'/>

<div className='py-2 px-2 flex justify-between items-center text-2xl md:text-3xl'>
  
  {/* like buttton click */}

   <button     className='flex items-center justify-center mr-.5 rounded-full bg-slate-200 p-5 w-[30%]'   onClick={()=>{reflike.current.style.backgroundColor='blue'}}>
  <AiOutlineLike ref={reflike}/>
  <a ref={reflike}>Like</a>
  </button>
    
   <button className='flex items-center justify-center mr-.5 rounded-full bg-slate-200 p-5  w-[30%]  ' onClick={()=>{  commentaction(i)}}>
  <LuMessageCircle />
  <a className='text-[23px] sm:text-[17px]' id='com1'>Commments</a>
  </button> 
  <button className='flex items-center justify-center mr-.5 rounded-full bg-slate-200 p-5  w-[30%]'>
  <IoIosShareAlt />
  <a className='sm:text-[17px]'>share</a>

  </button>

</div>
 <hr className='my-3'/>

{/* comment section */}
  {commentbar && e.id==e.id ?<div style={{display:'none',visibility:'hidden'}}> 
 <Comment ref={refinput} key={e.id} name={e.snippet.channelTitle}/>
</div>:
<div style={{display:'block',visibility:'visible'}}> 
 <Comment ref={refinput} key={e.id} name={e.snippet.channelTitle}/>
</div>
 }


 {/* {commentbar?<Comment style={{display:'none',visibility:'hidden'}} name={e.snippet.channelTitle}/>:<Comment style={{display:'block',visibility:'hidden'}}/>} */}

 </div> 
  )
})  
}
 </div>
    )
}

 

export default VedioSearch
