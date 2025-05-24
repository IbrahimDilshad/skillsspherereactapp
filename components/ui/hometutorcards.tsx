"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

// Tutor Cards Data (replace this with your actual data structure)
const tutorCards = [
  {
    title: "Ibrahim DIlshad",
    description: "Learn spoken English, grammar, and writing with personalized guidance. Whether you're a student or a professional, build fluency, boost confidence, and speak like a pro. Flexible timings and friendly environment!",
    location: "Lahore",
    subject: "Spoken English & Grammar",
    Class: "All",
    mode: "Online",
    area: "Johr Town",
    price: "Rs. 5000",
    src: "/courseteachers/2025011623184300.png",  // Replace with actual image paths
    ctaLink: "#",
    verified: true,
  },
  {
    title: "Tahreem",
    description: "Understand complex concepts with ease—from cell structure to genetics. Ideal for Matric, FSc, and O/A Level students. Get personalized help, exam preparation, and interactive lessons that make Biology simple and fun.",
    location: "Shakargarh",
    subject: "Biology",
    Class: "9th & 10th",
    mode: "Online",
    area: "Not Specified",
    price: "Rs. 5000",
    src: "/courseteachers/unknown2.png",  // Replace with actual image paths
    ctaLink: "#",
    verified: true,
  },
  {
    title: "Saad Rafique",
    description: "Start your French journey or level up with structured, friendly lessons. Master grammar, vocabulary, speaking, and listening perfect for DELF exam prep, travel, or career growth. Interactive, personalized, and beginner-friendly!",
    location: "Lahore",
    subject: "French Language",
    Class: "All",
    mode: "Online",
    area: "Not Specified",
    price: "Rs. 10,000",
    src: "/tuitionteachers/Saad Rafique.jpg",  // Replace with actual image paths
    ctaLink: "#",
    verified: true,
  },
  {
    title: "Mehran Javaid",
    description: "Learn French from A1 to A2 and improve your English with clear, beginner-friendly lessons. Ideal for students, travelers, or DELF prep. Focus on speaking, grammar, and confidence—tailored just for you!",
    location: "Lahore",
    subject: "English & French",
    mode: "Online & Offline",
    Class: "All",
    area: "Not Specified",
    price: "Rs. 5000",
    src: "/tuitionteachers/Mehran Javed.jpg",  // Replace with actual image paths
    ctaLink: "#",
    verified: true,
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
      card.mode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.verified.toString().toLowerCase().includes(searchQuery.toLowerCase())
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
                  width={600}
                  height={320}
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
                    width={400}
                    height={240}
                    src={card.src}
                    alt={card.title}
                    className="h-60 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col mt-2">
                  <div className="flex items-center justify-center gap-1">
                    {/* Subject as main heading, now bold and larger */}
                    <motion.h3
                      layoutId={`title-${card.title}-${id.current}`}
                      className="font-bold text-lg text-white text-center md:text-left"
                    >
                      {card.subject}
                    </motion.h3>
                    {card.verified && (
                      <span title="Verified" className="ml-1 inline-flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="drop-shadow"
                        >
                          <g filter="url(#shadow)">
                            <circle cx="12" cy="12" r="10" fill="#1D9BF0" />
                            <path
                              d="M8.5 12.5l2.2 2.2 4.3-4.4"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                            />
                          </g>
                          <defs>
                            <filter id="shadow" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse">
                              <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.25"/>
                            </filter>
                          </defs>
                        </svg>
                      </span>
                    )}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1 text-xs text-neutral-400 w-full">
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-neutral-300">Location</span>
                      <span>{card.location}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-neutral-300">Area</span>
                      <span>{card.area}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-neutral-300">Name</span>
                      <span>{card.title}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-neutral-300">Class</span>
                      <span>{card.Class}</span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-semibold text-neutral-300">Mode</span>
                      <span>{card.mode}</span>
                    </div>
                    <div className="flex flex-col items-start col-span-2">
                      <span className="font-semibold text-neutral-300">Price</span>
                      <span className="text-base font-bold text-white">{card.price}</span>
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
