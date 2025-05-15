import { Loader2 } from "lucide-react";
import { button } from "@/utils/config";
import type { VariantProps } from "tailwind-variants";
type ButtonVariants = VariantProps<typeof button>;
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  loading?: boolean;
}

export const Button = ({
  variant = "primary",
  size,
  rounded,
  loading = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={button({ variant, rounded, size, className })}
      disabled={isDisabled}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
};
