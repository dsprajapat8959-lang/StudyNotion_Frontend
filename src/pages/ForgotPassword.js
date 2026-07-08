import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { resetPassword } from '../services/operations/auth';
import { useDispatch } from 'react-redux';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const token = location.pathname.split("/").at(-1);
    console.log(token)

    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(resetPassword(password, confirmPassword,token, navigate));


    }
  return (
    <div className='w-[508px] h-[586px] flex flex-col justify-center mx-auto gap-2 '>
      <h1 className='font-semibold text-[30px] text-richblack-5'>Choose new password</h1>
      <p className='text-[18px] text-richblack-100'>Almost done. Enter your new password and youre all set.</p>
      <br/>

      <form onSubmit={submitHandler}>
        <label>
            <div className='text-[14px] text-richblack-5'>New password<sup className='text-[14px] text-pink-200'>*</sup></div>
            <input 
                required
                type='password'
                name='password'
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                placeholder='Enter new password'
                className='h-[48px] w-[444px] rounded-md bg-richblack-800 text-richblack-200 text-[16px] p-2'
            />
        </label>
        <br/>
        <br/>
        <label>
            <div className='text-[14px] text-richblack-5'>Confirm new password<sup className='text-[14px] text-pink-200'>*</sup></div>
            <input
                required
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e)=>{setConfirmPassword(e.target.value)}}
                placeholder='Confirm password'
                className='h-[48px] w-[444px] rounded-md bg-richblack-800 text-richblack-200  text-[16px] p-2'
            />
        </label>
        <br/>
        <br/>


        <button type='submit' className='bg-yellow-50 text-richblack-900 w-[444px] h-[48px] rounded-md'>Reset Password</button>


      </form>
      <Link to={"/login"} className='flex gap-2 items-center text-[16px] text-richblack-5'>
        <FaArrowLeft/>
        <p>Back to login</p>
      </Link>
    </div>
  )
}

export default ForgotPassword
