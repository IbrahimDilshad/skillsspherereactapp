"use client";
//import list
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import React from "react";
import { FAQs } from "@/components/ui/faqs";
//calling components
  export default function App() {
    return (
      <div>
        <NavbarDemo/>
        <FAQs/>
        <Footer/>
      </div>
    )
  }