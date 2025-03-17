import { Controller, useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/shared";
import type { ICheckbox } from "@/models/inputs";
import type { ValidationTypes } from "@/utils/config";

export interface ICheckboxField extends ICheckbox {
  validation?: ValidationTypes;
}

export const CheckboxField = ({
  id,
  name,
  endAdornment,
  validation = null,
  value,
  label,
}: ICheckboxField) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string;

  return (
    <div
      style={{
        padding: "12px 0",
        borderTop: "1px solid var(--border)",
      }}
    >
      <Controller
        control={control}
        name={name}
        rules={validation || {}}
        render={({ field }) => (
          <Checkbox
            id={id}
            endAdornment={endAdornment}
            checked={!!field.value}
            label={label}
            {...field}
            value={value ? value : field.value}
            error={error}
          />
        )}
      />
    </div>
  );
};
