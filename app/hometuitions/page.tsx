"use client";
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { Footer } from "@/components/ui/footer";
import { CoverDemo } from "@/components/ui/headerhometuitions";
import { ExpandableCardDemo }  from "@/components/ui/hometutorcards";
import { DailyUpdateNotice } from "@/components/ui/DailyUpdateNotice";

export default function hometuition() {
 

  return (
    <div>
      <NavbarDemo />
      <CoverDemo />
      <ExpandableCardDemo />
      <DailyUpdateNotice />
      <Footer />
    </div>
  );
}
