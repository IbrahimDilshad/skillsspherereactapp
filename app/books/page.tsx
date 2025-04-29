"use client";
//imports
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from "framer-motion";
import { useState } from "react";



// hero lamp
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-0 bg-gradient-to-br from-gray-300 to-white-500 bg-clip-text text-center font-medium tracking-tight text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Wisdom Begins In <br /> A Wounder
      </motion.h1>
    </LampContainer>
  );
}

// ebooks

export function AnimatedPinDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
    <div className="mt-0 mb-40 mx-auto w-7xl  items-center justify-center ">
      <PinContainer
        title="Download"
        href="https://skillssphere.site"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
            width={1000}
            height={1000}
              src="/images/stamp logo.png"
              alt="aceternity"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
    <div className="mt-0 mb-40 mx-auto w-7xl  items-center justify-center ">
      <PinContainer
        title="/Download"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
            width={1000}
            height={1000}
              src="/images/stamp logo.png"
              alt="aceternity"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
    <div className="mt-0 mb-40 mx-auto w-7xl  items-center justify-center ">
      <PinContainer
        title="/Download"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
            width={1000}
            height={1000}
              src="/images/stamp logo.png"
              alt="aceternity"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
    <div className="mt-0 mb-40 mx-auto w-7xl  items-center justify-center ">
      <PinContainer
        title="/Download"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
            width={1000}
            height={1000}
              src="/images/stamp logo.png"
              alt="aceternity"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
    <div className="mt-0 mb-40 mx-auto w-7xl  items-center justify-center ">
      <PinContainer
        title="/Download"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
            width={1000}
            height={1000}
              src="/images/stamp logo.png"
              alt="aceternity"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
    <div className="mt-0 mb-40 mx-auto w-7xl  items-center justify-center ">
      <PinContainer
        title="/Download"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <Image
            width={1000}
            height={1000}
              src="/images/stamp logo.png"
              alt="aceternity"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </PinContainer>
    </div>
    </div>
  );
}
//ebook ends


// calling components
export default function Bookspagemain() {
  return (
  <div>
  <NavbarDemo />
  <LampDemo />
  <AnimatedPinDemo />
  <Footer />
  </div>
  )
}
