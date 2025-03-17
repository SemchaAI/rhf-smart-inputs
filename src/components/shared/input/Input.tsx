import { forwardRef } from "react";
import type { IInput } from "@/models/inputs";

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ className = "", rounded, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`${
          rounded ? "rounded-full px-4 py-2" : "rounded-md p-2"
        } w-full border border-border bg-background text-text-primary outline-none ${className}`}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
