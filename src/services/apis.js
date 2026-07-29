const BASE_URL = `${process.env.REACT_APP_BASE_URL}/api/v1`;


// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/otp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
  RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
};

// COURSE ENDPOINTS
export const courseEndpoints = {
  CREATE_COURSE_API: BASE_URL + "/course/createCourse",
  INSTRUCTOR_COURSE_API: BASE_URL + "/course/myCourse",
  GET_ALL_COURSE_API: BASE_URL + "/course/getAllCourse",
  COURSE_DETAILS_API: BASE_URL + "/course/getCourseDetail",
  PUBLISH_COURSE_API: BASE_URL + "/course/publishCourse",
  DELETE_COURSE_API: BASE_URL + "/course/deleteCourse",

  CREATE_SECTION_API: BASE_URL + "/course/createSection",
  UPDATE_SECTION_API: BASE_URL + "/course/updateSection",
  DELETE_SECTION_API: BASE_URL + "/course/deleteSection",

  CREATE_SUBSECTION_API: BASE_URL + "/course/createSubSection",
  UPDATE_SUBSECTION_API: BASE_URL + "/course/updateSubSection",
  DELETE_SUBSECTION_API: BASE_URL + "/course/deleteSubSection",
  MARK_LECTURE_COMPLETE_API: BASE_URL + "/course/markLectureComplete",

  CREATE_RATING_API: BASE_URL + "/course/createRating",
  GET_AVERAGE_RATING_API: BASE_URL + "/course/getAverageRating",
  GET_ALL_RATINGS_API: BASE_URL + "/course/getAllRatingAndReview",
};

// CATEGORY ENDPOINTS
export const categoryEndpoints = {
  CREATE_CATEGORY_API: BASE_URL + "/course/createCategory",
  GET_ALL_CATEGORY_API: BASE_URL + "/course/getAllCategory",
  CATEGORY_PAGE_DETAILS_API: BASE_URL + "/course/categoryPageDetails",
};

// PAYMENT ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
};

export const contactusEndpoints = {
  CONTACT_API: BASE_URL + "/contactus",
};
