import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

const RequirementField = ({register,getValues,setValue}) => {

  const[req, setReq] = useState([]);
  const[text,setText] = useState("");

  const changeHandler = (e)=>{
    setText(e.target.value);
  }

  const addHandler = ()=>{
    if(text === "") return;
    const updatedReq = [...req,text]
    setReq(updatedReq);
    setValue("requirements", updatedReq);
    setText("")

  }

  const cutHandler = (index)=> {
    
    const arr = [...req]
    arr.splice(index,1);
    setReq(arr);
    setValue("requirements", arr);


  }

  return (
    <div>
      <label htmlFor='requirements'>Requirements/Instructions<sup className='text-pink-200'>*</sup></label>
      <input 
      className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
      placeholder='Enter Benefits of the course'
      id='requirements'
      value={text}
      onChange={changeHandler}
      />
      <br/>
        <span className='font-semibold text-yellow-50 ' onClick={addHandler}>Add</span>
     {
      req.map((inst,index)=>(
        <div key={index} className='flex gap-2'>
          <div className='text-richblack-200 '>{inst}</div>
          <RxCross1 className='mt-1' onClick={()=>{cutHandler(index)}}/>
        </div>
        
      ))
     }
    </div>
  )
}

export default RequirementField
