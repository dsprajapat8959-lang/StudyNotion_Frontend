import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setStep } from '../../../../../slices/courceSlice';
import { createSection } from '../../../../../services/operations/course';
import { useSelector } from 'react-redux';
import { setCourse } from '../../../../../slices/courceSlice';
import NestedView from './NestedView';
import { toast } from 'react-hot-toast';


const CourseBuilderForm = () => {
  
  const {token} =  useSelector((state)=>state.auth);
  const{course} = useSelector((state)=> state.course);
  const dispatch = useDispatch()
  const [secName, setSecName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(secName);
    const response = await createSection({sectionName: secName, courseId: course._id}, token);
    dispatch(setCourse(response));
    console.log(response)

  }

  const handleChange = (e) => {
    setSecName(e.target.value);
  }

  const nextHandler = (e) => {
    e.preventDefault();
    console.log("Next button clicked");
    if(course?.courseContent?.length === 0) {
      toast.error("Please add at least one section before proceeding.");
      return;
    }
    dispatch(setStep(3));
  }

  return (
    <>
    <div className="text-white bg-richblack-800 m-6 p-6 rounded-md h-72">
      <h1 className="text-3xl font-bold mb-6">Course Builder</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor='section' className="text-richblack-50">Section Name <sup className="text-pink-200">*</sup></label>
        <br />
        <input type='text' id='section' required onChange={handleChange} className='text-richblack-50 w-full pl-2 h-10 rounded mt-3 bg-richblack-700' placeholder="Enter section name" />
        <br />
        <div>
         <button type="submit" className="mt-16 bg-yellow-50 text-richblack-900 px-4 py-2 rounded ml-2">Create Section</button>
         <button className="mt-16 bg-blue-50 text-richblack-900 px-4 py-2 rounded ml-2 "  onClick={nextHandler}>Next</button>
        </div>
      </form>
         
    </div>
      <NestedView />
    </>
  )
}

export default CourseBuilderForm
