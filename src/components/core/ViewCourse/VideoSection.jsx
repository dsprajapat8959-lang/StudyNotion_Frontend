import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, useLocation } from "react-router-dom"

import "video-react/dist/video-react.css"
import { BigPlayButton, Player } from "video-react"

import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI"
import { updateCompletedLectures } from "../../../slices/viewCourseSlice"
import IconBtn from "../../common/IconBtn"

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const playerRef = useRef(null)
  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.auth)
  const { courseSectionData, courseEntireData, completedLectures } =
    useSelector((state) => state.viewCourse)

  const [videoData, setVideoData] = useState(null)
  const [previewSource, setPreviewSource] = useState("")
  const [videoEnded, setVideoEnded] = useState(false)
  const [loading, setLoading] = useState(false)

  const videoUrl = videoData?.videoUrl ?? ""
  const hasVideoSource = Boolean(videoUrl)

  useEffect(() => {
    if (!courseSectionData.length) return

    const section = courseSectionData.find((section) => section._id === sectionId)
    const subsection = section?.subSection?.find((item) => item._id === subSectionId) ?? null
    const defaultVideo = courseSectionData[0]?.subSection?.[0] ?? null

    if (!courseId || !sectionId || !subSectionId) {
      setVideoData(defaultVideo)
      setPreviewSource(courseEntireData?.thumbnail ?? "")
      setVideoEnded(false)
      return
    }

    setVideoData(subsection ?? defaultVideo)
    setPreviewSource(courseEntireData?.thumbnail ?? "")
    setVideoEnded(false)
  }, [courseSectionData, courseEntireData, courseId, sectionId, subSectionId, location.pathname, navigate])

  const getCurrentIndexes = () => {
    const sectionIndex = courseSectionData.findIndex((section) => section._id === sectionId)
    const subsectionIndex =
      sectionIndex >= 0
        ? courseSectionData[sectionIndex]?.subSection?.findIndex((item) => item._id === subSectionId)
        : -1

    return { sectionIndex, subsectionIndex }
  }

  const isFirstVideo = () => {
    const { sectionIndex, subsectionIndex } = getCurrentIndexes()
    return sectionIndex === 0 && subsectionIndex === 0
  }

  const isLastVideo = () => {
    const { sectionIndex, subsectionIndex } = getCurrentIndexes()
    if (sectionIndex < 0 || subsectionIndex < 0) return false

    const subsectionLength = courseSectionData[sectionIndex]?.subSection?.length ?? 0
    return sectionIndex === courseSectionData.length - 1 && subsectionIndex === subsectionLength - 1
  }

  const goToVideo = (targetSectionIndex, targetSubSectionIndex) => {
    const targetSection = courseSectionData[targetSectionIndex]
    const targetSubSection = targetSection?.subSection?.[targetSubSectionIndex]

    if (!targetSection || !targetSubSection) return

    navigate(
      `/course/${courseId}/section/${targetSection._id}/subsection/${targetSubSection._id}`
    )
  }

  const goToNextVideo = () => {
    const { sectionIndex, subsectionIndex } = getCurrentIndexes()
    if (sectionIndex < 0 || subsectionIndex < 0) return

    const subsectionLength = courseSectionData[sectionIndex]?.subSection?.length ?? 0
    if (subsectionIndex < subsectionLength - 1) {
      goToVideo(sectionIndex, subsectionIndex + 1)
    } else {
      goToVideo(sectionIndex + 1, 0)
    }
  }

  const goToPrevVideo = () => {
    const { sectionIndex, subsectionIndex } = getCurrentIndexes()
    if (sectionIndex < 0 || subsectionIndex < 0) return

    if (subsectionIndex > 0) {
      goToVideo(sectionIndex, subsectionIndex - 1)
    } else {
      const prevSectionIndex = sectionIndex - 1
      const prevSectionLength =
        courseSectionData[prevSectionIndex]?.subSection?.length ?? 0

      goToVideo(prevSectionIndex, prevSectionLength - 1)
    }
  }

  const handleLectureCompletion = async () => {
    setLoading(true)
    try {
      const res = await markLectureAsComplete(
        { courseId, subsectionId: subSectionId },
        token
      )
      if (res) {
        dispatch(updateCompletedLectures(subSectionId))
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-5 text-white">
      
        <Player
          ref={playerRef}
          aspectRatio="16:9"
          playsInline
          onEnded={() => setVideoEnded(true)}
          src={videoUrl}
        >
          <BigPlayButton position="center" />
          {videoEnded && (
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgb(0, 0, 0), rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.1)",
              }}
              className="full absolute inset-0 z-[100] grid h-full place-content-center font-inter"
            >
              {!completedLectures.includes(subSectionId) && (
                <IconBtn
                  disabled={loading}
                  onClick={handleLectureCompletion}
                  text={!loading ? "Mark As Completed" : "Loading..."}
                  customClasses="text-xl max-w-max px-4 mx-auto"
                />
              )}
              <IconBtn
                disabled={loading}
                onClick={() => {
                  if (playerRef?.current) {
                    playerRef.current.seek(0)
                    setVideoEnded(false)
                  }
                }}
                text="Rewatch"
                customClasses="text-xl max-w-max px-4 mx-auto mt-2"
              />
              <div className="mt-10 flex min-w-[250px] justify-center gap-x-4 text-xl">
                {!isFirstVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToPrevVideo}
                    className="blackButton"
                  >
                    Prev
                  </button>
                )}
                {!isLastVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToNextVideo}
                    className="blackButton"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
        )}
        </Player>
      

      <h1 className="mt-4 text-3xl font-semibold">{videoData?.title}</h1>
      <p className="pt-2 pb-6">{videoData?.description}</p>
    </div>
  )
}

export default VideoDetails
