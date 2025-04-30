"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { ThreeDMarqueeDemoSecond } from "@/components/ui/3dmarqeedemo";
import { Footer } from "@/components/ui/footer";





 
  //calling components
  export default function blog() {
    return (
      <div>
        <NavbarDemo/>
        <ThreeDMarqueeDemoSecond/>
        <Footer/>
      </div>
    )
  }