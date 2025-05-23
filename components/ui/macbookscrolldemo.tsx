"use client";
import { MacbookScroll } from "./macbook-scroll";
import Link from "next/link";

//mackbook scroll demo
export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden bg-transparent">
      <MacbookScroll
        title={
          <span className="mb-20 text-center text-3xl font-bold text-white mt-0">
            Fuel Your Ambition with the Skills That Shape Tomorrow <br /> Start Today!
          </span>
        }
        badge={
          <Link href="/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/ChatGPT Image May 24, 2025, 03_55_03 AM.png`}
        showGradient={false}
      />
    </div>
  );
}
const Badge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle: dark neutral */}
      <circle cx="32" cy="32" r="32" fill="#18181b" />
      {/* Inner circle: slightly lighter neutral */}
      <circle cx="32" cy="32" r="24" fill="#27272a" />
      {/* S letter: accent blue */}
      <text
        x="32"
        y="41"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill="#3b82f6"
        fontFamily="Inter, Arial, sans-serif"
        dominantBaseline="middle"
      >
        S
      </text>
    </svg>
  );
};