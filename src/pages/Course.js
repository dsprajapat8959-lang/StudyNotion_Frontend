import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserGraduate } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { buyCourse } from "../services/operations/studentFeatureApi";

const Course = () => {
  const { course } = useSelector((state) => state.course);
  const navigate = useNavigate();
  const {user,token} = useSelector((state)=> state.auth);
  const dispatch = useDispatch();
  const { courseId: routeCourseId } = useParams();
  const courseId = course?._id || routeCourseId;


  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Course Not Found
      </div>
    );
  }

  const clickHandler = ()=>{
    if (!courseId) return;
    buyCourse(token, [courseId], user, navigate, dispatch);
    return;
  }

  return (
    <div className="bg-richblack-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-richblack-100 hover:text-yellow-50 transition-all mb-8"
    >
    <FaArrowLeft />
    <span>Back</span>
  </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={course.thumbnail}
              alt={course.courseName}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold">{course.courseName}</h1>

              <p className="text-richblack-300 mt-4 leading-7">
                {course.courseDescription}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {course.tag.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-50/10 text-yellow-50 px-4 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3">
                  <FaUserGraduate className="text-yellow-50" />
                  <p>{course.studentEnrolled.length} Students Enrolled</p>
                </div>

                <div className="flex items-center gap-3">
                  <IoPricetag className="text-yellow-50" />
                  <p className="text-2xl font-bold text-yellow-50">
                    ₹ {course.price}
                  </p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-yellow-50 text-richblack-900 font-semibold py-4 rounded-lg hover:scale-95 transition-all duration-300"
            onClick={clickHandler}>
              Buy Now
            </button>
          </div>
        </div>

        <div className="mt-16 bg-richblack-800 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">What You'll Learn</h2>

          <p className="text-richblack-200 leading-8">
            {course.whatYouWillLearn}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;