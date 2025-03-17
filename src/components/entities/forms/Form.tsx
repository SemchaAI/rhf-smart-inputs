import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import type { ReactNode } from 'react';

interface DynamicFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: (data: T) => Promise<void>;
  children: ReactNode;
  formControls?: ReactNode;
}

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  formControls,
}: DynamicFormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form
        className="min-w-80 max-w-lg my-12 mx-auto w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
        {formControls}
      </form>
    </FormProvider>
  );
};
