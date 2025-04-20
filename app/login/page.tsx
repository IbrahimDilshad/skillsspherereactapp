"use client";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/firebaseConfig";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { IconBrandGoogle } from "@tabler/icons-react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

const SignInWithPopup = () => {
  const signIn = () => {
    // Ensure the code runs only on the client side
    if (typeof window !== "undefined") {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (credential) {
            const token = credential.accessToken;
            console.log("Access Token:", token);
          } else {
            console.error("Credential is null");
          }

          const user = result.user;
          console.log("User signed in:", user);
        })
        .catch((error) => {
          console.error("Error during sign-in:", error);
        });
    }
  };
}

//form
export function SignupFormDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted");
    };
    return (
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Welcome to Aceternity
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>
   
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>
          
   
          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
   
          <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
   
          <div className="flex flex-col space-y-4">
           
            <button
              className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
              type="submit"
              onClick={SignInWithPopup}
              
            >
              <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                Google
              </span>
              <BottomGradient />
            </button>
          </div>
        </form>
      </div>
    );
  }
   
  const BottomGradient = () => {
    return (
      <>
        <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
        <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
      </>
    );
  };
   
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex w-full flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };

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

// Calling components
  export default function contact() {
    return (
      <div>
        <SignupFormDemo/>
        <Footer/>
      </div>
    )
  }