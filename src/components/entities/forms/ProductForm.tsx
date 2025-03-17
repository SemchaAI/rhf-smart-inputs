import { Box, DollarSign } from "lucide-react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/entities";
import { FieldInput, FileField } from "@/components/features";
import { Min5, required } from "@/utils/config";
import type { IProductForm } from "@/models/forms";

export const ProductForm = () => {
  const form = useForm<IProductForm>({
    defaultValues: {
      name: "",
    },
    mode: "onBlur",
  });
  const submitHandler = async (data: IProductForm) => {
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
            Icon={Box}
            id="name"
            name="name"
            placeholder="name"
            validation={Min5}
          />
          <FieldInput
            initType="number"
            Icon={DollarSign}
            id="price"
            name="price"
            placeholder="price"
            validation={required}
          />
          <FileField
            id="images"
            text="Upload images"
            accept="image/png,image/webp"
            minFiles={1}
            maxFiles={5}
            maxFileSize={5 * 1024 * 1024}
            multiple
          />
          <FileField
            id="video"
            text="Upload video"
            accept="video/webm,video/mp4"
            maxFileSize={5 * 1024 * 1024 * 1024}
            maxFiles={1}
          />
        </div>
      }
      {
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
      }
    </Form>
  );
};
