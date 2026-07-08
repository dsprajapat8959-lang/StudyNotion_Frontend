import React from 'react'
import { IoChatboxEllipses } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import Form from '../components/core/AboutPage/Form';
import Footer from '../components/common/Footer';



const Contactus = () => {
  return (
    <div>
    <div className='flex flex-row justify-evenly'>

      <div className='bg-richblack-800 h-[390px] w-[450px] flex flex-col justify-center rounded-md mt-16 ml-16'>
        <div className='h-[98px] w-[402px] mx-auto'>
          <h2 className='font-semibold text-[18px] text-richblack-5 flex gap-3 items-center'><IoChatboxEllipses/> Chat on us</h2>
          <p className='text-[14px] text-richblack-200 font-[500] pl-7'>Our freindly team is here to help.</p>
          <p className='text-[14px] text-richblack-200 font-[500] pl-7'>@mail addaress</p>
        </div>
        <div className='h-[98px] w-[402px] mx-auto'>
          <h2 className='font-semibold text-[18px] text-richblack-5 flex gap-3 items-center'><FaLocationDot/> Visit us</h2>
          <p className='text-[14px] text-richblack-200 font-[500] pl-7'>Come and say hello at our office HQ.</p>
          <p className='text-[14px] text-richblack-200 font-[500] pl-7'>Here is the location</p>
        </div> 
        <div className='h-[98px] w-[402px] mx-auto'>
          <h2 className='font-semibold text-[18px] text-richblack-5 flex gap-3 items-center'><MdAddCall/> Call us</h2>
          <p className='text-[14px] text-richblack-200 font-[500] pl-7'>Mon - fre from 8am to 5am</p>
          <p className='text-[14px] text-richblack-200 font-[500] pl-7'>+123 456 7890</p>
        </div>

      </div>

      <div className='mt-16 w-[698px] h-[799px] justify-center'>
        <h2 className='font-semibold text-[36px] text-richblack-5 pl-20'>Got a Idea? We've got the skills. </h2>
        <h2 className='font-semibold text-[36px] text-richblack-5 pl-20'>Let's team up</h2>
        <p className='text-richblack-300 text-[16px] pl-20'>Tall us more about youself and what you're got in mind.</p>
        <br/>
        <Form/>
      </div>

      
    </div>
    <Footer/>
    </div>
  )
}

export default Contactus
