import React from "react";

export function DailyUpdateNotice() {
  return (
    <div className="w-full flex justify-center mt-16 mb-4">
      <div className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4 shadow-lg flex items-center gap-3">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
          <path
            d="M12 8v4l2 2"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-white text-base md:text-lg font-semibold">
          We update daily. Visit tomorrow to see new stuff!
        </span>
      </div>
    </div>
  );
}