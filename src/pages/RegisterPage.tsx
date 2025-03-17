import { FormMaskTest, RegisterForm } from "@/components/entities";

import { Container } from "@/components/shared";

export const RegisterPage = () => {
  return (
    <section className="flex grow">
      <Container>
        <div className="flex h-full flex-col items-center justify-center gap-0">
          <p className="flex flex-col items-center text-xl">
            This page demonstration for smart inputs with rhf
            <span className="text-error">*check console log on submit</span>
            <span className="text-error">mask config</span>
            <span>
              <span className="text-error">a</span> - any char
            </span>
            <span>
              <span className="text-error">9</span> - any number
            </span>
            <span>
              <span className="text-error">{"{xyz}"}</span> - fixed content
            </span>
          </p>
          <h1 className="text-3xl">Register Page</h1>
          <RegisterForm />

          <br className="my-5" />
          <h1 className="text-3xl">Some title</h1>
          <FormMaskTest />
        </div>
      </Container>
    </section>
  );
};
