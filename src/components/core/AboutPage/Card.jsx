import React from 'react'
import Button from '../HomePage/Button';
import HightlightText from '../HomePage/HightlightText';
import { Link } from 'react-router-dom';

const Card = () => {
    const LearningGridArray = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "Studynotion partners with more than 275+ leading universities and companies to bring",
  },
];

  return (
    <div className='grid grid-cols-4 grid-rows-2 p-20'>
      {
        LearningGridArray.map((obj,index)=>(
            <div
             key={index}
             
             className={`${obj.order < 0 ? "col-span-2 bg-transparent": ("col-span-1")}
               ${obj.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : obj.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${obj.order === 3 && "xl:col-start-2 "}
            
             `}

             >
                {
                    obj.order < 0 && (
                        <div >
                            <h2 className='text-[36px] text-richblack-5 font-semibold'>{obj.heading}</h2>
                            <h2 className='text-[36px] font-bold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] bg-clip-text text-transparent'>{obj.highlightText}</h2>
                            <p className='text-richblack-300 text-[16px] pr-32  mb-7'>{obj.description}</p>                 
                            <Link to={"/login"} className='bg-yellow-50 inline-block text-center  w-[137px] h-[48px] pt-3 text-richblack-900 font-bold rounded-md'>Learn More</Link>
                        </div>
                    )
                }
                {
                    obj.order > 0 && (
                        <div className='flex flex-col gap-4 mt-9 mx-9'>
                            <h3 className='font-semibold '>{obj.heading}</h3>
                            <p className='text-richblack-100 text-[14px]'>{obj.description}</p>
                        </div>
                    ) 
                }
            </div>
        ))
      }
    </div>
  )
}

export default Card
