import { useForm } from "react-hook-form";
import { Calendar, Mail, Phone, User } from "lucide-react";

import { Form } from "./Form";
import { FieldUnmaskedInput, SelectField } from "@/components/features";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  type userBaseSchema,
  UserBaseSchema,
  UserSex,
} from "@/utils/config/zod";
import type { IUserFormProps } from "@/models/zodForms";
import { Button } from "@/components/shared";

export const FormSimpleInputs = ({
  formData,
  type,
  subjectOptions,
}: IUserFormProps) => {
  console.log("📦📦📦FormSimpleInputs was loaded ...");
  const form = useForm({
    resolver: zodResolver(UserBaseSchema),
    defaultValues: {
      name: formData?.name,
      firstName: formData?.firstName,
      lastName: formData?.lastName,
      email: formData?.email,
      phone: formData?.phone,
      sex: formData?.sex,
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
        <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
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
          <SelectField
            options={Object.values(UserSex).map((sex) => ({
              label: sex.charAt(0).toUpperCase() + sex.slice(1).toLowerCase(),
              value: sex,
            }))}
            name="sex"
            label="Sex:"
            menuPortalTarget={document.body}
          />
          <div className="w-full md:w-[243px]">
            <SelectField
              name="subjects"
              label="Subjects:"
              options={
                subjectOptions?.map((subject) => ({
                  label: subject.label,
                  value: subject.value.toString(),
                })) ?? []
              }
              isLoading={subjectOptions === undefined}
              isDisabled={subjectOptions === undefined}
              isMulti
              isClearable
              isSearchable
              menuPortalTarget={document.body}
            />
          </div>
        </div>
      }
      {
        <div className="flex pt-2">
          <Button
            size="full"
            variant="outline"
            aria-label="sign up"
            type="submit"
          >
            Submit
          </Button>
        </div>
      }
    </Form>
  );
};
