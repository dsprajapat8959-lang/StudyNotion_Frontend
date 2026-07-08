import toast from "react-hot-toast"
import { apiConnector } from "../apiconnector"
import { profileEndpoints, endpoints } from "../apis"

export function deleteProfile({ token, navigate }) {
    const toastId = toast.loading("Loading...")
    return async(dispatch) => {
        try {
            await apiConnector("DELETE", profileEndpoints.DELETE_PROFILE_API, null, { Authorization: `Bearer ${token}` });
            toast.dismiss(toastId);
            toast.success("Profile deleted successfully", { id: toastId });
            navigate("/");
        } catch (error) {
            toast.dismiss(toastId);
            toast.error("Failed to delete profile", { id: toastId });
        }
    };
}

export function updateProfile({token,data}){
    const toastId = toast.loading("Loading..")
    return async(dispatch) => {
        try {
            await apiConnector("PUT", profileEndpoints.UPDATE_PROFILE_API, data, { Authorization: `Bearer ${token}` });
            toast.dismiss(toastId);
            toast.success("Profile update successful", { id: toastId });
            // navigation should be handled by caller if needed
        } catch (error) {
            toast.dismiss(toastId);
            toast.error("Failed to update profile", { id: toastId });
        }
    }
}

export function changePassword({token, data}){
    const toastId = toast.loading("Loading..");
    return async(dispatch) => {
        try {
            await apiConnector("PUT", endpoints.CHANGE_PASSWORD_API, data, { Authorization: `Bearer ${token}` });
            toast.dismiss(toastId);
            toast.success("Password changed successfully", { id: toastId });
        } catch (error) {
            toast.dismiss(toastId);
            toast.error("Failed to change password", { id: toastId });
        }
    }}