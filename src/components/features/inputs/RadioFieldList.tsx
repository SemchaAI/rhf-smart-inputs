import { useFormContext } from "react-hook-form";
import { RadioField } from "./RadioField";
import type { ValidationTypes } from "@/utils/config";

interface IProps {
  validation: ValidationTypes;
  items: { label: string; value: string; id: string }[];
  label: string;
  name: string;
}

export const RadioFieldList = ({ items, label, name, validation }: IProps) => {
  const { formState } = useFormContext();
  const error = formState.errors[name]?.message as string;
  return (
    <div>
      <div className="flex gap-4">
        <p>{label}</p>
        <div className="flex w-full gap-2">
          {items.map((item) => (
            <RadioField
              key={item.id}
              id={item.id}
              name={name}
              value={item.value}
              validation={validation}
            />
          ))}
        </div>
      </div>
      {validation && (
        <p className="flex h-6 items-center text-error">{error}</p>
      )}
    </div>
  );
};
