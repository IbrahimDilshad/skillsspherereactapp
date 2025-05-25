"use client";
//imports
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { MacbookScrollDemo } from "@/components/ui/macbookscrolldemo";
import { Footer } from "@/components/ui/footer";
import { SearchBarDemo } from "@/components/ui/fallowingpointerDemo";
import { DailyUpdateNotice } from "@/components/ui/DailyUpdateNotice";



//calling components
export default function CoursesPage() {
  return (
    <div className="relative w-full">
      <NavbarDemo />
      <MacbookScrollDemo />
      <SearchBarDemo />
      <DailyUpdateNotice />
      <Footer />
    </div>
  );
}
