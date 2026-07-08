import React from 'react'
import HightlightText from '../components/core/HomePage/HightlightText'
import image1 from "../assets/Images/aboutus1.webp"
import image2 from "../assets/Images/aboutus2.webp"
import image3 from "../assets/Images/aboutus3.webp"
import image4 from "../assets/Images/FoundingStory.png"
import Info from '../components/core/AboutPage/Info'
import Card from '../components/core/AboutPage/Card'
import Form from '../components/core/AboutPage/Form'

import Footer from '../components/common/Footer'


const Aboutus = () => {
  return (
    <div className='text-richblack-5 mx-auto'>
        {/* 1st section */}
      <section className='w-[1440px] h-[618px] bg-richblack-800'>
        <br/>
        <br/>
        <br/>
        <p className='w-[115px] h-[36px] text-richblack-200 text-[16px] text-center mx-auto font-semibold mb-16'>--- About us ---</p>
        <h1 className='font-semibold text-[36px] text-richblack-5 text-center'>Driving Innovation in Online Education for a 
            <br/>
            <HightlightText text={"Brighter future"}/></h1>
        <br/>
        <p className='text-richblack-300 text-[16px] w-[809px] h-[72px] text-center mx-auto'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>    
        <br/>
        <div className='flex flex-row gap-4 h-[311px] w-[1200px] mx-auto'>
            <img src={image1} alt="About us section 1"/>
            <img src={image2} alt="About us section 2"/>
            <img src={image3} alt="About us section 3"/>
        </div>
        <br/>
        <br/>
        <div className='w-[1440px] h-[336px] mx-auto'>
            <div className='text-[36px] font-semibold text-richblack-100 text-center h-[156px] w-[1200px] mx-auto '>"We are passionate about revolutionizing the way we learn. Our innovative platform <HightlightText text={"combines technology"}/>, <span className='text-[#FF512F]'>expertise</span>, and community to create an <span className='text-[#F9D423]'>unparalleled educational experience."</span></div>
        </div>
      </section>

      {/* Section 2 */}
    <section>
        <div className='flex flex-row justify-around pl-10 gap-16 my-24 mt-96'>
            <div className='h-[372px] w-[486px] '>
                <h2 className="font-semibold  text-[36px] text-[#FD1D1D]">Our Founding Story</h2>
                <br/>
                <br/>
                <p className=' text-[16px] text-richblack-300'>
                    Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                </p>
                <br/>
                <p className=' text-[16px] text-richblack-300'>
                    As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                </p>
            </div>
            <img src={image4} alt="Founding story" className='w-[470px] h-[278px] my-auto ' />

        </div>

        <br/>

        <div className='flex flex-row h-[416px] w-[1440px] justify-around'>
            <div className='w-[486px] h-[212px] flex flex-col gap-4'>
                <h2 className='text-[#E65C00] font-semibold text-[36px] '>Our Vision</h2>
                <p className=' text-[16px] text-richblack-300'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>

            </div>
            <div className='w-[486px] h-[212px] flex flex-col gap-4 pr-9'>
                <h2 className='text-[#1FA2FF] font-semibold text-[36px] '>Our Mission</h2>
                <p className=' text-[16px] text-richblack-300'>our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>

            </div>
        </div>
        <Info/>
    </section>

    {/* Section 3 */}
    <section>
        <Card/>
        <div className='w-[600px] mx-auto' >
            <h2 className='text-center text-[36px] font-semibold text-richblack-5 '>Get in Touch</h2>
            <p className=' text-[16px] text-richblack-300 mb-14 text-center'>We’d love to here for you, Please fill out this form.</p>
            <Form/>
        </div>
    </section>


    <Footer/>
    </div>
  )
}

export default Aboutus
