import React, { useEffect } from 'react'
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

const ChipInput = ({setValue,getValues,register}) => {
  const [tags,setTags] = useState([]);
  const [tag,setTag] = useState("");
  const keyHandler =  (e)=>{
    if(e.key == "Enter"){
      e.preventDefault();
      if(e.target.value==="") return;
      const updatedTags = [...tags,e.target.value]
      setTags(updatedTags)
      e.target.value = "";
      setValue("tags",updatedTags);
      
    }
    
  }

  const cutHandler = (index)=>{
    const arr = [...tags];
    arr.splice(index,1);
    setTags(arr);
    setValue("tags",arr);
    

  }
  
  return (
    <div>
      <label htmlFor='tags'>Tags<sup className='text-pink-200'>*</sup></label>
      <br/>
      <input
      className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
      placeholder='Choose a Tag'
      id='tags'
      
      onKeyDown={keyHandler}
     
      
      />
      <div className='flex flex-row gap-2 text-black mt-5'>
       {
          tags.map((tag,index)=>(
          <div key={index} className='flex gap-1 bg-yellow-50 w-fit rounded-full px-2'>
            <span >{tag}</span>
            <RxCross1 onClick={()=>{cutHandler(index)}} className='flex mt-1'/>
          </div>
        ))
                
      }
      </div>
     
    </div>
  )
}

export default ChipInput
