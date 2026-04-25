import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HightlightText from './HightlightText'
import Button from './Button'
import { FaArrowRight } from 'react-icons/fa'
const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>
        
        <div className='w-[50%]'>
            <img 
            src={Instructor}
            className='shadow-white'
            />
        </div>

        <div className='w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semibold'>
                Become an
                <br />
                <HightlightText text={"Instructor"}/>
            </div>

            <p className='font-medium text-[16px] w-[90%] text-richblack-300'>
                Instuctors from around the world teach millions of studnets on StudyNotion. We provide the tools
                and skills to teach what you love.
            </p>
            <div className='w-fit'>
                <Button active={true} linkto={"/signup"}>
                <div className='flex flex-row gap-2 '>
                    Start Learning Today
                    <FaArrowRight/>
                     
                </div>
            </Button>
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default InstructorSection
