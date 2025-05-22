"use client";
//import list
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import React from "react";
import TermsandConditions  from "@/components/ui/terms";
//calling components
  export default function App() {
    return (
      <div>
        <NavbarDemo/>
        <TermsandConditions/>
        <Footer/>
      </div>
    )
  }