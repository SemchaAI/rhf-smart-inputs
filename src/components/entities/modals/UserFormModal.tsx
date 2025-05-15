import { Suspense, lazy } from "react";
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

export const UserModalForm = ({ type, formData, button }: IProps) => {
  const { close, open, isOpen } = useModal();

  return (
    <>
      <button
        onClick={open}
        className="flex cursor-pointer items-center justify-center"
      >
        {button}
      </button>
      <Modal isOpen={isOpen} onClose={close}>
        {isOpen && (
          <Suspense fallback={<div className="p-4">Loading form...</div>}>
            <h1 className="text-3xl text-center">User Form</h1>
            <FormSimpleInputs type={type} formData={formData} onClose={close} />
          </Suspense>
        )}
      </Modal>
    </>
  );
};
