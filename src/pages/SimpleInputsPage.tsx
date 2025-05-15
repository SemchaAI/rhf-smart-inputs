import {
  DeleteModal,
  // FormSimpleInputs,
  UserModalForm,
} from "@/components/entities";
import { Container } from "@/components/shared";
import { ActionType } from "@/models/zodForms";
import { Plus, Trash } from "lucide-react";

export default function SimpleInputsPage() {
  // const formData = {
  //   name: "name",
  //   firstName: "firstName",
  //   lastName: "lastName",
  //   email: "email@examle.com",
  //   phone: "+373 00 00 00",
  //   birthday: new Date(),
  // };
  return (
    <section className="flex grow">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h1 className="text-3xl">Simple Inputs with Modals</h1>
          <div className="flex justify-center gap-2">
            <DeleteModal
              button={
                <Trash
                  size={30}
                  className="rounded-full bg-primary stroke-background p-2"
                />
              }
              id={1}
              onDelete={() =>
                Promise.resolve({ isSuccess: true, message: "Success" })
              }
            />
            <UserModalForm
              button={
                <Plus
                  size={30}
                  className="rounded-full bg-primary stroke-background p-2"
                />
              }
              type={ActionType.Create}
              // formData={formData}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-0">
          {/* <h1 className="text-3xl">Simple Inputs Page</h1> */}
          {/* <FormSimpleInputs type={ActionType.Create} formData={formData} /> */}
        </div>
      </Container>
    </section>
  );
}
