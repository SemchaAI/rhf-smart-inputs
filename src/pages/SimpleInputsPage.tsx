import { FormSimpleInputs } from "@/components/entities";
import { Container } from "@/components/shared";

export const SimpleInputsPage = () => {
  const formData = {
    name: "name",
    firstName: "firstName",
    lastName: "lastName",
    email: "email@examle.com",
    phone: "+373 00 00 00",
    birthday: new Date(),
  };
  return (
    <section className="flex grow">
      <Container>
        <div className="flex h-full flex-col items-center justify-center gap-0">
          <h1 className="text-3xl">Simple Inputs Page</h1>
          <FormSimpleInputs type="Create" formData={formData} />
        </div>
      </Container>
    </section>
  );
};
