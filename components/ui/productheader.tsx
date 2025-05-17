"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "your",
    },
    {
      text: "need",
    },
    {
      text: "in seconds",
    },
    {
      text: "Skills Sphere.",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-transparent">
      <p className="text-neutral-300 text-xs sm:text-base">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-neutral-900 text-white border border-white text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
