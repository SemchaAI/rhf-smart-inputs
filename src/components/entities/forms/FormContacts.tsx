import { useForm } from "react-hook-form";
import { Calendar, Phone, User } from "lucide-react";

import { Form } from "./Form";
import { FieldInput, TextArea } from "@/components/features";
import { Min5, required } from "@/utils/config";
import type { IContactsForm } from "@/models/forms";
import { Age } from "@/utils/config/validationObjects";

export const FormContacts = () => {
  const form = useForm<IContactsForm>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "onBlur",
  });
  const submitHandler = async (data: IContactsForm) => {
    //const { email, name, password } = data;
    try {
      console.log("ContactsForm", data);
    } catch (error) {
      console.log("[ContactsForm]", error);
    }
  };

  return (
    <Form form={form} onSubmit={submitHandler}>
      {
        <div className="flex w-full flex-col gap-2">
          <FieldInput
            initType="text"
            Icon={User}
            id="name"
            name="name"
            placeholder="name"
            validation={Min5}
          />
          <FieldInput
            initType="number"
            Icon={Calendar}
            id="number"
            name="number"
            placeholder="Age(must be over 18) optional"
            validation={Age}
          />
          <FieldInput
            initType="text"
            Icon={Phone}
            id="email"
            name="email"
            placeholder="example@example.com"
            validation={required}
          />
          <TextArea id="message" placeholder="Your message here" />
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
