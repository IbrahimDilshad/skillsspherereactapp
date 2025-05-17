"use client";
import { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function AnimatedPinDemo() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const books = [
    {
      title: "Aceternity UI",
      description: "Customizable Tailwind CSS and Framer Motion Components.",
      href: "https://skillssphere.site",
      imageSrc: "/images/stamp logo.png",
    },
    {
      title: "Aceternity UI 2",
      description: "Advanced Tailwind CSS and Framer Motion Components.",
      href: "https://twitter.com/mannupaaji",
      imageSrc: "/images/stamp logo.png",
    },
    {
      title: "NextGen UI",
      description: "Tailwind CSS components with next-gen animations.",
      href: "https://skillssphere.site",
      imageSrc: "/images/stamp logo.png",
    },
    {
      title: "UI Master",
      description: "Mastering Tailwind and Framer Motion Components.",
      href: "https://twitter.com/mannupaaji",
      imageSrc: "/images/stamp logo.png",
    },
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div>
      <div className="p-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-200 placeholder-neutral-400 w-full max-w-md"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book, index) => (
            <div key={index} className="mt-0 mb-40 mx-auto w-7xl items-center justify-center">
              <PinContainer title="Download" href={book.href}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {book.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">{book.description}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                    <Image
                      width={1000}
                      height={1000}
                      src={book.imageSrc}
                      alt={book.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
