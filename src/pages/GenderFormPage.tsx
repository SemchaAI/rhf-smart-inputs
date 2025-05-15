import { CheckBoxRadioButtonsForm } from "@/components/entities";
import { Container } from "@/components/shared";

export default function GenderFormPage() {
  return (
    <section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl">
            Radio buttons and Checkboxes implementation
          </h1>
          <CheckBoxRadioButtonsForm />
        </div>
      </Container>
    </section>
  );
}
