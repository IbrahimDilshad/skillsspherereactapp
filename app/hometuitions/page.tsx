"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { ExpandableCardDemo } from "@/components/ui/hometutorcards";
import { CoverDemo } from "@/components/ui/headerhometuitions";
import SearchBarDemo from "@/components/ui/SearchBarDemo";

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
