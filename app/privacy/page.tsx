"use client";
//import list
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import React from "react";
import PrivacyPolicy from "@/components/ui/policy";
//calling components
  export default function App() {
    return (
      <div>
        <NavbarDemo/>
        <PrivacyPolicy/>
        <Footer/>
      </div>
    )
  }