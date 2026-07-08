import { apiConnector } from "../apiconnector"
import { studentEndpoints } from "../apis"

export const buyCourse = async (token, courses, user, navigate, dispatch) => {
  try {
    // Minimal implementation: call payment API and navigate on success
    const response = await apiConnector(
      "POST",
      studentEndpoints.COURSE_PAYMENT_API,
      { courses },
      { Authorization: `Bearer ${token}` }
    )

    if (response?.data?.success) {
      // navigate to a success page or update UI
      navigate("/dashboard/payment-success")
    }
  } catch (error) {
    console.error("buyCourse failed", error)
    // handle error (toast or dispatch) as needed
  }
}
