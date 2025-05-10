"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { TypewriterEffectSmoothDemo } from "@/components/ui/productheader";
import { BackgroundGradientDemo } from "@/components/ui/productcard";

//calling components
  export default function product() {
    return (
      <div>
        <NavbarDemo/>
        <TypewriterEffectSmoothDemo/>
        <BackgroundGradientDemo/>
        <Footer/>
      </div>
    )
  }