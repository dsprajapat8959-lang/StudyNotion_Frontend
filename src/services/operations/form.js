import toast from "react-hot-toast"
import { apiConnector } from "../apiconnector";
import { contactusEndpoints } from "../apis";


export function contactUs(firstName,lastName,phoneNo, email, message, code){
    const toastId = toast.loading("Response Sending");
    return async(dispatch) => {
        try {
            console.log(firstName);
           const response = await apiConnector("POST", contactusEndpoints.CONTACT_API, {firstName,lastName,phoneNo, email, message, code});
          
           if(!response.data.success){
            throw new Error(response.data.message);
            toast.dismiss(toastId);
           }
           toast.dismiss(toastId);
           toast.success("Response submitted successfully");

        } catch (error) {
            console.log(error);
            toast.dismiss(toastId);
            toast.error("Failed to submit response");
            
            
        }

    }
}