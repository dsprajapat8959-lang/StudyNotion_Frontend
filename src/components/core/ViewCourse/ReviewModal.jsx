import React from "react";
import { useSelector } from "react-redux";
import { createReview } from "../../../services/operations/viewCourse";

const ReviewModal = ({ courseId, onClose }) => {
  const { user } = useSelector((state) => state.profile || {});

  const submitReview = async (reviewData) => {
    try {
      await createReview(courseId, user?.token, reviewData);
      onClose?.();
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const reviewPayload = {
      rating: Number(formData.get("rating")),
      review: formData.get("review"),
    };

    submitReview(reviewPayload);
  };

  const profileInitial = user?.firstName?.[0] || user?.lastName?.[0] || "U";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-richblack-900/80 px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-xl rounded-2xl border border-richblack-700 bg-richblack-800 shadow-[0_20px_80px_rgba(0,8,20,0.6)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-richblack-600 p-2 text-richblack-300 transition hover:border-richblack-500 hover:text-richblack-5"
          aria-label="Close review modal"
        >
          ✕
        </button>

        <div className="border-b border-richblack-700 px-6 py-5">
          <h2 className="text-xl font-semibold text-richblack-5">Leave a review</h2>
          <p className="mt-1 text-sm text-richblack-300">
            Share your experience for this course.
          </p>
        </div>

        <div className="px-6 py-5">
          <div className="mb-6 flex items-center gap-4 rounded-xl border border-richblack-700 bg-richblack-900/60 p-4">
            {user?.thumbnail ? (
              <img
                src={user.thumbnail}
                alt="Profile"
                className="h-12 w-12 rounded-full border border-richblack-700 object-cover"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-richblack-700 text-lg font-semibold text-richblack-5">
                {profileInitial}
              </div>
            )}
            <div>
              <h3 className="text-base font-semibold text-richblack-5">
                {user?.firstName} {user?.lastName}
              </h3>
              <p className="text-sm text-richblack-300">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={submitHandler} className="space-y-4">
            <div>
              <label htmlFor="rating" className="mb-2 block text-sm font-medium text-richblack-200">
                Rating
              </label>
              <select
                id="rating"
                name="rating"
                defaultValue="5"
                className="w-full rounded-lg border border-richblack-600 bg-richblack-700 px-3 py-2 text-richblack-5 outline-none transition focus:border-yellow-50"
              >
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
              </select>
            </div>

            <div>
              <label htmlFor="review" className="mb-2 block text-sm font-medium text-richblack-200">
                Review
              </label>
              <textarea
                id="review"
                name="review"
                rows="5"
                placeholder="Tell learners what stood out about this course..."
                className="w-full rounded-lg border border-richblack-600 bg-richblack-700 px-3 py-2 text-richblack-5 outline-none transition placeholder:text-richblack-400 focus:border-yellow-50"
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-richblack-600 px-4 py-2 text-sm font-medium text-richblack-300 transition hover:border-richblack-500 hover:text-richblack-5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-yellow-50 px-4 py-2 text-sm font-semibold text-richblack-900 transition hover:bg-yellow-100"
              >
                Submit review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
