import { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { instructorCourse, deleteCourse as deleteCourseService } from '../../../../services/operations/course';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function Data() {
    const [courses, setCourses] = useState([]);
    const {token} = useSelector((state) => state.auth);

    const fetchData = async () => {
        const response = await instructorCourse();
        setCourses(response.data?.data);
    }

    const deleteCourse = async (courseId) => {
        console.log("Deleting course with ID:", courseId);
        const response = await deleteCourseService({ courseId }, token);

        if (response) {
            await fetchData();
            console.log("Course deleted successfully");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="ml-7 mt-7 w-[calc(100%-1.75rem)] overflow-x-auto rounded border border-richblack-700 bg-richblack-800 shadow-sm">
            <Table className="min-w-full border-collapse">
                <Thead>
                    <Tr className="bg-richblack-700 text-left text-sm font-semibold text-richblack-50">
                        <Th className="px-4 py-3">Courses</Th>
                        <Th className="px-4 py-3">Duration</Th>
                        <Th className="px-4 py-3">Price</Th>
                        <Th className="px-4 py-3">Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {!courses.length ? (
                        <Tr>
                            <Td colSpan="4" className="px-4 py-8 text-center text-sm text-richblack-300">
                                No courses found
                            </Td>
                        </Tr>
                    ) : (
                        courses.map((course, idx) => (
                            <Tr key={idx} className="border-t border-richblack-700 bg-richblack-800/70 hover:bg-richblack-700/70">
                                <Td className="px-4 py-4">
                                    <div className="flex items-start gap-3">
                                        <img
                                            src={course.thumbnail}
                                            alt={course.courseName}
                                            className="h-24 w-36 rounded object-cover"
                                        />
                                        <div className="min-w-0">
                                            <p className="font-semibold text-richblack-5">{course.courseName}</p>
                                            <p className="mt-1 text-sm text-richblack-300">{course.courseDescription}</p>
                                            <p className="mt-2 text-xs text-richblack-400">Created: 12/06/2026</p>
                                            {course.status === 'Draft' ? (
                                                <span className="mt-2 inline-block rounded-full bg-pink-500/10 px-2 py-1 text-xs font-medium text-pink-200">
                                                    Drafted
                                                </span>
                                            ) : (
                                                <span className="mt-2 inline-block rounded-full bg-yellow-500/10 px-2 py-1 text-xs font-medium text-yellow-50">
                                                    Published
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </Td>
                                <Td className="px-4 py-4 text-sm text-richblack-300">2h 30m</Td>
                                <Td className="px-4 py-4 text-sm font-medium text-richblack-5">₹{course.price}</Td>
                                <Td className="px-4 py-4">
                                    <div className="flex items-center gap-3 text-lg text-richblack-300">
                                        <button className="rounded p-1 transition hover:bg-richblack-700 hover:text-yellow-50" aria-label="Edit course" onClick={() => console.log('Edit course', course._id)}>
                                            <BiEdit />
                                        </button>
                                        <button className="rounded p-1 transition hover:bg-richblack-700 hover:text-pink-200" aria-label="Delete course" onClick={() => deleteCourse(course._id)}>
                                            <MdDelete />
                                        </button>
                                    </div>
                                </Td>
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
        </div>
    )
}