import React from 'react'
import { useSelector } from 'react-redux'
import CourseInformationForm from './courseInformation/CourseInformationForm'


const data = [
    {
        id: 1,
        name: "Course information",
    },
    {
        id: 2,
        name: "Course Builder",
    },
    {
        id: 3,
        name: "Publish",
    },   
]
const RenderSteps = () => {
    const {step} = useSelector((state)=> state.course)
    console.log(step)
  return (
    <div  className=''>
        <div className='flex ml-24 text-3xl w-[665px] '>
        {
        data.map((state,index) => (
            <div key={index} className='flex flex-row'>
            <div
            className={` ${state.id===step?"bg-yellow-900 text-yellow-50 border border-yellow-50":"bg-richblack-600 text-richblack-200 border border-richblack-200"} rounded-full  w-16 text-center   `}
            >
                {state.id}
                </div>
            {index !== data.length -1 && (
               <div className={` ${state.id < step?"text-yellow-50":"text-richblack-600"}`}>--------------------</div>    

            )}    
                </div>
                
        ))
        
        }
        
        
        </div>
        <div className='flex w-[665px] justify-between ml-8'>
        {
            data.map((state,index)=>(
                <div key={index} className='text-richblack-100'>{state.name}</div>
            ))
        }
        </div>

         {step === 1 && <CourseInformationForm />}
        {/* {step === 2 && <CourseBuilderForm />}
        {step === 3 &&  <PublishCourse /> } */}
       
    </div>
  )
}

export default RenderSteps
