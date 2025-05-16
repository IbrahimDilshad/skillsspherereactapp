"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { TutorOnboardingForm } from "@/components/ui/tutorforms";
//calling components
  export default function contact() {
    return (
      <div>
        <NavbarDemo/>
        <TutorOnboardingForm/>
        <Footer/>
      </div>
    )
  }