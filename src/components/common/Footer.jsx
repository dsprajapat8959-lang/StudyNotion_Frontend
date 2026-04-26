import React from 'react'
import Logo from "../../assets/Logo/Logo-Full-Light.png"
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FooterLink2 } from '../../data/footer-links';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className='w-full h-[728px] min-w-screen bg-[#161D29] pt-3 flex flex-col items-center '>
    <div className=' flex flex-row mt-5'>
      <div className='w-[200px] h-[538px] relative right-12'>
        <div className='flex flex-col space-x-2 gap-2'>
            <img src={Logo} height={32} width={160}/>
            <p className='w-[174.67px] h-[24px] text-richblack-100 font-[600]'>Company</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>About</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Careers</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Affillates</p>
            <div className='flex flex-row h-[30px] w-[100px] justify-evenly'><FaFacebook color='gray'/><AiFillGoogleCircle color='gray'/><AiFillTwitterCircle color='gray'/><FaYoutube color='gray'/></div>
        </div>
      </div>

      <div>
        <div className='flex flex-col space-x-2 gap-2'>
             <p className='w-[174.67px] h-[24px] text-richblack-100 font-[600]'>Resourses</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Articles</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Chart Sheet</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Code Challenges</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Docs</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Projects</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Videos</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Workspaces</p>
        </div>
        
        <div className='flex flex-col space-x-2 gap-2 mt-5'>
             <p className='w-[174.67px] h-[24px] text-richblack-100 font-[600]'>Support</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Help Centre</p>
            
        </div>
      </div>
      <div>
        <div className='flex flex-col space-x-2 gap-2'>
             <p className='w-[174.67px] h-[24px] text-richblack-100 font-[600]'>Plans</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Paid memberships</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>For students</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Business solutions</p>
        </div>
        <div className='flex flex-col space-x-2 gap-2 mt-5'>
             <p className='w-[174.67px] h-[24px] text-richblack-100 font-[600]'>Community</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>Forums</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'> Chapters</p>
            <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'> Events</p>
            </div>
                
      </div>
      <div className='h-[538px] bg-richblack-700 w-1'></div>
      <div className='flex flex-row ml-5 '>
  
        {
        FooterLink2.map((obj,index)=> (
          <div key={index} className='flex flex-col space-x-2 gap-2 '>
             <p className='w-[174.67px] h-[24px] text-richblack-100 font-[600]'>{obj.title}</p>
             {
             obj.links.map((text,index)=>(
                <Link to={text.link} key={index}>
                    <p className='w-[174.67px] h-[22px] font-[400] text-[14px] text-richblack-400'>{text.title}</p>

                </Link>

             ))
             }
    </div>
        ))
        }
      </div>
    
    </div>
    <div className='h-1 w-[1200px] bg-richblack-700 mt-8'></div>
    <div className='flex justify-between items-center w-full px-4 '>
      <div className='flex flex-row mt-4 ml-12 gap-3 w-cover items-start '>
        <p className='font-[500] text-[14px] text-richblack-300'>Privacy Policy</p>
        <div className='h-[12px] w-[2px] bg-richblack-700 mt-1'></div>
        <p className='font-[500] text-[14px] text-richblack-300'>Cookie Policy</p>
        <div className='h-[12px] w-[2px] bg-richblack-700 mt-1'></div>
        <p className='font-[500] text-[14px] text-richblack-300'>Terms</p>
      </div>
      <div className='font-[500] text-[14px] mr-11 text-richblack-300 mt-4 ml-5' >
        <p>Made with ❤️ Durgesh @ 2026 StudyNotion</p>
      </div>
    </div>
    </div>
  )
}

export default Footer
