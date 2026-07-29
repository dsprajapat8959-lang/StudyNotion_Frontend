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
    console.log("Formdata and token are",formData," ", token)
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

export const createSection = async (data, token) => {
    const toastId = toast.loading("Loading...")

    try {
        const response = await apiConnector(
            "POST",
            courseEndpoints.CREATE_SECTION_API,
            data,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while creating section.")
    }
}

export const updateSection = async (data, token) => {
    const toastId = toast.loading("Loading...")

    try {
        const response = await apiConnector(
            "PUT",
            courseEndpoints.UPDATE_SECTION_API,
            data,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while updating section.")
    }
}

export const deleteSection = async (data) => {
    const toastId = toast.loading("Loading...")

    try {
        
        const response = await apiConnector(
            "DELETE",
            courseEndpoints.DELETE_SECTION_API,
            data,
            {}
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while deleting section.")
    }
}

export const deleteSubSection = async (data) => {
    const toastId = toast.loading("Loading...")

    try {
        const response = await apiConnector(
            "DELETE",
            courseEndpoints.DELETE_SUBSECTION_API,
            data,
            {}
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while deleting subsection.")
    }
}

export const createSubSection = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(
            "POST",
            courseEndpoints.CREATE_SUBSECTION_API,
            data,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while creating subsection.")
    }
}

export const updateSubSection = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(
            "PUT",
            courseEndpoints.UPDATE_SUBSECTION_API,
            data,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while updating subsection.")
    }
}

export const publishCourse = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(
            "PUT",
            courseEndpoints.PUBLISH_COURSE_API,
            data,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while publishing course.")
    }
}


export const instructorCourse = async() =>{
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("GET",courseEndpoints.INSTRUCTOR_COURSE_API);
        toast.dismiss(toastId)
        return response;
    } catch (error) {
        toast.dismiss(toastId)
        console.log(error);
        
    }

}

export const deleteCourse = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(
            "DELETE",
            courseEndpoints.DELETE_COURSE_API,  
            data,
            {
                Authorization: `Bearer ${token}`,
            },
        )
        toast.dismiss(toastId)
        return response.data.data
    } catch (error) {
        console.log(error.message)
        toast.dismiss(toastId)
        toast.error("Something went wrong while deleting course.")
    }
}