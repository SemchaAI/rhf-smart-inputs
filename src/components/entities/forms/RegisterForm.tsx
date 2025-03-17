import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AtSign, Github, KeyRound, Phone, Plus, User } from "lucide-react";

import { Form } from "./Form";
import { FieldInput } from "@/components/features";
import {
  emailValidation,
  Min5,
  ReqMin5Max20Validation,
  required,
} from "@/utils/config";
import { ROUTES } from "@/utils/config";

import type { IRegistrationForm } from "@/models/forms";

export const RegisterForm = () => {
  const form = useForm<IRegistrationForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
    mode: "onBlur",
  });
  const submitHandler = async (data: IRegistrationForm) => {
    //const { email, name, password } = data;
    try {
      console.log("data", data);
    } catch (error) {
      console.log("[RegisterForm]", error);
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
            initType="email"
            Icon={AtSign}
            id="email"
            name="email"
            placeholder="email"
            validation={emailValidation}
          />
          <FieldInput
            initType="text"
            Icon={Phone}
            id="phone"
            name="phone"
            placeholder="Masked input:+373 (99) 99-99-99"
            mask="+{373} (99) 99-99-99"
            unmask
            validation={required}
          />
          <FieldInput
            initType="password"
            Icon={KeyRound}
            id="password"
            name="password"
            placeholder="password"
            validation={ReqMin5Max20Validation}
            EyeIcon
          />
          <FieldInput
            initType="password"
            Icon={KeyRound}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            validation={{
              validate: (value: string) => {
                const formValues = form.getValues();
                if (formValues.password && value !== formValues.password) {
                  return "Passwords do not match";
                }
                return undefined;
              },
            }}
          />
        </div>
      }
      {
        <>
          <div className="border-b border-border pt-2 pb-4">
            <div className="typo-body-16 flex justify-between p-2">
              <p>Already have an account?</p>
              <Link
                className="flex items-center justify-center gap-1 text-primary hover:underline focus:underline"
                to={ROUTES.LOGIN}
              >
                Sign in
              </Link>
            </div>
            <button
              aria-label="sign up"
              type="submit"
              // version="outline"
              // size="full"
            >
              Sign up
            </button>
          </div>
          <div className="flex gap-2 pt-5">
            <button
              aria-label="github sign up"
              // version="outline"
              // size="full"
              // onClick={googleHandler}
            >
              Github <Github />
            </button>
            <button
              aria-label="google sign up"
              // version="outline"
              // size="full"
              // onClick={googleHandler}
            >
              Google <Plus />
            </button>
          </div>
        </>
      }
    </Form>
  );
};
