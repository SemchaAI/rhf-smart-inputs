# RHF Smart Inputs

A comprehensive collection of smart form input components built with React Hook Form, TypeScript, and Tailwind CSS.
🚀 **Live Demo:** [RHF Smart Inputs](https://rhf-smart-inputs.vercel.app/)

# Main idea

This project demonstrates various form input components with advanced features like masking, validation, multi-select, file uploads, and more. Mostly all components have default UI version for reusability outside forms and also version with React Hook Form for efficient form state management and validation.

## Skeleton for any form component

```
import { useForm } from "react-hook-form";
import { Form } from "./Form";

export const FormContacts = () => {
  const form = useForm<T>({
    defaultValues: {  },
    mode: "onBlur",
  });
  const submitHandler = async (data: T) => {
    try {
      console.log("DataForm", data);
    } catch (error) {
      console.log("[DataForm]", error);
    }
  };

  return (
    <Form form={form} onSubmit={submitHandler}>
      {
        //from fields input,textarea checkboxes e.t.c.
      }
      {
        //controls:  submit, mb some links or any other ui
      }
    </Form>
  );
};
```

## Features

- 🔒 **Smart Password Fields** - Toggle visibility, validation
- 📱 **Input Masking** - Phone numbers, formatted text
- ✅ **Validation** - Built-in validation patterns
- 📁 **File Uploads** - Multi-file upload with preview
- 📋 **Multi-select** - Searchable dropdown with multiple selection
- ☑️ **Checkboxes & Radio Buttons** - Custom styled form controls
- 📝 **Text Areas** - With validation
- 🌙 **Dark/Light Theme** - Theme switching support
