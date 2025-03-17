export interface IRegistrationForm {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
}
export interface ILoginForm {
  emailOrName: string;
  password: string;
}
export interface IUserForm {
  name: string;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  email: string;
}
export interface ICheckoutForm extends IUserForm {
  address: string;
  textarea?: string;

  firstName: string;
  lastName: string;
  phone: string;
}

//mask test form
export interface ICheckBoxRadioButtonsForm {
  email: string;
  gender: "male" | "female" | "other";
  politics: boolean;
  spy: boolean;
}
export interface IMultiSelectForm {
  emailOrName: string;
  technologies: string[];
}
export interface IMaskForm {
  phone: string;
  phoneUnmasked: string;
  fiveStringName: string;
}
export interface IContactsForm {
  name: string;
  age: number;
  email: string;
  message: string;
}
export interface IProductForm {
  name: string;
  price: number;
  images: FileList;
}
