import { tv } from "tailwind-variants";

export const button = tv({
  base: "inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed",

  variants: {
    variant: {
      primary: "bg-primary text-text-highlight hover:bg-primary",
      secondary:
        "bg-primary text-text-primary hover:text-white hover:bg-primary-action",
      danger: "bg-error text-white hover:bg-error-highlight",
      outline:
        "border border-border bg-transparent text-text-highlight hover:bg-foreground",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    size: {
      default: "w-fit",
      full: "w-full",
    },
  },

  defaultVariants: {
    variant: "primary",
    rounded: "md",
    size: "default",
  },
});
