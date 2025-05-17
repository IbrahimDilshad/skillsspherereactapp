"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";



export function TutorOnboardingForm() {
  return (
    <div className="shadow-input mx-auto w-full max-w-xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        Skills Sphere - Tutor Onboarding
      </h2>
      <p className="mb-8 max-w-lg text-sm text-neutral-600 dark:text-neutral-300">
        Please fill out the form below to join Skills Sphere as a tutor.
      </p>
      <form
        className="my-8 space-y-8"
        action="https://getform.io/f/bgdpxmga"
        method="POST"
        encType="multipart/form-data"
      >
        {/* Basic Information */}
        <div className="space-y-6">
          <h3 className="font-semibold mb-4 text-neutral-700 dark:text-neutral-200 text-lg">Basic Information</h3>
          <LabelInputContainer>
            <Label htmlFor="fullname">Full Name</Label>
            <Input id="fullname" name="Full Name" placeholder="Your full name" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="Email" placeholder="you@example.com" type="email" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="phone">Phone WhatsApp Number</Label>
            <Input id="phone" name="Phone" placeholder="+92xxxxxxxxxx" type="tel" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="gender">Gender</Label>
            <Input id="gender" name="Gender" placeholder="Your gender" type="text" required />
          </LabelInputContainer>
        </div>

        {/* Teaching Information */}
        <div className="space-y-6">
          <h3 className="font-semibold mb-4 text-neutral-700 dark:text-neutral-200 text-lg">Teaching Information</h3>
          <LabelInputContainer>
            <Label htmlFor="subjects">Subjects You Can Teach</Label>
            <Input id="subjects" name="Subjects" placeholder="e.g., Math, English, Physics, Urdu" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="classlevels">Class Levels You Teach</Label>
            <Input id="classlevels" name="Class Levels" placeholder="e.g., Grade 1–8, Matric, FSc, O/A Levels" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="teachingmode">Preferred Teaching Mode</Label>
            <select
              id="teachingmode"
              name="Teaching Mode"
              required
              className="p-3 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-200"
            >
              <option value="">Select mode</option>
              <option value="Online">Online</option>
              <option value="In-person">In-person (at student's home)</option>
              <option value="Both">Both</option>
            </select>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="areas">Preferred Areas (if in-person)</Label>
            <Input id="areas" name="Preferred Areas" placeholder="e.g., Shakargarh, Lahore Cantt" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="availability">Availability (Days & Time Slots)</Label>
            <Input id="availability" name="Availability" placeholder="e.g., Mon–Fri, 4pm–8pm" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="salary">Expected Salary / Per Class Fee</Label>
            <Input id="salary" name="Expected Salary" placeholder="e.g., 1000 PKR/class" type="text" />
          </LabelInputContainer>
        </div>

        {/* Qualification & Experience */}
        <div className="space-y-6">
          <h3 className="font-semibold mb-4 text-neutral-700 dark:text-neutral-200 text-lg">Qualification & Experience</h3>
          <LabelInputContainer>
            <Label htmlFor="qualification">Highest Qualification</Label>
            <Input id="qualification" name="Qualification" placeholder="e.g., BS Computer Science, M.A English" type="text" required />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="experience">Years of Teaching Experience</Label>
            <Input id="experience" name="Experience" placeholder="e.g., 3" type="number" min={0} required />
          </LabelInputContainer>
        </div>

        {/* Uploads */}
        <div className="space-y-6">
          <h3 className="font-semibold mb-4 text-neutral-700 dark:text-neutral-200 text-lg">Uploads</h3>
          <LabelInputContainer>
            <Label htmlFor="cv">Upload Your CV / Resume</Label>
            <input
              id="cv"
              name="CV"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              className="block w-full text-sm text-neutral-700 dark:text-neutral-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-200 file:text-neutral-900 hover:file:bg-neutral-300 dark:file:bg-neutral-800 dark:file:text-neutral-100 dark:hover:file:bg-neutral-700"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="picture">Upload Your Picture</Label>
            <input
              id="picture"
              name="Picture"
              type="file"
              accept=".jpg,.jpeg,.png"
              className="block w-full text-sm text-neutral-700 dark:text-neutral-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-neutral-200 file:text-neutral-900 hover:file:bg-neutral-300 dark:file:bg-neutral-800 dark:file:text-neutral-100 dark:hover:file:bg-neutral-700"
            />
          </LabelInputContainer>
        </div>

        {/* Other Info */}
        <div className="space-y-6">
          <h3 className="font-semibold mb-4 text-neutral-700 dark:text-neutral-200 text-lg">Other Info</h3>
          <LabelInputContainer>
            <Label htmlFor="bio">Short Bio or Teaching Philosophy</Label>
            <textarea
              id="bio"
              name="Bio"
              placeholder="Tell us about your approach or passion for teaching"
              className="p-3 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 placeholder-neutral-500 dark:placeholder-neutral-400 w-full h-24 resize-none"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="ref">How Did You Hear About Skills Sphere?</Label>
            <Input id="ref" name="Referral" placeholder="Facebook, Instagram, Friend, etc." type="text" />
          </LabelInputContainer>
        </div>

        {/* Submit Button */}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mt-8"
          type="submit"
        >
          Submit Application
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
