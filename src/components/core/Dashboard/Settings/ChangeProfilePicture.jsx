import { useEffect, useRef, useState } from "react"
import { FiUpload } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"

import IconBtn from "../../../common/IconBtn"

export default function ChangeProfilePicture() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [imageFile, setImageFile] = useState(null)
  const [previewSource, setPreviewSource] = useState(null)

  const fileInputRef = useRef(null)

  const handleClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleFileUpload = () => {
    
  }

  useEffect(() => {
    if (imageFile) {
      previewFile(imageFile)
    }
  }, [imageFile])
  return (
    <div className="rounded-[20px] border border-richblack-700 bg-richblack-800 p-8 shadow-[0_20px_60px_rgba(7,12,32,0.45)] text-richblack-5">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src={previewSource || user?.image}
            alt={`profile-${user?.firstName}`}
            className="h-24 w-24 rounded-full object-cover border border-richblack-600"
          />
          <div className="space-y-2">
            <p className="text-xl font-semibold text-richblack-5">
              Change Profile Picture
            </p>
            <p className="max-w-xl text-sm text-richblack-300">
              Upload a clear photo so people can recognize you more easily on the dashboard.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/png, image/gif, image/jpeg"
          />
          <button
            onClick={handleClick}
            disabled={loading}
            className="rounded-md bg-richblack-700 px-6 py-2 text-sm font-semibold text-richblack-50 transition hover:bg-richblack-600"
          >
            Select
          </button>
          <IconBtn
            text={loading ? "Uploading..." : "Upload"}
            onclick={handleFileUpload}
            customClasses="px-6 py-2 text-sm"
          >
            {!loading && (
              <FiUpload className="text-lg text-richblack-900" />
            )}
          </IconBtn>
        </div>
      </div>
    </div>
  )
}