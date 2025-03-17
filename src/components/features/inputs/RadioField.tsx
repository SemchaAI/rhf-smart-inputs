import { RadioButton } from "@/components/shared";
import { IRadio } from "@/models/inputs";
import { useFormContext } from "react-hook-form";

export const RadioField = ({
  id,
  name,
  value,
  validation,
  endAdornment,
}: IRadio) => {
  const { register, watch } = useFormContext();
  const formValue = watch(name);

  return (
    <RadioButton
      id={id}
      {...register(name, validation || {})}
      value={value}
      checked={formValue === value}
      endAdornment={endAdornment}
      validation={validation}
    />
  );
};
