import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { publishCourse } from '../../../../../services/operations/course'
import { resetCourseState, setStep } from '../../../../../slices/courceSlice'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const PublishCourse = () => {
  const { course } = useSelector((state) => state.course)
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(checked){
      const result = await publishCourse({ courseId: course._id }, token)
      navigate("/dashboard/my-courses");
      dispatch(resetCourseState());
      return;
    }else{
        toast.error("Please check the box to make the course public.")
        return;
    }
    setLoading(false)
  }
 
  const goBackHandler = (e) => {
    e.preventDefault()
    dispatch(setStep(2))
  }

  return(
    <div className='mx-8 bg-richblack-800 mt-5 p-6 rounded-md text-richblack-5'>
        <h1 className="text-2xl font-bold text-richblack-25">Publish Course</h1>
        <form onSubmit={submitHandler}>
            <label htmlFor="check" className="mt-8" >
                <input type="checkbox" id="check" name="check" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                <span className="text-richblack-25 text-lg"    > Make this course as Public</span>
                <div className='flex gap-4 mt-4'>
                    <button type="button" className="bg-yellow-50 text-richblack-900  w-24 h-10 font-medium text-xl rounded" onClick={goBackHandler}> Back</button>
                    <button type="submit" className="bg-yellow-50 text-richblack-900  w-fit px-3 h-10 font-medium text-xl rounded"> Save Changes</button>
                </div>
                
            </label>
        </form>
    </div>
  )
}

export default PublishCourse;