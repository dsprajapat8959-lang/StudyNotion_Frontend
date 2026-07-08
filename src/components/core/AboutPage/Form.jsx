import React, { useState } from 'react'
import countryCode from "../../../data/countrycode.json"
import { useDispatch } from 'react-redux';
import { contactUs } from '../../../services/operations/form';

const Form = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: "",
        message: "",
        code:"",
    });
    const {firstName,lastName,phoneNo, email, message, code} = formData ;

    const changeHandler = (e)=>{
        setFormData((prev)=>(
           { ...prev,
            [e.target.name] : e.target.value,
       } ))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(contactUs(firstName,lastName,phoneNo, email, message, code))

        setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
            code:"",
        })

        console.log(formData);
    }

  return (
    <div className='w-[536px] h-[76] mx-auto mb-10'>
      <form onSubmit={submitHandler}className='flex flex-col gap-3'>
        <div className='flex flex-row gap-5 ' >
            <label>
                <div className='w-[72px] h-[22px] text-[14px] text-richblack-5'>First Name</div>
                <input
                    required
                    name='firstName'
                    value={firstName}
                    onChange={changeHandler}
                    className='w-[258px] h-[48px] rounded-md p-[12px] bg-richblack-800 text-[16px] text-richblack-200'
                    placeholder='Enter first name'
                />
            </label>
            <label>
                <div className='w-[72px] h-[22px] text-[14px] text-richblack-5'>Last Name</div>
                <input
                    required
                    onChange={changeHandler}
                    name='lastName'
                    value={lastName}
                    className='w-[258px] h-[48px] rounded-md p-[12px] bg-richblack-800 text-[16px] text-richblack-200'
                    placeholder='Enter last name'
                />
            </label>

        </div>
        <label>
            <div className='w-[72px] h-[22px] text-[14px] text-richblack-5'>Email Address</div>
            <input
                required
                type='email'
                onChange={changeHandler}
                className='w-[536px] h-[48px] rounded-md p-[12px] bg-richblack-800 text-[16px] text-richblack-200'
                name='email'
                value={email}
                placeholder='Enter email address'
            />
        </label>

        <label >
            <div className='w-[72px] h-[22px] text-[14px] text-richblack-5'>Phone Number</div>
            <div className='flex flex-row gap-5'>
                <select
                    name = "code" 
                    placeholder = "+91"
                    onChange={changeHandler}
                    className='w-[81px] h-[48px] pr-9 rounded-md p-[12px] bg-richblack-800 text-[16px] text-richblack-200 '
                    value={code}
                    required
                
                >
                    {
                        countryCode.map((obj, index)=>(
                            <option key={index}
                                value={obj.code}
                                                        
                            >
                                {obj.code} - {obj.country}
                            </option>
                        ))
                    }
                </select>
                <input
                    type="tel"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={changeHandler}
                    className='w-[435px] h-[48px] rounded-md p-[12px] bg-richblack-800 text-[16px] text-richblack-200'
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit phone number"
                    required
                    />
            </div>
            
        </label>

        <label>
            <div className='w-[72px] h-[22px] text-[14px] text-richblack-5'>Message</div>
            <textarea
            required
            className='text-black'
            value={message}
            name='message'
            className='w-[536px] h-[123px] rounded-md p-[12px] bg-richblack-800 text-[16px] text-richblack-200'
            onChange={changeHandler}
            placeholder="Enter your message..."
            rows={5}
            cols={30}
            maxLength={200}
            />
        </label>
        
        <button type='submit' className='bg-yellow-50 text-richblack-900 w-[536px] h-[48px] rounded-md '>Send Message</button>
         </form>
    </div >
  ) 
}

export default Form
