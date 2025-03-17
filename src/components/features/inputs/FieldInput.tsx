import { useRef, useState } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Eye, EyeOff, X } from "lucide-react";

import { Input } from "@/components/shared";
import { applyMask, removeMask } from "@/utils";
import type { ValidationTypes } from "@/utils/config";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  EyeIcon?: boolean;
  validation: ValidationTypes;
  initType: string;
  placeholder: string;
  name: string;
  mask?: string;
  unmask?: boolean; // If true, store only the unmasked value
}

export const FieldInput = ({
  id,
  Icon,
  EyeIcon,
  initType = "text",
  validation,
  mask,
  unmask = false,
  ...rest
}: IProps) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();
  const rawValue = useWatch({ name: id }) || "";
  const error = errors[id]?.message as string;
  const [type, setType] = useState(initType);
  const inputRef = useRef<HTMLInputElement>(null);

  const maskedValue = mask && rawValue ? applyMask(rawValue, mask) : rawValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const currentCursor = input.selectionStart ?? maskedValue.length;
    const inputValue = input.value;

    const formattedValue = applyMask(inputValue, mask!);
    const unmaskedValue = mask && unmask && removeMask(formattedValue, mask!);
    setValue(id, unmask ? unmaskedValue : formattedValue);

    if (maskedValue === formattedValue && currentCursor > 0) {
      requestAnimationFrame(() => {
        if (inputRef.current) {
          inputRef.current.setSelectionRange(currentCursor, currentCursor);
        }
      });
    }
  };

  const onClickClear = () => {
    setValue(id, "");
  };

  return (
    <div className="flex flex-col gap-px">
      <div className="relative flex">
        {Icon && <Icon className="absolute left-3 flex translate-y-1/2" />}
        <Controller
          control={control}
          name={id} // Store only unmasked value in the form
          render={({ field }) => (
            <Input
              {...field}
              ref={inputRef}
              value={maskedValue} // Always show masked value in UI
              className="pt-2.5 pr-5 pb-2.5 pl-10 focus:border-primary"
              type={type}
              {...rest}
              onBlur={field.onBlur}
              onChange={mask ? handleChange : field.onChange}
            />
          )}
          rules={validation || {}}
        />
        {EyeIcon && (
          <button
            className="absolute right-3 flex translate-y-1/2"
            onClick={() =>
              setType((prev) => (prev === "text" ? "password" : "text"))
            }
            type="button"
          >
            {type === "password" ? (
              <Eye className="cursor-pointer transition-colors hover:stroke-primary focus:stroke-primary" />
            ) : (
              <EyeOff className="cursor-pointer transition-colors hover:stroke-primary focus:stroke-primary" />
            )}
          </button>
        )}
        {!EyeIcon && rawValue ? (
          <X
            className="absolute right-3 flex translate-y-1/2 cursor-pointer transition-colors hover:stroke-primary focus:stroke-primary"
            onClick={onClickClear}
            role="button"
          />
        ) : null}
      </div>
      {validation && (
        <p className="flex h-6 items-center pl-3 text-error">{error}</p>
      )}
    </div>
  );
};
