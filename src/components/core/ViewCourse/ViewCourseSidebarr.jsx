import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCourseDetail } from '../../../services/operations/viewCourse';
import Loader from '../../common/Loader';
import ReviewModal from './ReviewModal';
import {
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
  updateCompletedLectures,
} from '../../../slices/viewCourseSlice';

const ViewCourseSidebarr = () => {
  const { courseId, sectionId, subSectionId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(false);
  const viewCourseState = useSelector((state) => state.viewCourse || {});
  const { completedLectures = [], totalNoOfLectures = 0 } = viewCourseState;
  const { token } = useSelector((state) => state.auth || {});

  const [reviewModal, setReviewModal] = useState(false);

  useEffect(() => {
    const getCourse = async () => {
      if (!courseId || !token) return;

      setLoading(true);
      try {
        const response = await getCourseDetail({ courseId, token });

        if (response) {
          setCourse(response);
          dispatch(setEntireCourseData(response));
          dispatch(setCourseSectionData(response.courseContent || []));

          const total = (response.courseContent || []).reduce(
            (sum, section) => sum + (section.subSection?.length || 0),
            0
          );

          dispatch(setTotalNoOfLectures(total));
        }
      } catch (error) {
        console.error('Failed to fetch course details', error);
      } finally {
        setLoading(false);
      }
    };

    getCourse();
  }, [courseId, token, dispatch]);

  const handleLectureClick = (targetSectionId, targetSubSectionId) => {
    navigate(`/course/${courseId}/section/${targetSectionId}/subsection/${targetSubSectionId}`);
  };

  const handleLectureComplete = (targetSubSectionId) => {
    const completedList = Array.isArray(completedLectures) ? completedLectures : [];

    if (!completedList.includes(targetSubSectionId)) {
      dispatch(updateCompletedLectures(targetSubSectionId));
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <aside className="min-h-screen w-full max-w-[340px] border-r border-richblack-700 bg-richblack-900 px-5 py-6 text-richblack-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="mb-6 flex items-center justify-between gap-3">
        <button
          onClick={() => navigate('/dashboard/enrolled-courses')}
          className="rounded-md border border-richblack-700 bg-richblack-800 px-3 py-2 text-sm font-medium text-richblack-300 transition hover:border-yellow-50 hover:text-yellow-50"
        >
          ← Back
        </button>
        <button className="rounded-md bg-yellow-50 px-3 py-2 text-sm font-semibold text-richblack-900 transition hover:bg-yellow-100"
        onClick={() => setReviewModal(true)}>
          + Add review
        </button>
      </div>

      <div className="mb-6 rounded-xl border border-richblack-700 bg-richblack-800/80 p-4">
        <h2 className="text-lg font-semibold text-richblack-5">{course?.courseName || 'Course content'}</h2>
        <p className="mt-2 text-sm text-richblack-300">
          Progress: <span className="font-semibold text-yellow-50">{completedLectures.length}</span> / {totalNoOfLectures} lectures
        </p>
      </div>

      <div className="space-y-3">
        {(course?.courseContent || []).map((section) => (
          <details
            key={section._id}
            className="rounded-lg border border-richblack-700 bg-richblack-800/70 p-3"
            open={section._id === sectionId}
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-richblack-5">
              {section.sectionName || section.name}
            </summary>

            <div className="mt-3 space-y-2">
              {(section.subSection || []).map((subSection) => {
                const isActive = subSection._id === subSectionId;

                return (
                  <button
                    key={subSection._id}
                    onClick={() => {
                      handleLectureComplete(subSection._id);
                      handleLectureClick(section._id, subSection._id);
                    }}
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm transition ${
                      isActive
                        ? 'bg-yellow-50 text-richblack-900'
                        : 'bg-richblack-700/70 text-richblack-300 hover:bg-richblack-700 hover:text-richblack-5'
                    }`}
                  >
                    <span>{subSection.title || subSection.name}</span>
                    <span className="text-xs opacity-80">▶</span>
                  </button>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    {reviewModal && (<ReviewModal courseId={courseId} onClose={() => setReviewModal(false)} />)}
    </aside>

  );
};

export default ViewCourseSidebarr;
