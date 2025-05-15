import { useForm } from "react-hook-form";
import { Calendar, Mail, Phone, User } from "lucide-react";

import { Form } from "./Form";
import { FieldUnmaskedInput } from "@/components/features";

import { zodResolver } from "@hookform/resolvers/zod";
import { type userBaseSchema, UserBaseSchema } from "@/utils/config/zod";

interface IProps {
  type: "Create" | "Update";
  formData?: Partial<userBaseSchema>;
}

export const FormSimpleInputs = ({ formData, type }: IProps) => {
  const form = useForm({
    resolver: zodResolver(UserBaseSchema),
    defaultValues: {
      name: formData?.name,
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      phone: formData?.phone,
    },
    mode: "onSubmit",
  });
  const submitHandler = async (data: userBaseSchema) => {
    let response: { isSuccess: boolean; message: string };
    try {
      console.log("UserSimpleForm", data);
      switch (type) {
        case "Create":
          // response = await createTeacher(formData);
          response = { isSuccess: true, message: "Success" };
          break;
        case "Update":
          // response = await updateTeacher(formData);
          response = { isSuccess: true, message: "Success" };
          break;
        default:
          throw new Error(`Unknown operation type: ${type}`);
      }

      if (response.isSuccess) {
        //toast.success(response.message);
        console.log(response.message);
        //if modal: onClose()
      } else {
        form.setError("name", { message: response.message });
      }
    } catch (error) {
      console.log("[UserSimpleForm]", error);
    }
  };

  return (
    <Form form={form} onSubmit={submitHandler}>
      {
        <div className="flex w-full flex-col gap-2">
          <FieldUnmaskedInput
            id="name"
            label="User name:"
            type="text"
            Icon={User}
            placeholder="Select name..."
          />
          <FieldUnmaskedInput
            id="firstName"
            label="First name:"
            type="text"
            Icon={User}
            placeholder="Select first name..."
          />
          <FieldUnmaskedInput
            id="lastName"
            label="Last name:"
            type="text"
            Icon={User}
            placeholder="Select last name..."
          />
          <FieldUnmaskedInput
            id="phone"
            label="Phone:"
            type="tel"
            Icon={Phone}
            placeholder="+373 99-99-99-99"
          />
          <FieldUnmaskedInput
            id="email"
            label="Email:"
            type="email"
            Icon={Mail}
            placeholder="Select email..."
          />
          <FieldUnmaskedInput
            id="birthday"
            label="Birthday:"
            type="date"
            Icon={Calendar}
            defaultValue={formData?.birthday?.toISOString().split("T")[0]}
          />
        </div>
      }
      {
        <div className="border-b border-border pt-2 pb-4">
          <button
            aria-label="sign up"
            type="submit"
            // version="outline"
            // size="full"
          >
            Sign up
          </button>
        </div>
      }
    </Form>
  );
};
