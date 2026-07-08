import React from 'react'

const Info = () => {
    const info = [{count: "5K", name: "Active Students"},{count: "10+", name: "Mentors"},{count: "200+", name: "Courses"},{count: "50+", name: "Awards"}];
  return (
    <div>
      <div className='flex flex-row justify-around items-center bg-richblack-800 w-[1440px] h-[254px]'>
        {
            info.map((obj, index)=>(
                <div key={index}>
                    <div className='font-bold text-[30px] text-richblack-5'>{obj.count}</div>
                    <div className='font-semibold text-[16px] text-richblack-500'>{obj.name}</div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Info
