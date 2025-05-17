import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        // Use dark mode colors for both light and dark
        "px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
