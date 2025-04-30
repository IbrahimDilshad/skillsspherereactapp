"use client";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
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