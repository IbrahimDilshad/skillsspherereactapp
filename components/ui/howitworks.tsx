"use client";
import { useState } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
//how it works
const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];
 
export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex flex-center">
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-20">
      <p  className="lg:text-7xl md:text-base text-neutral-500 dark:text-neutral-300 mt-2">
      How it works
      </p>
      <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-300 mt-2 mb-2">

        Dicouver our process of getting you started with us.
      </p>
      <HoverBorderGradient
        onClick={() => setLoading(true)}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </HoverBorderGradient>
      
     </div>
     
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
 
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
     
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
   
  );
}