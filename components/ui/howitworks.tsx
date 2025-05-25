"use client";
import { useState } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
//how it works
const loadingStates = [
  {
    text: "Discover Your Potential",
  },
  {
    text: "Choose Your Path",
  },
  {
    text: "Immerse Yourself",
  },
  {
    text: "Elevate Your Future",
  },
];
 
export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex flex-center bg-black">
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-20">
      <p className="lg:text-7xl md:text-base text-neutral-300 mt-2">
      How it works
      </p>
      <p className="text-sm md:text-base text-neutral-300 mt-2 mb-2">

        Turn ambition into achievement. One step at a time !
      </p>
      <HoverBorderGradient
        onClick={() => setLoading(true)}
        className="bg-black text-white flex items-center space-x-2"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </HoverBorderGradient>
      
     </div>
     
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
 
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
     
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
   
  );
}