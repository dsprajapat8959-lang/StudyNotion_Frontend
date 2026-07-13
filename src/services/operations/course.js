import {toast} from 'react-hot-toast'
import { apiConnector } from '../apiconnector';
import { profileEndpoints , courseEndpoints} from '../apis';

export const getAllEnrolledCourse = async({token})=>{
    const toastId = toast.loading("Loading...");


    try {
        const response = await apiConnector("GET", profileEndpoints.GET_USER_ENROLLED_COURSES_API ,null,
            {
                Authorization : `Bearer ${token}`
            }
        )
        toast.dismiss(toastId);
        console.log(response.data.data)
        return response.data.data;
        
    } catch (error) {
        console.log(error.message);
        toast.dismiss(toastId);
        toast.error("Something wents wrong....");
        
    }


}

export const createCourse = async(formData, token)=>{
    const toastId = toast.loading("Loading...");

    try {
        const response = await apiConnector("POST", courseEndpoints.CREATE_COURSE_API , formData,
            {
                Authorization : `Bearer ${token}`
            }
        )
        toast.dismiss(toastId);
        console.log(response.data.data)
        return response.data.data;
        
    } catch (error) {
        console.log(error.message);
        toast.dismiss(toastId);
        toast.error("Something wents wrong....");
        
    }


}