"use client";
//imports
import { NavbarDemo } from "@/components/ui/navbarDemo";
import { MacbookScrollDemo } from "@/components/ui/macbookscrolldemo";
import { Footer } from "@/components/ui/footer";
import { FollowingPointerDemo } from "@/components/ui/fallowingpointerDemo";




//calling components
export default function CoursesPage() {
  return (
    <div className="relative w-full">
      <NavbarDemo />
      <MacbookScrollDemo />
      <FollowingPointerDemo />
      <Footer />
    </div>
  );
}
