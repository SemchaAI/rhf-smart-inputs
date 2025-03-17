import { FormContacts } from "@/components/entities";
import { Container } from "@/components/shared";

export const ContactsPage = () => {
  return (
    <section className="flex grow">
      <Container>
        <div className="flex h-full flex-col items-center justify-center gap-0">
          <p className="flex flex-col items-center text-xl">
            This page demonstration for textarea with rhf
            <span className="text-error">*check console log on submit</span>
          </p>
          <h1 className="text-3xl">Contacts Page</h1>
          <FormContacts />
        </div>
      </Container>
    </section>
  );
};
