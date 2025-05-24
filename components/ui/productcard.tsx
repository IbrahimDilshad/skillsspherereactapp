"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function BackgroundGradientDemo() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      title: "Airpods BUDS PRO TWS899",
      description:
        "BOSE TWS-2 have a battery life of more than 3 hours—long enough to last all day. When you're done, simply place them back in their case to recharge. They'll be protected and fully recharged twice, ready for next use",
      price: "RS 2000",
      image: "/Products/tws899.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20Airpods%20BUDS%20PRO%20TWS899",
    },
    {
      title: "S1 RGb Wired Gaming Mouse",
      description:`Limei S1 Mouse Gaming Luminous Wired Mouse USB Laptop CF,
Business office USB interface,
Comfortable hand feel non-slip side,
Cool lighting 3D buttons,
Wired gaming mouse lightweight design`,
      price: "RS 800",
      image: "/Products/S1RgbMouse.webp",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20S1%20RGb%20Wired%20Gaming%20Mouse",
    },
    {
      title: "Lenovo K3 pro Bluetooth Speaker",
      description:
        "Battery capacity: 1200mAh,BT 5.0 Connection, About 8-10meters(Obstacle-free),Charging time: About 3H,Endurance time: About 6-8H (Volume 50%),Speaker power: 5W,Speaker",
      price: "RS 2500",
      image: "/Products/lenovok3pro.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20Lenovo%20K3%20pro%20Bluetooth%20Speaker",
    },
    {
      title: "T200 Plus Smart Watch 7 Series",
      description:
        "Built-in Speaker And Microphone 1.75 inch Touch Screen, 320*385 Resolution 195mAh Battery Customize Watch Faces, 3 Menu Style Heart Rate And Blood Pressure Monitor IP67 Waterproof Multi-Sport Modes",
      price: "RS 3200",
      image: "/Products/t200watch.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20T200%20Plus%20Smart%20Watch%207%20Series",
    },
    {
      title: "T200 Pro Max Smart Watch 7 Series",
      description:
        "Smart Watch T200 Pro Max Series 7, 44mm for Iphone And Android. Full Touch Metal Body 10 Days Battery Life with 24*7 Heart Rate with Blood Oxygen, Fitness, Sports & Sleep Tracking",
      price: "RS 3200",
      image: "/Products/t200prowatch.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20T200%20Pro%20Max%20Smart%20Watch%207%20Series",
    },
    {
      title: "Apple Earpodss 2nd Generation",
      description:
        "AirPods Deliver 5 Hours Of Listening Time1 And 3 Hours Of Talk Time On A Single Charge Seamless Switching Between Devices5 Hours Of Listening Time13 Hours Of Talk TimePackage Includes",
      price: "RS 1200",
      image: "/Products/applepods2ndG.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20Apple%20Earpodss%202nd%20Generation",
    },
    {
      title: "TWS True wireless stereo i12 Airpods",
      description:
        "Active Noise-Cancellation, Orthodynamic Volume Control, Frequency Response Range:20-20000Hz, HiFi Headphone, Sport, Sensitivity:103±3dB, Wireless, With Microphone",
      price: "RS 1000",
      image: "/Products/i12-1-600x600.webp",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20TWS%20True%20wireless%20stereo%20i12%20Airpods",
    },
    {
      title: "Stylus pen for iPad, iPhone & Android",
      description:
        "Stylus Pen for iPad 2024 Pro 13, Air 11, Apple Pencil Pro 2 and 1, iPad Air 5, 4, 3, 9th and 10th Generation, Mini 6 and 5, 11 and 12.9-inch, compatible with iPad generations 10/9/8/7/6 and Android Tablets and Phones",
      price: "RS 1500",
      image: "/Products/stylus.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20Stylus%20pen%20for%20iPad,%20iPhone%20&%20Android",
    },
    {
      title: "i7s TWS Wireless Earbuds",
      description:
        "i7s TWS Wireless Earbuds, Bluetooth 5.0, 3D Stereo Sound, Built-in Microphone, Touch Control, Noise Cancelling, Compatible with iPhone and Android",
      price: "RS 1000",
      image: "/Products/i7s.jpg",
      buyLink: "https://wa.me/923289451617?text=I'm%20interested%20in%20i7s%20TWS%20Wireless%20Earbuds",
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
                width={600} // Increased width for better clarity
                height={400} // Increased height for better clarity
                className="object-cover w-full h-64 rounded-xl" // Use object-cover and fixed height for sharpness
                quality={90} // Optional: increase quality for sharper images
                priority={index < 4} // Optional: prioritize loading for first row
              />
              <p className="text-base sm:text-xl text-white mt-4 mb-2">
                {product.title}
              </p>
              <p className="text-sm text-neutral-400">
                {product.description}
              </p>
              <a
                href={product.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 rounded-full px-4 py-2 text-white bg-black mt-4 text-xs font-bold border border-zinc-700"
              >
                <span>Buy now</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  {product.price}
                </span>
              </a>
            </BackgroundGradient>
          ))
        )}
      </div>
    </>
  );
}
