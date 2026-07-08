import React, { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { changePassword } from "../../../../services/operations/SettingsAPI"
import IconBtn from "../../../common/IconBtn"

export default function UpdatePassword() {
  const { token } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const [form, setForm] = useState({ oldPassword: "", newPassword: "" })
  const [errors, setErrors] = useState({})

  const submitPasswordForm = async () => {
    const newErrors = {}
    if (!form.oldPassword) newErrors.oldPassword = true
    if (!form.newPassword) newErrors.newPassword = true
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    try {
      setErrors({})
      await changePassword({ token, data: form })
      // navigate or show success as needed
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
          submitPasswordForm()
        }}
      >
        <div className="my-10 rounded-[20px] border border-richblack-700 bg-richblack-800 p-8 shadow-[0_20px_60px_rgba(5,8,18,0.5)]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-richblack-5">Change Password</h2>
              <p className="mt-1 text-sm text-richblack-300">
                Secure your account by updating your password regularly.
              </p>
            </div>
            <span className="hidden rounded-full border border-richblack-600 bg-richblack-900 px-4 py-2 text-xs text-richblack-200 md:inline-flex">
              Keep it strong
            </span>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="relative flex flex-col gap-2">
              <label htmlFor="oldPassword" className="text-sm font-medium text-richblack-200">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter current password"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.oldPassword}
                onChange={onChange}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="absolute right-3 top-11 z-[10] cursor-pointer"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your current password.
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <label htmlFor="newPassword" className="text-sm font-medium text-richblack-200">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter new password"
                className="form-style bg-richblack-900 border-richblack-600 focus:border-yellow-200"
                value={form.newPassword}
                onChange={onChange}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="absolute right-3 top-11 z-[10] cursor-pointer"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.newPassword && (
                <span className="-mt-1 text-[12px] text-yellow-100">
                  Please enter your new password.
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
          <IconBtn type="submit" text="Update" customClasses="rounded-full px-6 py-3" />
        </div>
      </form>
    </>
  )
}