"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      title: "Air Jordan 4 Retro Reimagined",
      description:
        "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
      price: "$100",
      image: "/images/stamp logo.png",
    },
    {
      title: "card two",
      description:
        "Big bird The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
      price: "$100",
      image: "/images/stamp logo.png",
    },
    // Add more products as needed
  ];

  const filteredProducts = products.filter((product) =>
    (product.title + product.description)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="w-full flex justify-center p-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-3 rounded-full border border-neutral-700 bg-transparent text-neutral-200 placeholder-neutral-400 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <div className="bg-transparent border border-neutral-200 rounded-2xl px-8 py-10 shadow-md flex flex-col items-center">
              <svg
                width="48"
                height="48"
                fill="none"
                viewBox="0 0 24 24"
                className="mb-4 text-neutral-400"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="M12 17v.01M12 7v4m0 8a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
                />
              </svg>
              <span className="text-xl font-semibold text-neutral-700 mb-2">
                No products found
              </span>
              <span className="text-sm text-neutral-500">
                Try a different search term.
              </span>
            </div>
          </div>
        ) : (
          filteredProducts.map((product, index) => (
            <BackgroundGradient
              key={index}
              className="rounded-[22px] w-full p-4 sm:p-6 bg-neutral-900 relative overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.title}
                height={400}
                width={400}
                className="object-contain w-full h-auto"
              />
              <p className="text-base sm:text-xl text-white mt-4 mb-2">
                {product.title}
              </p>
              <p className="text-sm text-neutral-400">
                {product.description}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {product.price}
                </span>
              </button>
            </BackgroundGradient>
          ))
        )}
      </div>
    </>
  );
}
