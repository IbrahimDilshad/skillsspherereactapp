"use client";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import React from "react";
import Link from "next/link";

// Card content for each offering
const data = [
  {
    category: "Courses",
    title: "Learn from top-tier instructors, anytime.",
    src: "/cursurcards/pexels-polina-kovaleva-5546888.jpg",
    content: (
      <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center">
        <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center">
          <span className="font-bold text-white block mb-2">
            SkillSphere offers expert-led courses across tech, design, business, and more — built to help you grow at your own pace.
          </span>
        </p>
        <Link
          href="/courses"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow hover:bg-neutral-200 transition"
        >
          Explore Courses
        </Link>
      </div>
    ),
  },
  {
    category: "Expert Training",
    title: "Get mentorship that matters.",
    src: "/cursurcards/pexels-yankrukov-8520469.jpg",
    content: (
      <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center">
        <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center">
          <span className="font-bold text-white block mb-2">
            One-on-one or group mentorships tailored to your goals. Learn from real professionals who’ve been in your shoes.
          </span>
        </p>
        <Link
          href="/book-session"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow hover:bg-neutral-200 transition"
        >
          Book a Session
        </Link>
      </div>
    ),
  },
  {
    category: "eBooks & Guides",
    title: "Knowledge you can carry with you.",
    src: "/cursurcards/pexels-jegor-nagel-113940522-17946656.jpg",
    content: (
      <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center">
        <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center">
          <span className="font-bold text-white block mb-2">
            Access hand-picked eBooks and guides that support your learning journey and give you expert insights in every field.
          </span>
        </p>
        <Link
          href="/ebooks"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow hover:bg-neutral-200 transition"
        >
          Browse eBooks
        </Link>
      </div>
    ),
  },
  {
    category: "Digital Products",
    title: "Tools that supercharge your workflow.",
    src: "/cursurcards/pexels-sora-shimazaki-5926242.jpg",
    content: (
      <div className="bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4 flex flex-col items-center">
        <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto text-center">
          <span className="font-bold text-white block mb-2">
            From productivity templates to design assets and code snippets — our marketplace offers everything to level up your work.
          </span>
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block px-8 py-3 rounded-full bg-white text-black font-bold text-lg shadow hover:bg-neutral-200 transition"
        >
          See Products
        </Link>
      </div>
    ),
  },
];

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-transparent">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans">
        What WE Offer
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

