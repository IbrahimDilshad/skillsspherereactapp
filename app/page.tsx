"use client";
//import list
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
} from "../components/ui/resizable-navbar";
import createGlobe from "cobe";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Tabs } from "@/components/ui/tabs";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconSquareRoundedX, IconTerminal2 } from "@tabler/icons-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


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
            <NavbarButton href="/login" variant="secondary">Login</NavbarButton>
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

//hero content
export function FeaturesSectionDemo1() {
  const features = [
   
    {
      title: "",
      description:
        "",
      skeleton: <SkeletonTwo />,
      className: "col-span-1 lg:col-span-7",
    },
  ];
  return (
    <div className="relative z-20 py-10 mx-w-7xl mx-auto lg:col-span-3 lg:flex lg:flex-row items-start ">
      <div className="px-8 flex-1 lg:mt-40">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-xl mx-auto text-left tracking-tight font-medium text-black dark:text-white">
          Empowering you with the skills of tomarrow
        </h4>

        <p className="px-8 text-sm lg:text-base  max-w-2xl  my-4 text-neutral-500 text-left font-normal dark:text-neutral-300">
         From creative design to cutting edge Development.
        Skills Sphere offers premium Courses, E-books, Products,
         and Expert-led training to help you grow faster and smarter. Your Success starts here.
        </p>

        <p className ="px-8 text-sm lg:text-base  max-w-2xl  my-4 text-neutral-500 text-left font-normal dark:text-">
          Explore our courses and ebooks to unlock your potential.
        </p>
      <div className="px-8 flex flex-row gap-5 mt-5">
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="a"
        href="/courses"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span>Courses</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="a"
        href="/books"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        
        <span>Ebooks</span>
      </HoverBorderGradient>
      
      
      
      </div>
      <p className ="px-8 text-sm lg:text-base  max-w-2xl  my-4 text-neutral-500 text-left font-normal dark:text-">
          Confused? Contact on <a className="text-cyan-500" href="">Whatsapp </a> OR <a className="text-cyan-500" href="">Email </a>  to get a free consultation.
        </p>
      </div>

      

      <div className="relative flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-7">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}
// hero cards
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};
//hero content globe etc
const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

//featre hero description
const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

//skeleton
export const SkeletonTwo = () => {
  return (
    <div className="h-[500px] md:h-[600px]  flex flex-col items-center relative bg-transparent dark:bg-transparent">
      <Globe className="absolute -right-10 md:-right-10 -bottom-30 md:-bottom-30" />
    </div>
  );
};
//globe
export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // state will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};




//why choose us 
export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="relative z-10 py-5 max-w-7xl mx-auto">
      <h2 className="max-w-7xl pl-2 mx-auto text-xl text-center justify-center md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-5">
        Why choose us?
      </h2>
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-5 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}
 
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    
      
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
//why choose us end
//how it works
const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];
 
export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full flex flex-center">
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto py-20">
      <p  className="lg:text-7xl md:text-base text-neutral-500 dark:text-neutral-300 mt-2">
      How it works
      </p>
      <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-300 mt-2 mb-2">

        Dicouver our process of getting you started with us.
      </p>
      <HoverBorderGradient
        onClick={() => setLoading(true)}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        style={{
          boxShadow:
            "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load
      </HoverBorderGradient>
      
     </div>
     
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
 
      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
     
 
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
   
  );
}
//our populars
export function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Product Tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Random tab</p>
          <DummyContenttabs />
        </div>
      ),
    },
  ];
 
  return (
    
    <div className="h-[30rem] md:h-[50rem] [perspective:1000px] relative flex flex-col max-w-7xl mx-auto w-full  items-start justify-start my-40">
     <div>
     <h2 className="max-w-7xl pl-2 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-5">
        Get to know your iSad.
      </h2>
        
     </div>
      <Tabs tabs={tabs} />
    </div>
  );
}
 
const DummyContenttabs = () => {
  return (
    <img
      src="/images/Screenshot 2025-01-28 131328.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-contain object-left-top h-[60%]  md:h-[90%] absolute inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
//our populars end 


//testimonial
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased dark:transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div>
      <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-5">
        What our customers say.
      </h2>
      </div>
    <div className="h-[20rem] rounded-md flex flex-col antialiased dark:transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}
 
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
//testimonial end
//apple scroll
export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));
 
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
 
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="/images/stamp logo.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
 
const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/images/stamp logo.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src:  "/images/stamp logo.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src:  "/images/stamp logo.png",
    content: <DummyContent />,
  },
 
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src:  "/images/stamp logo.png",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/images/stamp logo.png",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/images/stamp logo.png",
    content: <DummyContent />,
  },
];


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
  export default function App() {
    return (
      <div>
        <NavbarDemo/>
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
 
