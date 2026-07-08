import ChangeProfilePicture from "./ChangeProfilePicture"
import DeleteAccount from "./DeleteAccount"
import EditProfile from "./EditProfile"
import UpdatePassword from "./UpdatePassword"

export default function Settings() {
  return (
    <div className="mx-auto w-full max-w-[1000px] py-10 px-4 md:px-0">
      <div className="mb-10 rounded-3xl border border-richblack-700 bg-richblack-800/90 p-8 shadow-[0_20px_80px_rgba(5,8,18,0.6)]">
        <h1 className="text-3xl font-semibold text-richblack-5">Account Settings</h1>
        <p className="mt-2 max-w-2xl text-sm text-richblack-300">
          Update your profile details, change your password, manage your photo, and control your account preferences from a single place.
        </p>
      </div>
      <div className="space-y-10">
        <ChangeProfilePicture />
        <EditProfile />
        <UpdatePassword />
        <DeleteAccount />
      </div>
    </div>
  )
}