import toast from "react-hot-toast";

const { apiConnector } = require("../apiconnector")
const { courseEndpoints } = require("../apis")


export const getCourseDetail = async({courseId,token}) => {
    try {
        console.log("getcourseDetail", courseId,token);
        const response = await apiConnector("POST",courseEndpoints.COURSE_DETAILS_API,{courseId},{
            Authorization : `Bearer ${token}`
        });
        console.log("Response from getCourseDetail",response);
        if(!response?.data?.success){
             toast.error(response?.data?.message);
            throw new Error("Failed to fetch course data ");
           
        }

        return response?.data?.data;
        
    } catch (error) {
        console.log("Error occured in operation view course api Connector",error)
    }
}

export const createReview = async (courseId, token, reviewData) => {
    try {
        const response = await apiConnector(
            "POST",
            courseEndpoints.CREATE_RATING_API,
            { courseId, ...reviewData },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        if (!response?.data?.success) {
            toast.error(response?.data?.message || "Failed to create review");
            throw new Error("Failed to create review");
        }

        return response.data;
    } catch (error) {
        console.log("Error occured in create review operation", error);
        toast.error(error?.response?.data?.message || "Failed to create review");
        throw error;
    }
};