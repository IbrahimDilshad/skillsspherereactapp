import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn("px-4 py-2 rounded-md bg-white text-black hover:bg-gray-100", className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
