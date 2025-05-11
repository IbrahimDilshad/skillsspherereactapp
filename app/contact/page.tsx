"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import  ContactForm  from "@/components/ui/conactfor";



 




//calling components
  export default function contact() {
    return (
      <div>
        <NavbarDemo/>
        <ContactForm/>
        <Footer/>
      </div>
    )
  }
