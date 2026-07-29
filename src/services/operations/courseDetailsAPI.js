import { apiConnector } from "../apiconnector"
import { courseEndpoints } from "../apis"

export const markLectureAsComplete = async (data, token) => {
  try {
    const response = await apiConnector(
      "POST",
      courseEndpoints.MARK_LECTURE_COMPLETE_API,
      data,
      {
        Authorization: `Bearer ${token}`,
      }
    )

    return response?.data
  } catch (error) {
    console.error("markLectureAsComplete failed", error)
    return null
  }
}
