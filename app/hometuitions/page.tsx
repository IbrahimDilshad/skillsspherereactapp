"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { CoverDemo } from "@/components/ui/headerhometuitions";
import { ExpandableCardDemo }  from "@/components/ui/hometutorcards";


export default function hometuition() {
 

  return (
    <div>
      <NavbarDemo />
      <CoverDemo />
      <ExpandableCardDemo />
      <Footer />
    </div>
  );
}
