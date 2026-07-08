import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { updateProfile } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

export default function EditProfile() {
  const { user } = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    dateOfBirth: user?.additionalDetails?.dateOfBirth || "",
    gender: user?.additionalDetails?.gender || "",
    contactNumber: user?.additionalDetails?.contactNumber || "",
    about: user?.additionalDetails?.about || "",
  })
  const [errors, setErrors] = useState({})

  const submitProfileForm = async () => {
    // basic validation
    const newErrors = {}
    if (!form.firstName) newErrors.firstName = true
    if (!form.lastName) newErrors.lastName = true
    if (!form.dateOfBirth) newErrors.dateOfBirth = { message: 'Please enter your Date of Birth.' }
    if (!form.contactNumber) newErrors.contactNumber = { message: 'Please enter your Contact Number.' }
    if (!form.about) newErrors.about = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setErrors({})
      await dispatch(updateProfile({ token, data: form }))
      navigate("/dashboard/my-profile")
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.id]: e.target.value }))
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submitProfileForm()
        }}
      >
        <div className="my-10 rounded-[20px] border border-richblack-700 bg-richblack-800 p-8 shadow-[0_20px_60px_rgba(5,8,18,0.5)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-richblack-5">
                Profile Information
              </h2>
              <p className="mt-1 text-sm text-richblack-300">
                Update your name, contact details, and personal information.
              </p>
            </div>
            <div className="hidden md:flex items-center rounded-full bg-richblack-700 px-4 py-2 text-sm text-richblack-200">
              <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Secure profile settings
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-medium text-richblack-200">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.firstName}
                onChange={onChange}
              />
              {errors.firstName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your first name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm font-medium text-richblack-200">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter last name"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.lastName}
                onChange={onChange}
              />
              {errors.lastName && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your last name.
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="dateOfBirth" className="text-sm font-medium text-richblack-200">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.dateOfBirth}
                onChange={onChange}
              />
              {errors.dateOfBirth && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.dateOfBirth.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="gender" className="text-sm font-medium text-richblack-200">
                Gender
              </label>
              <select
                type="text"
                name="gender"
                id="gender"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.gender}
                onChange={onChange}
              >
                {genders.map((ele, i) => (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contactNumber" className="text-sm font-medium text-richblack-200">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.contactNumber}
                onChange={onChange}
              />
              {errors.contactNumber && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  {errors.contactNumber.message}
                </span>
              )}
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="about" className="text-sm font-medium text-richblack-200">
                About
              </label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.about}
                onChange={onChange}
              />
              {errors.about && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your About.
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-end">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile")
            }}
            className="rounded-full border border-richblack-600 bg-richblack-700 px-6 py-3 text-sm font-semibold text-richblack-50 transition hover:bg-richblack-600"
          >
            Cancel
          </button>
          <IconBtn type="submit" text="Save" customClasses="rounded-full px-6 py-3" />
        </div>
      </form>
    </>
  )
}