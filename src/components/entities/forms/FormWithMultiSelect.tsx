"use client";
import { User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form } from "@/components/entities";
import { FieldInput, MultiSelectField } from "@/components/features";

import { Min5, required } from "@/utils/config";
import type { IMultiSelectForm } from "@/models/forms";

export const FormWithMultiSelect = () => {
  const form = useForm<IMultiSelectForm>({
    defaultValues: {
      emailOrName: "",
      technologies: [],
    },
    mode: "onBlur",
  });
  const submitHandler = async (data: IMultiSelectForm) => {
    try {
      console.log("data", data);
    } catch (error) {
      console.error("error", error);
    }
  };
  const handleMultiSelectChange = (selectedOption: string) => {
    const currentValues = form.getValues("technologies") || [];
    const exists = currentValues.some(
      (value: string) => value === selectedOption,
    );

    const updatedValues = exists
      ? currentValues.filter((value: string) => value !== selectedOption) // Remove if already selected
      : [...currentValues, selectedOption];

    form.setValue("technologies", updatedValues, { shouldValidate: true });
  };

  const handleMultiSelectClear = () => {
    form.setValue("technologies", [], { shouldValidate: true });
  };

  return (
    <Form form={form} onSubmit={submitHandler}>
      {
        <div className="flex w-full flex-col gap-2">
          <FieldInput
            initType="text"
            Icon={User}
            id="emailOrName"
            name="emailOrName"
            placeholder="Email/Name"
            validation={Min5}
          />
          <MultiSelectField
            options={[
              { label: "Node", value: "node", disabled: true },
              { label: "React", value: "react" },
              { label: "Vue", value: "vue" },
              { label: "Angular", value: "angular" },
              // { label: "Next", value: "next", disabled: true },
            ]}
            name="technologies"
            validation={required}
            value={form.getValues("technologies")}
            onChange={handleMultiSelectChange}
            onClear={handleMultiSelectClear}
          />
        </div>
      }
      {
        <>
          <div className="border-b border-border pt-2 pb-4">
            <button
              aria-label="Submit"
              type="submit"
              // version="outline"
              // size="full"
            >
              Submit
            </button>
          </div>
        </>
      }
    </Form>
  );
};
