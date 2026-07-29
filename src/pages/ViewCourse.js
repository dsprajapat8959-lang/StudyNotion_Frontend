import React from 'react';
import { Outlet } from 'react-router-dom';
import ViewCourseSidebarr from '../components/core/ViewCourse/ViewCourseSidebarr';

const ViewCourse = () => {
  return (
    <div className="flex min-h-screen bg-richblack-900 text-richblack-5">
      <ViewCourseSidebarr />
      <div className="flex-1 bg-richblack-900 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default ViewCourse
