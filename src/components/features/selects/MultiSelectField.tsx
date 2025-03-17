import { Controller, useFormContext } from "react-hook-form";
import { MultiSelect, type MultiSelectProps } from "@/components/features";
import type { ValidationTypes } from "@/utils/config";

interface IProps extends MultiSelectProps {
  name: string;
  validation: ValidationTypes;
}

export const MultiSelectField = ({
  options,
  name,
  validation,
  ...rest
}: IProps) => {
  const {
    control,
    formState: { errors },
    //  setValue,
  } = useFormContext();
  const error = errors[name]?.message as string;
  return (
    <div className="flex flex-col">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <MultiSelect options={options} {...field} {...rest} />
        )}
        rules={validation || {}}
      />
      <p className="text-error">{error ? error : ""}</p>
    </div>
  );
};
