"use client";
//imports
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { LampDemo } from "@/components/ui/lampDemo";
import { AnimatedPinDemo }  from "@/components/ui/animatedpindemo";
import { DailyUpdateNotice } from "@/components/ui/DailyUpdateNotice";






// calling components
export default function Bookspagemain() {
  return (
  <div>
  <NavbarDemo />
  <LampDemo />
  <AnimatedPinDemo />
  <DailyUpdateNotice />
  <Footer />
  </div>
  )
}
