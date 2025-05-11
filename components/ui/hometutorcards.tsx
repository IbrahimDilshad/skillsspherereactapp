"use client";
import Image from "next/image";
import React, { JSX, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Card {
  title: string;
  description: string;
  subject: string;
  location: string;
  area: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => JSX.Element;
}

const cards: Card[] = [
  {
    title: "Summertime Sadness",
    description: "Lana Del Rey",
    subject: "Music",
    location: "New York",
    area: "Brooklyn",
    src: "/images/stamp logo.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Lana Del Rey, an iconic American singer-songwriter...</p>,
  },
  {
    title: "Mitran Di Chhatri",
    description: "Babbu Maan",
    subject: "Music",
    location: "Punjab",
    area: "Khant",
    src: "/images/stamp logo.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Babbu Maan, a legendary Punjabi singer...</p>,
  },
   {
    title: "Mldhgsh",
    description: "Babbu Maan",
    subject: "Music",
    location: "Punjab",
    area: "Khant",
    src: "/images/stamp logo.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Babbu Maan, a legendary Punjabi singer...</p>,
  },
   {
    title: "kyoj",
    description: "Babbu Maan",
    subject: "Music",
    location: "Punjab",
    area: "Khant",
    src: "/images/stamp logo.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Babbu Maan, a legendary Punjabi singerBabbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer......Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...Babbu Maan, a legendary Punjabi singer...</p>,
  },
   {
    title: "ifsijfj",
    description: "Babbu Maan",
    subject: "Music",
    location: "Punjab",
    area: "Khant",
    src: "/images/stamp logo.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Babbu Maan, a legendary Punjabi singer...</p>,
  },
  {
    title: "For Whom The Bell Tolls",
    description: "Metallica",
    subject: "Metal",
    location: "California",
    area: "Los Angeles",
    src: "/images/stamp logo.png",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => <p>Metallica, an iconic American heavy metal band...</p>,
  },
];

export function ExpandableCardDemo() {
  const [active, setActive] = useState<Card | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");

  const filtered = cards.filter((card) => {
    const lower = query.toLowerCase();
    return (
      card.title.toLowerCase().includes(lower) ||
      card.description.toLowerCase().includes(lower) ||
      card.subject?.toLowerCase().includes(lower) ||
      card.location?.toLowerCase().includes(lower) ||
      card.area?.toLowerCase().includes(lower)
    );
  });

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="max-w-4xl mx-auto w-full mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, subject, location, area..."
          className="w-full p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-white bg-transparent"
        />
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                onClick={() => setActive(null)}
                className="absolute top-2 right-2 lg:hidden bg-white rounded-full h-6 w-6 flex items-center justify-center"
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-4">
                  <h3 className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                    {active.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base">
                    {active.description}
                  </p>
                  <div className="mt-4">
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </div>
                  <a
                    href={active.ctaLink}
                    target="_blank"
                    className="mt-6 inline-block px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((card) => (
          <li
            key={card.title}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            onClick={() => setActive(card)}
          >
            <Image
              width={100}
              height={100}
              src={card.src}
              alt={card.title}
              className="h-60 w-full rounded-lg object-cover object-top"
            />
            <div className="flex justify-center items-center flex-col mt-2">
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center">
                {card.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-center">
                {card.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);
