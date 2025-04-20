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
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
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


  //hero
  export function ThreeDMarqueeDemoSecond() {
    const images = [
      "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
      "https://assets.aceternity.com/animated-modal.png",
      "https://assets.aceternity.com/animated-testimonials.webp",
      "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
      "https://assets.aceternity.com/github-globe.png",
      "https://assets.aceternity.com/glare-card.png",
      "https://assets.aceternity.com/layout-grid.png",
      "https://assets.aceternity.com/flip-text.png",
      "https://assets.aceternity.com/hero-highlight.png",
      "https://assets.aceternity.com/carousel.webp",
      "https://assets.aceternity.com/placeholders-and-vanish-input.png",
      "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
      "https://assets.aceternity.com/signup-form.png",
      "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
      "https://assets.aceternity.com/spotlight-new.webp",
      "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
      "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
      "https://assets.aceternity.com/tabs.png",
      "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
      "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
      "https://assets.aceternity.com/glowing-effect.webp",
      "https://assets.aceternity.com/hover-border-gradient.png",
      "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
      "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
      "https://assets.aceternity.com/macbook-scroll.png",
      "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
      "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
      "https://assets.aceternity.com/multi-step-loader.png",
      "https://assets.aceternity.com/vortex.png",
      "https://assets.aceternity.com/wobble-card.png",
      "https://assets.aceternity.com/world-map.webp",
    ];
    return (
      <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
        <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
          This is your life and it&apos;s ending one{" "}
          <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
            moment
          </span>{" "}
          at a time.
        </h2>
        <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
          You are not your job, you&apos;re not how much money you have in the
          bank. You are not the car you drive. You&apos;re not the contents of
          your wallet.
        </p>
   
        <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
            Join the club
          </button>
          <button className="rounded-md border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
            Read more
          </button>
        </div>
   
        {/* overlay */}
        <div className="absolute inset-0 z-10 h-full w-full bg-black/80 dark:bg-black/40" />
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
    );
  }
  //hero end
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
  export default function blog() {
    return (
      <div>
        <NavbarDemo/>
        <ThreeDMarqueeDemoSecond/>
        <Footer/>
      </div>
    )
  }