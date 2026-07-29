import React from 'react'
import Data from './Data'
import { useNavigate } from 'react-router-dom';


export default function MyCourses(){
    const navigate = useNavigate();
  return (
    <div className='ml-7 mt-7 w-full mr-8'>
        <div className='mb-6 w-full flex items-center justify-between rounded-lg border border-richblack-700 bg-richblack-800 px-6 py-4 shadow-sm'>
            <div>
                <h1 className='text-2xl font-semibold text-richblack-5'>My Courses</h1>
                <p className='mt-1 text-sm text-richblack-300'>Manage and track your created courses</p>
            </div>
            <button className='rounded-lg bg-yellow-50 px-4 py-2 font-medium text-richblack-900 transition hover:bg-yellow-100' onClick={()=> navigate("/dashboard/add-Course")}>
                Add Courses
            </button>
        </div>
        <Data/>
    </div>
  )
}

