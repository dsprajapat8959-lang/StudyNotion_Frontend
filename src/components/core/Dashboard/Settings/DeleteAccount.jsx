import { FiTrash2 } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { deleteProfile } from "../../../../services/operations/SettingsAPI"

export default function DeleteAccount() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  async function handleDeleteAccount() {
    try {
      dispatch(deleteProfile(token, navigate))
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
    }
  }

  return (
    <div className="rounded-[20px] border border-pink-700/30 bg-pink-950/90 p-8 shadow-[0_20px_60px_rgba(180,63,88,0.18)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-700/20 text-pink-200">
            <FiTrash2 className="text-2xl" />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-richblack-5">Delete Account</p>
            <div className="max-w-xl text-sm leading-6 text-pink-100/90">
              <p>Deleting your account is irreversible and will remove all enrolled courses, progress, and profile data.</p>
              <p className="mt-2 text-pink-200">Make sure you really want to proceed before clicking the button.</p>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="w-fit rounded-full border border-pink-400 bg-transparent px-6 py-3 text-sm font-semibold text-pink-200 transition hover:bg-pink-700/20"
          onClick={handleDeleteAccount}
        >
          Delete my account
        </button>
      </div>
    </div>
  )
}