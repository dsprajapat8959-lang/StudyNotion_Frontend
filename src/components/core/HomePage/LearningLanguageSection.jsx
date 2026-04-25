import React from 'react'
import HightlightText from './HightlightText'

import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CtaButton from './Button'


const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
        <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5'>
            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <HightlightText text={"learning any language"}/>
            </div>
            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[78%] '>
                Using spin taking learning multiple languages easy with 20+ languages realistice voice-over,
                progress tracking, custot schedule and more.
            </div>

            <div className='flex flex-row items-center justify-center mt-5'>
                <img src={know_your_progress}
                className='object-contain -mr-32'/>
                <img src={compare_with_others}
                className='object-contain -mr-32'/>
                <img src={plan_your_lessons}
                className='object-contain -mr-32'/>
            </div >
            <div className='w-fit mx-auto'>
                 <CtaButton active={true} linkto={"/signup"} >
                    <div>
                        Learn more
                    </div>
                </CtaButton>
            </div>
               
            <div>
               
            </div>
        </div>
      
    </div>
    </div>
    
  )
}

export default LearningLanguageSection
