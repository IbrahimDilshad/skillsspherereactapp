"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";


export function ContactForm() {
  return (
    <div className="shadow-none mx-auto w-full max-w-md rounded-none bg-black p-4 md:rounded-2xl md:p-8">
      <h2 className="text-xl font-bold text-white">
        Contact Us
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-300">
        Feel free to reach out to us by filling out the form below.
      </p>

      <form
        className="my-8"
        action="https://formspree.io/f/xdkawkdn"
        method="POST"
      >
        {/* First Name and Last Name */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname" className="text-white">First Name</Label>
            <Input id="firstname" name="firstname" placeholder="John" type="text" required className="bg-black text-white border-neutral-700 placeholder-neutral-400" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname" className="text-white">Last Name</Label>
            <Input id="lastname" name="lastname" placeholder="Doe" type="text" required className="bg-black text-white border-neutral-700 placeholder-neutral-400" />
          </LabelInputContainer>
        </div>

        {/* Email */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="johndoe@example.com"
            type="email"
            required
            className="bg-black text-white border-neutral-700 placeholder-neutral-400"
          />
        </LabelInputContainer>

        {/* Message */}
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message" className="text-white">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="p-3 rounded-md border border-neutral-700 bg-black text-white placeholder-neutral-400 w-full h-32 resize-none"
            required
          />
        </LabelInputContainer>

        {/* Submit Button */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-700 font-medium text-white shadow-none"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>
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
