import { Suspense, lazy, useEffect, useState } from "react";
import { Modal } from "@/components/features";
import { useModal } from "@/utils/hooks";

import type { IUserFormProps } from "@/models/zodForms";
interface IProps extends IUserFormProps {
  button: React.ReactNode;
}

const FormSimpleInputs = lazy(() =>
  import("../forms/FormSimpleInputs").then((module) => ({
    default: module.FormSimpleInputs,
  })),
);

function emulateFetch<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

export const UserModalForm = ({ type, formData, button }: IProps) => {
  const { close, open, isOpen } = useModal();

  const [subjectOptions, setSubjectOptions] = useState<
    | {
        value: number;
        label: string;
      }[]
    | undefined
  >(undefined);
  console.log("subjectOptions", subjectOptions);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        // const data = await res.json();
        const res = await emulateFetch(
          [
            {
              value: 1,
              label: "Subject 1",
            },
            {
              value: 2,
              label: "Subject 2",
            },
            {
              value: 3,
              label: "Subject 3",
            },
            {
              value: 4,
              label: "Subject 4",
            },
          ],
          5000,
        );

        setSubjectOptions(res);
      } catch (err) {
        console.error("Failed to fetch subjects", err);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <>
      <button
        onClick={open}
        className="flex cursor-pointer items-center justify-center"
      >
        {button}
      </button>
      <Modal isOpen={isOpen} onClose={close}>
        <Suspense fallback={<div>Loading...</div>}>
          <FormSimpleInputs
            type={type}
            formData={formData}
            subjectOptions={subjectOptions}
          />
        </Suspense>
      </Modal>
    </>
  );
};
