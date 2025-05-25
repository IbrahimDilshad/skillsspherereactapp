"use client";
import {
  IconTerminal2,
  IconBook,
  IconCurrencyDollar,
  IconTrendingUp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

//why choose us 
export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Learn from Industry Experts",
      description:
        "Our instructors are real professionals with hands-on experience — not just theory. You get practical skills from those who’ve done the work.",
      icon: <IconTerminal2 />,
    },
    {
      title: "All-in-One Learning Ecosystem",
      description:
        "From online courses to premium eBooks and digital tools — everything you need to grow is in one seamless platform.",
      icon: <IconBook />,
    },
    {
      title: "Flexible & Affordable Access",
      description:
        "We believe quality education should be accessible. Learn at your pace, on your schedule, without breaking the bank.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Built for Career Growth",
      description:
        "Our content is designed to help you land jobs, grow businesses, and thrive in today’s competitive market — not just earn certificates.",
      icon: <IconTrendingUp />,
    },
  ];
  return (
    <div className="relative z-10 py-5 max-w-7xl mx-auto">
      <h2 className="max-w-7xl pl-2 mx-auto text-xl text-center justify-center md:text-5xl font-bold text-white font-sans mb-5">
        Why choose us?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-5 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
//why choose us end