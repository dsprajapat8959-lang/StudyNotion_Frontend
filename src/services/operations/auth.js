import { apiConnector } from "../apiconnector"
import {endpoints} from "../apis"
import toast from "react-hot-toast"
import { setLoading, setToken } from "../../slices/authSlice"
import { setProfileLoading} from "../../slices/profileSlice"
import { setUser } from "../../slices/profileSlice"

 
export function getResetPasswordToken(email, setEmailSend){

    return async(dispatch) =>{
        setEmailSend(true);
            
        try {
            const response = await apiConnector("POST", endpoints.RESETPASSTOKEN_API,{email})
            console.log(response.data);
            
            
            if(response.data.success){
                
                toast.success("Email send successfully")
                
                
            }else{
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log("Error occured while sending email: ", error)
            toast.error("Something wents wrong")
            
        }
        dispatch(setLoading(false));
        
        

         
    }
}

export function login(email,password, navigate){
    console.log("Login function called with email: ", email);
    return async(dispatch) =>{
        dispatch(setLoading(true));
        dispatch(setProfileLoading(true));
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", endpoints.LOGIN_API , {email:email, password:password})

            if(!response.data.success){
                throw new Error("Login failed");
            }
            
            toast.success("Login Successfull");

            dispatch(setToken(response.data.token));
            dispatch(setUser(response.data.user));

            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("user", JSON.stringify(response.data.user));
            toast.dismiss(toastId);
            dispatch(setLoading(false))
            dispatch(setProfileLoading(false));
            navigate("/dashboard/my-profile");
            


            console.log("Login response --> ", response.data);
        } catch (error) {
            dispatch(setLoading(false))
            dispatch(setProfileLoading(false));
            toast.dismiss(toastId);
            toast.error("Login Failed");
            console.log("Error occured while login", error.message);
        }
        
    }
    
}

export function signup(firstName,lastName,email,password,confirmPassword,accountType,otp, navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Signing in")
         try {
            const response = await apiConnector("POST", endpoints.SIGNUP_API ,{firstName,lastName,email,password,confirmPassword, otp, accountType} )
            console.log("Signup responsee --> ", response.data);
            if(!response.data.success){
                toast.dismiss(toastId);
                toast.error(response.data.message);
                throw new Error("Signup Failed")
            }
            toast.dismiss(toastId);
            toast.success("Signup successfull")
            navigate("/login");

        } catch (error) {
            console.log("Error in signup", error.message)
            toast.dismiss(toastId);
            toast.error("Signup failed")
        }
        
        
}
    }

export  function sendOtp(email, navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("Sending OTP");
         try {
            const response = await apiConnector("POST", endpoints.SENDOTP_API, {email});
            console.log(response.data) ;

            if(!response.data.success){
                throw new Error("Failed to send OTP")
            }

            console.log("Email send successfully.");
            toast.dismiss(toastId);
            toast.success("Otp send successfully");

            navigate("/verify-email");
        } catch (error) {
            console.log("Error occured in sending otp", error.message)
            toast.dismiss(toastId);
            toast.error(error.message);
        }

       

    }
    
   
}

export function logout(navigate){
        const toastId = toast.loading("Loading...")
    return (dispatch)=>{
            dispatch(setToken(null));
            dispatch(setUser(null));

            localStorage.removeItem("token")
            localStorage.removeItem("user")
            toast.dismiss(toastId);
            navigate("/");

    }
}

export function resetPassword(password,confirmPassword,token,navigate){
   return async(dispatch) =>{
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", endpoints.RESETPASSWORD_API, {password,confirmPassword,token});
            if(!response.data.success){
                throw new Error(response.data.message);
                
            }
            toast.dismiss(toastId)
            toast.success("Password changed successfully")
            navigate("/login");


        } catch (error) {
            console.log(error)
            toast.dismiss(toastId);

            toast.error(error.message);
            
        }
    }
}
   