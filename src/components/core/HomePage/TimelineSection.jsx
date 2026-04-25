import React from 'react'

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timeLineImage from "../../../assets/Images/TimelineImage.png"


const timelinge = [
    
    {
        Logo: Logo1,
        heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        heading: "Responsibility",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo3,
        heading: "Flexibility",
        Description: "Fully committed to the success company",
    },
    {
        Logo: Logo4,
        heading: "Solve the problem",
        Description: "Fully committed to the success company",
    },
]

const TimelineSection = () => {
  return (
    <div>
     <div className='flex flex-row gap-15 items-center'>
        <div className='w-[45%] flex flex-col gap-5'>
            {
                timelinge.map((obj, idx)=>(
                    <div className='flex flex-row gap-6 mt-10 ' key={idx}>
                        <div className='w-[50px] h-[50px] bg-white flex items-center justify-center'>
                            <img src={obj.Logo} width={30}/>
                        </div>
                        <div>
                            <h2 className='font-semibold text-[18px]'>{obj.heading}</h2>
                            <p className='text-base'>{obj.Description}</p>
                        </div>
                    </div>
                    
                ))
            }
            

        </div>
        <div className='relative shadow-blue-200'>
        <img src={timeLineImage}
        className='shadow-white object-cover h-fit'/>


             <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 left-[50%] bottom-[0px] translate-x-[-50%] translate-y-[50%]'>
            <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                <p className='text-3xl font-bold'>10</p>
                <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
            </div>
            <div className='flex  gap-5 items-center px-7'>
                <p className='text-3xl font-bold'>250</p>
                <p className='text-caribbeangreen-300 text-sm'>Types of Courses</p>
            </div>
        </div>
            
        
       
        
    </div>

        <div>

        </div>
      
      
    </div>

    

    </div>

  )
}

export default TimelineSection
