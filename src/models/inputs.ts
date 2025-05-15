import { ValidationTypes } from "@/utils/config";
import type { ReactNode } from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  rounded?: boolean;
}

export interface IField extends IInput {
  id: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  EyeIcon?: boolean;
  validation: ValidationTypes;

  initType: string;
  placeholder: string;
  name: string;
}

export interface IUnmaskedField extends IInput {
  id: string;
  EyeIcon?: boolean;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;

  hidden?: boolean;
  label: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
}

export interface ICheckbox
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  endAdornment?: ReactNode;
  onChange?: (
    value: string | number | readonly string[] | undefined | boolean | null,
  ) => void;
  checked?: boolean;
  label: string;
  error?: string;
}

export interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  endAdornment?: ReactNode;
  validation: ValidationTypes;
}
export interface IFileInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string; // required
  text: string;
  accept?: IFilesAccept;
  minFiles?: number;
  maxFiles?: number;
  maxFileSize?: number;
  multiple?: boolean;

  //for ts
  // Icon?: never;
  // EyeIcon?: never;
}
export type IFilesAccept =
  | "image/png,image/webp"
  | "image/png,image/webp,image/jpg,image/jpeg"
  | "video/webm,video/mp4";
