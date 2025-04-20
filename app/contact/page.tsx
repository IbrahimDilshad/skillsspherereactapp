"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandGoogle } from "@tabler/icons-react";
import { IconBrandOnlyfans } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

//navbar
export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Home Tuitions",
      link: "/hometuitions",
    },
    {
        name: "Products",
        link: "/products",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Navbar */}


    </div>
  );
}


 

//footer
export function Footer() {
  return (
    <div>
    <div className="lg:flex lg:flex-row bg-neutral-100 dark:bg-neutral-900">
      <div className="flex flex-col w-full max-w-7xl mx-auto">
      <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-black dark:text-white mt-10 mx-5">
          Skills Sphere
        </h4>
        <p className="text-sm lg:text-base  max-w-2xl text-neutral-500 text-left font-normal dark:text-neutral-300 mx-5">
            Empowering Your Growth <br />Project of IDs Corporations
        </p>
      </div>
      <div className="flex flex-col w-full max-w-7xl mt-5 mx-auto">
        <h3 className="text-2xl lg:text-3xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-black dark:text-white mt-10 mx-5">
      Quick Links
        </h3>
          <ul>
            <li>
              <a href="/about" className="text-neutral-500 dark:text-neutral-300 mx-5">About Us</a>
            </li>
            <li>
              <a href="/contact" className="text-neutral-500 dark:text-neutral-300 mx-5">Contact Us</a>
            </li>
            <li>
              <a href="/courses" className="text-neutral-500 dark:text-neutral-300 mx-5">Courses</a>
            </li>
            <li>
              <a href="/blogs" className="text-neutral-500 dark:text-neutral-300 mx-5">blogs</a>
            </li>
            <li>
              <a href="/products" className="text-neutral-500 dark:text-neutral-300 mx-5">Products</a>
            </li>
            <li>
              <a href="/hometuitions" className="text-neutral-500 dark:text-neutral-300 mx-5">Home Tuitions</a>
            </li>
            <li>
              <a href="/books" className="text-neutral-500 dark:text-neutral-300 mx-5">Books</a>
            </li>
          </ul>
      </div>

      <div className="flex flex-col w-full max-w-7xl mt-5 mx-auto">
        <h3 className="text-2xl lg:text-3xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-black dark:text-white mt-10 mx-5">
          Resources
        </h3>
          <ul>
            <li>
              <a href="/about" className="text-neutral-500 dark:text-neutral-300 mx-5">Faqs</a>
            </li>
            <li>
              <a href="/contact" className="text-neutral-500 dark:text-neutral-300 mx-5">Privacy Policy</a>
            </li>
            <li>
              <a href="/courses" className="text-neutral-500 dark:text-neutral-300 mx-5">Terms & Conditions</a>
            </li>
            <li>
              <a href="/blogs" className="text-neutral-500 dark:text-neutral-300 mx-5">Support</a>
            </li>
            <li>
              <a href="/products" className="text-neutral-500 dark:text-neutral-300 mx-5">Become a tutor</a>
            </li>
          </ul>
      </div>
      <div className="flex flex-col w-full max-w-7xl mx-auto">
      <h4 className="text-2xl lg:text-3xl lg:leading-tight max-w-xl text-left tracking-tight font-medium text-black dark:text-white mt-10 mx-5">
          Contact info
        </h4>
        <p className="text-sm lg:text-base  max-w-2xl text-neutral-500 text-left font-normal dark:text-neutral-300 mx-5">
           Email: sillzsphere@gmail.com<br />
           Phone: +92 3706777957<br />
           Address: PCSIR Phase 1, Lahore
        </p>
      </div>
    </div>
    <div>
      <p className="text-sm lg:text-base  max-w-2xl text-neutral-500 text-center font-normal dark:text-neutral-300 mxauto">
        © 2023 Skills Sphere. All rights reserved.
      </p>
    </div>
    </div>
  );
}
//footerend


//calling components
  export default function contact() {
    return (
      <div>
        <NavbarDemo/>
        <Footer/>
      </div>
    )
  }
