import { User } from "lucide-react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/entities";
import {
  CheckboxField,
  FieldInput,
  RadioFieldList,
} from "@/components/features";
import { emailValidation, required } from "@/utils/config";
import type { ICheckBoxRadioButtonsForm } from "@/models/forms";

const radioItems = [
  { label: "Male", value: "male", id: "male" },
  { label: "Female", value: "female", id: "female" },
  { label: "Other", value: "other", id: "other" },
];

export const CheckBoxRadioButtonsForm = () => {
  const form = useForm<ICheckBoxRadioButtonsForm>({
    defaultValues: {
      email: "",
      politics: false,
      spy: true,
    },
    mode: "onBlur",
  });
  const submitHandler = async (data: ICheckBoxRadioButtonsForm) => {
    try {
      console.log("data", data);
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <Form form={form} onSubmit={submitHandler}>
      {
        <div className="flex w-full flex-col gap-2">
          <FieldInput
            initType="text"
            Icon={User}
            id="email"
            name="email"
            placeholder="Email"
            validation={emailValidation}
          />
          <RadioFieldList
            items={radioItems}
            label="Gender:"
            name="gender"
            validation={required}
          />
          <CheckboxField
            id="politics"
            name="politics"
            label="I agree to terms and conditions"
            value="testDATA"
            validation={required}
          />
          <CheckboxField
            id="spy"
            name="spy"
            label="I agree to anonymous sending of data"
          />
        </div>
      }
      {
        <div className="border-b border-border pt-2 pb-4">
          <button
            aria-label="submit"
            type="submit"
            // version="outline"
            // size="full"
          >
            Submit
          </button>
        </div>
      }
    </Form>
  );
};
