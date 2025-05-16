import { useState } from "react";
import { Plus, Trash } from "lucide-react";

import {
  DeleteModal,
  // FormSimpleInputs,
  UserModalForm,
} from "@/components/entities";
import { Select } from "@/components/features";
import { Container } from "@/components/shared";
import { ActionType } from "@/models/zodForms";

import type { IOption } from "@/models/selects";

const ExampleOptions: IOption[] = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" },
];

export default function SimpleInputsPage() {
  const [selectedOption, setSelectedOption] = useState<
    IOption[] | IOption | undefined
  >([{ label: "Option 1", value: "option-1" }]);
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
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <h1 className="text-3xl">New Inputs with Modals</h1>
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
              formData={formData}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-0">
          {/* <h1 className="text-3xl">Simple Inputs Page</h1> */}
          {/* <FormSimpleInputs type={ActionType.Create} formData={formData} /> */}
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-3xl">New Select Examples</h2>
          <Select
            options={ExampleOptions}
            value={{ label: "Option 1", value: "option-1" }}
            onChange={(option) => console.log(option)}
          />
          <Select
            options={ExampleOptions}
            value={selectedOption}
            onChange={(option) => setSelectedOption(option)}
            isMulti
            isClearable
            isSearchable
            menuPortalTarget={document.body}
            placeholder="Test placeholder..."
          />
          <Select
            options={ExampleOptions}
            value={{ label: "Option 1", value: "option-1" }}
            onChange={(option) => console.log(option)}
            isDisabled
            isLoading
          />
        </div>
      </Container>
    </section>
  );
}
