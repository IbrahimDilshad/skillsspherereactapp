"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

// Tutor Cards Data (replace this with your actual data structure)
const tutorCards = [
  {
    title: "John Doe",
    description: "Math tutor with 5 years of experienceMath tutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experiencetutor with 5 years of experience",
    location: "New York",
    subject: "Math",
    area: "Manhattan",
    src: "/images/stamp logo.png",  // Replace with actual image paths
    ctaLink: "#"
  },
  {
    title: "Jane Smith",
    description: "English tutor specializing in writing skills.",
    location: "Los Angeles",
    subject: "English",
    area: "Hollywood",
    src: "/images/stamp logo.png",  // Replace with actual image paths
    ctaLink: "#"
  },
  // Add your other tutor cards here
];

export function ExpandableCardDemo() {
  const [active, setActive] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const id = useRef<string>(Math.random().toString());
  const ref = useRef<HTMLDivElement>(null);

  // Function to handle filtering of tutor cards based on search query
  const filteredCards = tutorCards.filter(
    (card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Search bar */}
      <div className="p-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search by name, subject, location..."
          className="p-3 rounded-full border border-neutral-700 bg-transparent text-neutral-200 placeholder-neutral-400 w-full max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active?.title}-${id.current}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-900 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
              
            </motion.button>
            <motion.div
              layoutId={`card-${active?.title}-${id.current}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id.current}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id.current}`}
                      className="font-medium text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id.current}`}
                      className="text-neutral-400 text-base max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent"
                      style={{ wordBreak: "break-word" }}
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    Visit
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Display filtered cards */}
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCards.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <div className="bg-transparent border border-neutral-200 rounded-2xl px-8 py-10 shadow-md flex flex-col items-center">
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-4 text-neutral-400">
                <path stroke="currentColor" strokeWidth="1.5" d="M12 17v.01M12 7v4m0 8a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
              </svg>
              <span className="text-xl font-semibold text-neutral-700 mb-2">No tutors found</span>
              <span className="text-sm text-neutral-500">Try a different search term.</span>
            </div>
          </div>
        ) : (
          filteredCards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id.current}`}
              key={card.title}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id.current}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col mt-2">
                  <motion.h3
                    layoutId={`title-${card.title}-${id.current}`}
                    className="font-medium text-neutral-200 text-center md:text-left text-base"
                  >
                    {card.title}
                  </motion.h3>
                  <div className="mt-2 flex flex-col gap-1 text-xs text-neutral-400 text-center">
                    <div>
                      <span className="font-semibold text-neutral-300">Location:</span>{" "}
                      <span className="text-neutral-400">{card.location}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-300">Subject:</span>{" "}
                      <span className="text-neutral-400">{card.subject}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-neutral-300">Area:</span>{" "}
                      <span className="text-neutral-400">{card.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </ul>
    </>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
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
    </motion.svg>
  );
};
