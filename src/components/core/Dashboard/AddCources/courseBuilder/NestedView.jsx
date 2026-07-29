import { useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { FaPlus } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { RxDropdownMenu } from "react-icons/rx"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-hot-toast"

import { deleteSection, deleteSubSection } from "../../../../../services/operations/course"
import { setCourse } from "../../../../../slices/courceSlice"
import ConfirmationModal from "../../../../common/ConfirmationModal"
import SubSectionModal from "./SubSectionModal"
import { useEffect } from "react"
import { BiSolidDownArrow } from "react-icons/bi";
    
export default function NestedView({ handleChangeEditSectionName }) {
    const course = useSelector((state) => state.course.course)
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const courseContent = course?.courseContent ?? []
  // States to keep track of mode of modal [add, view, edit]
  const [addSubSection, setAddSubsection] = useState(null)
  const [viewSubSection, setViewSubSection] = useState(null)
  const [editSubSection, setEditSubSection] = useState(null)
  // to keep track of confirmation modal
  const [confirmationModal, setConfirmationModal] = useState(null)

    const handleDeleteSection = async (sectionId) => {
        if (!course?._id) {
            toast.error("Course not available")
            setConfirmationModal(null)
            return
        }
        const result = await deleteSection({ sectionId, courseId: course._id, token })
        if (result) dispatch(setCourse(result))
        setConfirmationModal(null)
    }

    const showDeleteSectionModal = (sectionId) => {
        setConfirmationModal({
            text1: "Delete this section?",
            text2: "This action cannot be undone.",
            btn1Text: "Delete",
            btn2Text: "Cancel",
            btn1Handler: () => handleDeleteSection(sectionId),
            btn2Handler: () => setConfirmationModal(null),
        })
    }

    const handleDeleteSubSection = async (subSectionId, sectionId) => {
        const result = await deleteSubSection({ subSectionId, sectionId, token })
        if (result) {
            const updatedCourseContent = courseContent.map((section) =>
                section._id === sectionId ? result : section
            )
            const updatedCourse = { ...course, courseContent: updatedCourseContent }
            dispatch(setCourse(updatedCourse))
        }
        setConfirmationModal(null)
    }

    const showDeleteSubsectionModal = (subSectionId, sectionId) => {
        setConfirmationModal({
            text1: "Delete this Subsection?",
            text2: "This action cannot be undone.",
            btn1Text: "Delete",
            btn2Text: "Cancel",
            btn1Handler: async () => { handleDeleteSubSection(subSectionId, sectionId) },
            btn2Handler: () => setConfirmationModal(null),
        })
    }

 
  useEffect(() => {
    console.log(course)
  }, [course])

  return(
    <div className="text-richblack-100 text-xl bg-richblack-800 m-6 p-6 rounded-md h-72" id="nestedViewContainer">
        <div >
            {
            courseContent.map((section) => (
                <details key={section._id} open>
                    <summary className="flex items-center justify-between gap-x-3 border-b-2">
                        <div className="flex items-center gap-x-3">
                            <RxDropdownMenu className="inline-block mr-2" />
                            <p>{section.sectionName}</p>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <button onClick={(e) => { e.stopPropagation(); handleChangeEditSectionName(section._id, section.sectionName) }}>
                                <MdEdit className="text-richblack-300 hover:text-yellow-50" />
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); showDeleteSectionModal(section._id) }}>
                                <RiDeleteBin6Line className="text-richblack-300 hover:text-pink-50" />
                            </button>
                            <span>|</span>
                            <BiSolidDownArrow className="text-richblack-300" />
                        </div>
                    </summary>
                    <div>
                        {
                            (Array.isArray(section.subSection)
                                ? section.subSection
                                : section.subSection
                                    ? [section.subSection]
                                    : []
                            ).map((data) => (
                                <div
                                key={data?._id}
                                onClick={() => setViewSubSection(data)}
                                className="flex items-center justify-between gap-x-3 border-b-2 p-2 cursor-pointer hover:bg-richblack-700"
                                > <div>
                                    <RxDropdownMenu/>
                                    <p>{data?.title}</p>
                                </div>
                                    
                                <div className="flex items-center gap-x-3">
                                            <button onClick={(e) => { e.stopPropagation(); setEditSubSection({...data, sectionId: section._id}) }}>
                                        <MdEdit className="text-richblack-300 hover:text-yellow-50" />
                                    </button>
                                        <button onClick={(e) => { e.stopPropagation(); showDeleteSubsectionModal(data._id, section._id) }}>
                                        <RiDeleteBin6Line className="text-richblack-300 hover:text-pink-50" />  
                                        </button>
                                </div>
                                </div>

                            
                            ))
                        }
                    </div>
                    <div>
                        <button onClick={() => setAddSubsection(section._id)} className="flex items-center gap-x-2 text-yellow-50 hover:text-yellow-100">
                            <FaPlus />
                            <p>Add Lecturee</p>  
                            </button>
                    </div>
                   
                </details>
            ))
             }
             </div>
             <div>
             {
                addSubSection ? (
                    <SubSectionModal 
                        modalData={addSubSection}   
                        setModalData={setAddSubsection}
                        add={true}
                    />): viewSubSection ? (
                        <SubSectionModal 
                            modalData={viewSubSection}  
                            setModalData={setViewSubSection}
                            view={true}
                        />
                    ) : editSubSection ? (
                        <SubSectionModal 
                            modalData={editSubSection}  
                            setModalData={setEditSubSection}
                            edit={true}
                        />
                    ) : null
                }
                {
                    confirmationModal ? (
                        <ConfirmationModal modalData={confirmationModal} />
                    ): <div></div>
                }
            </div>
       </div>  
  )
}     
            