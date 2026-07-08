import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input';
import { FaClockRotateLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp, signup } from '../services/operations/auth';


const VerifyEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signupData = useSelector((state)=> state.auth.signupData) || {};
    const {firstName,lastName,email,password,confirmPassword,accountType} = signupData;
    const [otp,setOtp] = useState("");
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(signup(firstName,lastName,email,password,confirmPassword,accountType,otp, navigate));
    }
  return (
    
    <div className='flex flex-col h-[370px] w-[508px] gap-1 justify-center  mx-auto '>
    {
      !signupData && (
        <div>
          {navigate("/signup")}
        </div>
      )
    }
      <h1 className='text-richblack-5 text-[30px] font-semibold '>Verify email</h1>
      <p className='text-richblack-100 text-[18px] '>A verification code has been sent to you. Enter the code below</p>
      <br/>
      <form onSubmit={submitHandler}>
        <div >
             <OtpInput
                value={otp}
                containerStyle="w-[440px] flex justify-between"
                onChange={setOtp}
                numInputs={6}
                inputStyle={{
                    width: "60px",
                    height: "60px",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    fontSize: "24px",
                }}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} placeholder='-' className='w-[444px] h-12 border border-gray-500 rounded-md text-center text-xl' />}
            />
        </div>
        <br/>
       
      <button type='submit' className='bg-yellow-50 rounded-md h-[48px] w-[444px] text-[16px] text-richblack-900'>Verify Email</button>
    
      </form>
        
        <div className='flex flex-row justify-between mr-16'>
          <Link to={"/login"} className='flex flex-row items-center gap-1'>
            <FaArrowLeft className='text-richblack-5'/>
            <p className='text-richblack-5 text-[16px] '>Back to login</p>
         </Link>
         <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={()=>{dispatch(sendOtp(email, navigate))}}>
            <FaClockRotateLeft className='text-blue-100 text-[16px]'/>
            <div className='text-[16px] text-blue-100  '>Resent it</div>
         </div>
        </div>
        
      
    </div>
  )
}

export default VerifyEmail
