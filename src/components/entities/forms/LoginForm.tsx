"use client";
import { Link } from "react-router-dom";
import { Github, KeyRound, Plus, User } from "lucide-react";
import { useForm } from "react-hook-form";

import { Form } from "@/components/entities";
import { FieldInput } from "@/components/features";
import { Min5, ReqMin5Max20Validation, ROUTES } from "@/utils/config";
import type { ILoginForm } from "@/models/forms";

export const LoginForm = () => {
  const form = useForm<ILoginForm>({
    defaultValues: {
      emailOrName: "",
      password: "",
    },
    mode: "onBlur",
  });
  const submitHandler = async (data: ILoginForm) => {
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
            id="emailOrName"
            name="emailOrName"
            placeholder="Email/Name"
            validation={Min5}
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
        </div>
      }
      {
        <>
          <div className="border-b border-border pt-2 pb-4">
            <div className="typo-body-16 flex justify-between p-2">
              <p className="">Don`t have an account?</p>
              <Link
                className="flex items-center justify-center gap-1 text-primary hover:underline focus:underline"
                to={ROUTES.SIGNUP}
              >
                Sign up
              </Link>
            </div>
            <button
              aria-label="login"
              type="submit"
              // version="outline"
              // size="full"
            >
              Login
            </button>
          </div>
          <div className="flex justify-between gap-2 pt-5">
            <button
              aria-label="github login"
              // version="outline"
              // size="full"
              className="flex items-center gap-2"
            >
              Github <Github />
            </button>
            <button
              aria-label="google login"
              // version="outline"
              // size="full"
              // onClick={googleHandler}
              className="flex items-center gap-2"
            >
              Google <Plus />
            </button>
          </div>
        </>
      }
    </Form>
  );
};
