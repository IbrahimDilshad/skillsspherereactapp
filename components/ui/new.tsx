import React from "react";

export default function ScreenshotHeader() {
  return (
    <div
      className="w-full h-[320px] flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-black to-indigo-900 rounded-3xl shadow-2xl border-2 border-blue-700"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundImage:
          "linear-gradient(120deg, #1e3a8a 0%, #000 60%, #312e81 100%)",
      }}
    >
      <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center mb-4">
        Unlock Your Brilliance
      </h1>
      <p className="text-lg md:text-2xl text-blue-200 font-medium text-center max-w-2xl mb-6">
        Every skill you master today is a step toward the future you dream of. <br />
        <span className="text-blue-400 font-semibold">Learn. Grow. Shine.</span>
      </p>
      <div className="flex space-x-4 mt-2">
        <span className="bg-blue-700 text-white px-4 py-2 rounded-full font-semibold shadow-lg text-sm md:text-base">
          #SkillSphere
        </span>
        <span className="bg-indigo-700 text-white px-4 py-2 rounded-full font-semibold shadow-lg text-sm md:text-base">
          #ElevateYourself
        </span>
      </div>
    </div>
  );
}