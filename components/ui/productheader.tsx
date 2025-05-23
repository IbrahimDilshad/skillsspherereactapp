"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Everything",
      className: "text-blue-500",
    },
    {
      text: "You",
    },
    {
      text: "Need",
    },
    {
      text: "To",
    },
    {
      text: "Learn,",
    },
    {
    text:"Work",
    },
    {
      text:"And",
    },
    {
      text: " Win",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-transparent">
      <p className="text-neutral-300 text-xs sm:text-base">
        Boost your study and work with top gear
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a
          href="https://wa.me/923289451617?text=I'm%20interested%20in%20selling%20my%20product%20on%20SkillSphere"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 h-10 rounded-xl bg-black border border-white text-white text-sm flex items-center justify-center"
        >
          Sell Yours
        </a>
        <a
          href="https://wa.me/923289451617"
          target="_blank"
          rel="noopener noreferrer"
          className="w-40 h-10 rounded-xl bg-neutral-900 text-white border border-white text-sm flex items-center justify-center"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
