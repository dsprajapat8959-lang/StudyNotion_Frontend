import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/HomePage/HightlightText';
import CtaButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlock from '../components/core/HomePage/CodeBlock';
import Footer from '../components/common/Footer';
import TimelineSection from '../components/core/HomePage/TimelineSection';
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import Navbar from '../components/common/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar/>

        {/* Section 1 */}
        <div className='relative max-w-maxContent mx-auto flex flex-col w-11/12 items-center text-white justify-between'>
            <Link to={"/signup"}>
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-richblack-900'>
                        <p>Become an Instructor</p>
                        <FaArrowRight/>
                    </div>
                </div>
            </Link>
            

            <div className='text-center text-4xl w- font-semibold mt-7'>
            Empower Your Future with 
            <HighlightText text={"Coding Skills"}/>
            </div>

            <div className='w-[90%] text-center text-lg font-bold mt-4 text-richblack-300'>
             With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>

            <div className='flex flex-row gap-7 mt-8'>
                <CtaButton active={true} linkto={"/signup"}>Learn More</CtaButton>
                <CtaButton>Book a Demo</CtaButton>

            </div>

            <div className='mx-3 my-12 w-[1035px] h-[515px] shadow-[15px_80px_#F5F5F5] '>
                <video
                muted
                loop
                autoPlay
                >
                    <source src={Banner} type='video/mp4'/>
                </video>
            </div>

            {/* CodeSection 1 */}

            <div className='mt-4'>
                <CodeBlock 
                position={"lg:flex-row"}
                heading={
                    <div>
                        Unlock Your
                        <HighlightText text={"coding potential "}/>
                        with our online courses
                    </div>        
                }
                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true
                    }
                }
                ctabtn2={
                    {
                        btnText:"learn more",
                        linkto: "/login",
                        active: false,
                    }
                }
                codeblock={`<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Welcome Page</title>\n  </head>\n  <body>\n    <div class="container">\n      <h1>Welcome to My Website</h1>\n      <p>I am Durgashankar Prajapat.</p>\n    </div>\n  </body>\n</html>`}
                codeColor={"text-yellow-25"}
                backgroundGradiend={true}
                />
            </div>
         <div>
                <CodeBlock
                
                position={"lg:flex-row-reverse"}
                heading={
                    <div>
                        Start 
                        <HighlightText text={"coding potential "}/>
                        coding in seconds
                    </div>        
                }
                subheading={
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true
                    }
                }
                ctabtn2={
                    {
                        btnText:"learn more",
                        linkto: "/login",
                        active: false,
                    }
                }
                codeblock={`<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <title>Welcome Page</title>\n  </head>\n  <body>\n    <div class="container">\n      <h1>Welcome to My Website</h1>\n      <p>I am Durgashankar Prajapat.</p>\n    </div>\n  </body>\n</html>`}
                codeColor={"text-yellow-25"}
                backgroundGradiend={true}
                />
            </div>
            
            <div>
            <ExploreMore/>
         </div>

           
        </div> 
         
        




        {/* Section 2 */}
        <div className='bg-pure-greys-5 text-richblack-700'>

        <div className='homepage_bg h-[333px]'>
        
        <div className='w-11/12 max-w-maxContent flex items-center justify-center gap-5 mx-auto'>
        <div className='h-[250px]'></div>
        <div className='flex flex-row gap-7 text-white mt-52'>
            <CtaButton active={true} linkto={"/signup"}>
            <div className='flex items-center gap-3'>
                Explore Full Catalog
                <FaArrowRight />
            </div>
            </CtaButton>
            <CtaButton active={false} linkto={"/signup"}>
                <div>
                    Learn more
                </div>
            </CtaButton>
        </div>
        </div>
        </div>
             <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7'>
                
                <div className='flex flex-row gap-5 mb-10 mt-[98px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demant"}/>
                    </div>
                     <div className='flex flex-col gap-10 w-[40%] items-start'>
                        <div className='text-[4xl]'> 
                            The modern Study Notion is the dictates its sown terms. Today to be a competitive 
                    specialist requires more than professional skills.
                        </div>
                        <CtaButton active={true} linkto={"/signup"}>Learn more</CtaButton>
                    </div>
                    
                </div>
               
                 <TimelineSection/>
        
                 <LearningLanguageSection/> 
             </div> 

                 
                
        </div>
            




        {/* Section 3 */}
        <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white first-letter:uppercase'>
            <InstructorSection/>

            <h2 className='text-center text-4xl font-semibold mt-10'>review from Other Learners</h2>
        </div>



        {/* Footer */}
    
        <Footer/>
    </div>
  )
}

export default Home
