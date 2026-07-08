import React from 'react'

const List = () => {
  return (
    <div className='bg-richblack-800 rounded-md h-[370px] w-[348px] pl-2 mt-24'>
        <h2 className='text-[18px] font-semibold text-richblack-5 py-4'>⚡Course Upload Tips</h2>
        <ul className="list-disc pl-5 text-[12px] text-richblack-5 flex flex-col gap-2">
            <li>Set the Course Price option or make it free.</li>
            <li>Standard size for the course thumbnail is 1024x576.</li>
            <li>Video section controls the course overview video.</li>
            <li>Course Builder is where you create & organize a course.</li>
            <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
            <li>Information from the Additional Data section shows up on the course single page.</li>
            <li>Make Announcements to notify any important</li>
            <li>Notes to all enrolled students at once.</li>
        </ul>
      
    </div>
  )
}

export default List
