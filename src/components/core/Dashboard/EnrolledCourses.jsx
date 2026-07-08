import React, { useEffect, useState } from 'react'
import { getAllEnrolledCourse } from '../../../services/operations/course';
import { useSelector } from 'react-redux';
import Loader from '../../common/Loader'
import ProgressBar from "@ramonak/react-progress-bar";

const EnrolledCourses = () => {

  const {token} = useSelector((state) => state.auth);
  const[courses, setCourses] = useState([]);
  
  useEffect(()=>{
    if(!token) return;
    const fetchCourses = async() => {
      try { 
        const response =  await getAllEnrolledCourse(token);
        setCourses(response.courses);
      } catch (error) {
        console.log("Error occured in enrolled courses: --- ",error)
      }
    }
    fetchCourses();
  },[token])

  


  return (
    <div className="w-full text-richblack-5">
  {!courses ? (
    <Loader />
  ) : !courses.length ? (
    <div className="flex h-60 items-center justify-center text-xl text-richblack-300">
      No enrolled courses
    </div>
  ) : (
    <div className="overflow-x-auto rounded-lg border border-richblack-700 bg-richblack-800">


      <div className="grid grid-cols-[3fr_1fr_1fr] items-center bg-richblack-700 px-6 py-4 text-richblack-100 font-semibold">
        <p>Course</p>
        <p className="text-center">Duration</p>
        <p className="text-center">Progress</p>
      </div>

      {courses.map((course, index) => (
        <div
          key={index}
          className="grid grid-cols-[3fr_1fr_1fr] items-center gap-6 border-t border-richblack-700 px-6 py-5"
        >
          <div className="flex gap-5">
            <img
              src={course.thumbnail}
              alt={course.courseName}
              className="h-24 w-40 rounded-lg object-cover"
            />

            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-richblack-5">
                {course.courseName}
              </h2>

              <p className="text-sm text-richblack-300 line-clamp-2">
                {course.courseDescription}
              </p>
            </div>
          </div>

          <div className="text-center text-richblack-100 font-medium">
            {course?.duration || "N/A"}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-center text-sm text-yellow-50">
              {course?.progress || 0}% Completed
            </p>

            <ProgressBar completed={course?.progress || 0} />
          </div>
        </div>
      ))}
    </div>
  )}
</div>
  )
}

export default EnrolledCourses
