"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { SparklesPreview } from "@/components/ui/sparklePreview";
import { TimelineDemo } from "@/components/ui/timeLinedemo";
import {Footer} from "@/components/ui/footer";





//calling components
  export default function About() {
    return (
      <div>
        <NavbarDemo/>
        <SparklesPreview/>
        <TimelineDemo/>
        <Footer/>
      </div>
    )
  }