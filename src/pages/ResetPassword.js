import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { getResetPasswordToken } from '../services/operations/auth';
import { setLoading } from '../slices/authSlice';
import Loader from '../components/common/Loader';


const ResetPassword = () => {
    const [email,setEmail] = useState('');
    const [emailSend, setEmailSend] = useState(false);
    const dispatch = useDispatch();
    const loading = useSelector(state=> state.auth.loading)
    
  const handlerOnChange = (event) =>{
        setEmail(event.target.value);

    }

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        dispatch(setLoading(true));
        dispatch(getResetPasswordToken(email, setEmailSend))
        
    }

  return (
    <div className='flex flex-col justify-center  w-[508px] h-[448px] mx-auto gap-3' >
      {
        emailSend ? (
        <div>
            {
              loading ? 
              (
               <Loader/> 
              ):(
                <div className='w-[508px] h-[310px] flex flex-col justify-center gap-2'>
                  <h1  className='text-richblack-5 font-semibold text-[30px]'>Check email</h1>
                  <p className='text-richblack-100 text-[18px]'>We have sent the reset email to
                    <br/>
                     {email}</p>
                  <br/>
                  <button className='bg-yellow-50 rounded-md text-richblack-900 text-[16px] h-[48px] w-[444px]' onClick={()=> {setEmail(""); setEmailSend(false)}}>Resend email</button>
                  <Link to={"/login"}>
                    <div className='text-richblack-5 text-[16px] flex flex-row  gap-2 items-center '><FaArrowLeft/> Back to login</div>
                  </Link>
                  
                </div>
              ) 
            }
             </div>)
        : (
            <div >
                <h1 className='text-richblack-5 font-semibold text-[33px]'>Reset your Password</h1>
                <p className='text-richblack-100 text-[18px]'> Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery</p>
                <br/>
                <form onSubmit={handlerOnSubmit}>
                    <label className='w-[444px] h-[76px]'>
                        <p className='text-[14px] text-richblack-5'>Email Address <sup className='text-[#EF476F]'>*</sup></p>
                        
                        <input
                        required
                        type='email'
                        value={email}
                        name='email'
                        onChange={handlerOnChange}
                        className='text-richblack-5 bg-richblack-800 text-[16px] h-[48px] w-[444px] rounded-md'
                        />
                        <br/>
                    </label> 
                    <br/>
                    <button type='submit' className='bg-[#FFD60A] rounded-md text-richblack-900 text-[16px] h-[48px] w-[444px] '>Reset Password</button>
                </form>
                <Link to={"/login"}>
                  <div className='text-richblack-5 text-[16px]  flex flex-row  gap-2 items-center '><FaArrowLeft/> Back to login</div>
                </Link>
            </div>
        )
        
      }
      
    </div>
  )
}

export default ResetPassword
