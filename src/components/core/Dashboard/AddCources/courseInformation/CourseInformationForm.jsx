import React, { useState, useEffect } from 'react'
import {  useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../../../../services/operations/category';
import ChipInput from './ChipInput';
import RequirementField from './RequirementField';
import { setCourse } from '../../../../../slices/courceSlice';

const CourseInformationForm = () => {
  const dispatch = useDispatch()
  
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    watch,
    formState:{errors},
  }= useForm();

  const {course, editCourse} = useSelector((state)=> state.course);
  const [loading,setLoading] = useState(false);
  const[categories, setCategories] = useState([]);
  const[preview,setPreview] = useState("");
  
  const thumbnail = watch("thumbnail");
  async function getCategories(){
      setLoading(true);
      const result = await getAllCategory();
      console.log("Result",result)
      setCategories(result);
      setLoading(false);
    }
  function onSubmit(data){
    dispatch(setCourse(data));
    console.log(data);
  }
  useEffect(()=>{

    if(editCourse){
      setValue("courseTitle", course.courseName)
      setValue("courseShortDesc", course.courseDescription)
      setValue("coursePrice", course.price)
      setValue("courseTags", course.tag)
      setValue("courseBenefits", course.whatYouWillLearn)
      setValue("courseCategory", course.category)
      setValue("courseRequirements", course.instructions)
      setValue("courseImage", course.thumbnail)
    }

    getCategories();

    if(thumbnail && thumbnail.length>0){
      const file = thumbnail[0]
      const imageUrl = URL.createObjectURL(file);

      setPreview(imageUrl);
    }

  },[thumbnail])
  return (
    <div className='mx-8'>
      <br/>
      <form onSubmit={handleSubmit(onSubmit)} className='w-[665px] h-[1000px] bg-richblack-800 rounded pl-4 text-[14px] text-richblack-5 '>
        <div className='pt-7'>
          <label htmlFor='courseTitle'>Course Title <sup className='text-pink-200'>*</sup></label>
          <input
          id='courseTitle'
          className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
          placeholder='Enter Course Title'
          {...register("courseTitle",{required:true})}
          />
          {
            errors.courseTitle && (
              <span>Course title is missing</span>
            )
          }
        </div>
        <br/>
        <div>
          <label htmlFor='courseShortDesc'>Course Short Description<sup className='text-pink-200'>*</sup></label>
          <textarea
          id='courseShortDesc'
          className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
          placeholder='Enter Description'
          {...register("courseShortDesc",{required:true})}
          
          />
          {errors.courseShortDesc && (
            <span>Enter course Description</span>
          )}
        </div>
          <br/>
        <div>
          <label htmlFor='price'>Price <sup className='text-pink-200'>*</sup></label>
          <br/>
          <input
          id='price'
          className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
          placeholder='Enter Price'
          {...register("price", {required:true, valueAsNumber: true})}
          />
          {errors.price && (
            <span>Enter price</span>
          )}
        </div>
        <br/>
        <div>
          <label htmlFor='category'>Category<sup className='text-pink-200'>*</sup></label>
          <select className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
 
          {...register("category",{required: true})}
          >
            <option disabled  className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
            >Choose a category</option>
            {
              categories.map((obj,index)=>(
                <option className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
                  key={index}>{obj.name} </option>
              ))
            }
          </select>
        </div>
        <br/>

        <ChipInput
        register={register}
        getValues={getValues}
        setValue={setValue}

        />
        <br/>
        <label htmlFor='thumbnail'>Course Thumbnail<sup className='text-pink-200'>*</sup></label>
        <input
        type='file'
        id='thumbnail'
        className='h-[48px] w-[617px] rounded pl-2 bg-richblack-700 text-[16px] text-richblack-200'
        accept='image\*'
        {...register("thumbnail",{required: true})}
        />
        <br/>
        <br/>
         {preview ? (
          <img
            src={preview}
            alt="Thumbnail Preview"
            className="w-64 h-40 mx-auto object-cover"
          />
        ) : (
          <div className="w-64 mx-auto h-40 border border-richblack-500 rounded flex items-center justify-center">
            Drag and drop an image 
          </div>
        )}
        <br/>
        
        <RequirementField
        register={register}
        getValues={getValues}
        setValue={setValue}
        

        />
        <br/>
        <br/>
        <br/>
      <button type='submit' className='bg-yellow-50 font-semibold  text-black rounded px-3 text-xl  w-fit  '>Next -</button>
      </form>
      
    </div>
  )
}

export default CourseInformationForm
