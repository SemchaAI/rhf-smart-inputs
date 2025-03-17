import { forwardRef } from "react";
import { Check, X } from "lucide-react";
import type { IRadio } from "@/models/inputs";

export const RadioButton = forwardRef<HTMLInputElement, IRadio>(
  ({ id, endAdornment, checked, disabled, value, ...props }, ref) => {
    return (
      <div className="flex items-center gap-2">
        <input
          type="radio"
          ref={ref}
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          className="hidden"
          {...props}
        />
        <label
          htmlFor={id}
          className={`user-select-none flex cursor-pointer items-center gap-1 ${
            disabled ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          <div
            className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
              checked ? "border-primary bg-primary" : "border-border"
            }`}
          >
            {checked && <Check size={18} className="text-dark" />}
            {disabled && <X size={18} className="text-error" />}
          </div>
          <div>{value}</div> {/* Displays the value next to the radio button */}
        </label>
        {endAdornment}
      </div>
    );
  },
);
RadioButton.displayName = "RadioButton";
