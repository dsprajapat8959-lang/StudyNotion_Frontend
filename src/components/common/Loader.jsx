import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-[70px] left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-richblack-900/80 backdrop-blur-md border border-richblack-700 shadow-xl">
        
        {/* Animated dots */}
        <div className="flex gap-1">
          <span className="dot"></span>
          <span className="dot delay-150"></span>
          <span className="dot delay-300"></span>
        </div>

        <p className="text-richblack-5 text-sm tracking-wide">
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loader;