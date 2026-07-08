import toast from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { categoryEndpoints } from "../apis"

export const getAllCategory = async()=>{
    const toastId = toast.loading("Loading...")
    const response = await apiConnector("GET", categoryEndpoints.GET_ALL_CATEGORY_API)
    toast.dismiss(toastId);
    return response.data.data;
}