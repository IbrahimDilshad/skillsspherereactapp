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
          className="p-3 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-200 placeholder-neutral-400 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {filteredProducts.map((product, index) => (
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
        ))}
      </div>
    </>
  );
}
