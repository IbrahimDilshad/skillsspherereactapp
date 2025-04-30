"use client";
import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
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