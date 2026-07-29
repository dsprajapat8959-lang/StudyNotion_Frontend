import React, { useEffect, useState } from 'react'
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom'
import { categoryPageDetails, getAllCategory } from '../../../services/operations/category';
import Footer from '../../common/Footer';
import Loader from '../../common/Loader';
import RatingStars from '../../common/RatingStars';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch } from 'react-redux';
import { setCourse } from '../../../slices/courceSlice';

const Catalog = () => {
    const { catalogname: catalogName } = useParams();
    const [categoryId, setCategoryId] = useState("");
    const [categoryDetail, setCategoryDetail] = useState(null);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const catalog = useParams().catalogname;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const fetchID = async () => {

        const response = await getAllCategory();
        const cId = response.filter((category)=>(category.name.toLowerCase() == catalog.toLowerCase()))[0]._id;
        setCategoryId(cId);
    }

    const categoryDetails = async () => {
        setLoading(true);
        if(!categoryId) return;
        const response = await categoryPageDetails({categoryId});
        setCategoryDetail(response?.data?.data);
        setCategory(response?.data?.data.selectedCategory);
        console.log(response?.data?.data);
        setLoading(false);

       
    }

    const clickHandler = (course)=> {
        dispatch(setCourse(course));
        navigate(`/course/${course._id}`);

    }

    useEffect(() => { fetchID(); }, [catalogName]);
    useEffect(() => { categoryDetails();  }, [categoryId]);

    if (loading) return <div className='min-h-[60vh] flex items-center justify-center'><Loader /></div>;

    return (
        <div className='text-richblack-5'>

            {/* SECTION -1 */}
            <div className=' bg-richblack-800 pl-20 pt-14 pb-10'>
                <div className='text-richblack-500'><span>Home  /  </span><span>Catalog  /  </span><span className='text-yellow-100'>{catalog.toLocaleUpperCase()}</span></div>
                <h1 className='font-semibold text-richblack-5 text-[50px]'>{catalog.toUpperCase()}</h1>
                <p className='text-richblack-500 l'>{category?.description}</p>
            </div>

            {/* SECTION - 2 */}
            <div className='pl-20 pt-8'>
                <h2 className='text-richblack-5 font-semibold text-3xl'>Courses to get you started</h2>
                <p className='text-yellow-100 border-b border-yellow-100 w-fit '>Most Popular</p>
                <br/>
               { <Swiper
                
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                  

                    {
                        category?.courses?.map((course) => (
                            <SwiperSlide key={course._id}>
                            <div className=" bg-richblack-800 rounded-md overflow-hidden cursor-pointer border-richblack-700 h-[400px] flex flex-col "
                                onClick={()=>{clickHandler(course)}}
                            >
                                <img
                                src={course?.thumbnail}
                                alt={course?.courseName}
                                className="w-full h-48 object-cover"
                                />

                                <div className="flex flex-col justify-between flex-1 p-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-richblack-5 line-clamp-2">
                                    {course?.courseName}
                                    </h3>

                                    <p className="mt-2 text-sm text-richblack-200 line-clamp-3">
                                    {course?.courseDescription.slice(0,100)+ "..."} 
                                    </p>
                                </div>

                                <div className="mt-4 space-y-2">
                                    <RatingStars />

                                    <p className="text-sm text-richblack-300">
                                    Enrolled Students: {course?.studentEnrolled?.length}
                                    </p>

                                    <p className="text-xl font-bold text-yellow-50">
                                    Rs {course?.price}
                                    </p>
                                </div>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))
                        }
            </Swiper>}
            
            </div> 
            <br/> 
                
            <Footer />
            
        </div>
    )
}

export default Catalog
