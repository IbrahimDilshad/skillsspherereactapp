"use client";
//import list
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { FeaturesSectionDemo } from "@/components/ui/whychooseusdemo";
import { FeaturesSectionDemo1 } from "@/components/ui/heromain";
import { MultiStepLoaderDemo } from "@/components/ui/howitworks";
import React from "react";
import { TabsDemo } from "@/components/ui/ourpopulars";
import { InfiniteMovingCardsDemo } from "@/components/ui/testimonials";
import { AppleCardsCarouselDemo } from "@/components/ui/applescrolldemo";
import TawkChat from "@/components/ui/chatbot";











//calling components
  export default function App() {
    return (
      <div>
        
        <NavbarDemo/>
        <TawkChat/>
        <FeaturesSectionDemo1/>
        <AppleCardsCarouselDemo/>
        <FeaturesSectionDemo/>
        <MultiStepLoaderDemo/>
        <TabsDemo/>
        <InfiniteMovingCardsDemo/>
        <Footer/>
      </div>
    )
  }
 
