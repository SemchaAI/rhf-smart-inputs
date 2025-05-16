export interface IOption {
  label: string;
  value: string | number;
  color?: string;
}

export interface ISelectProps {
  options: IOption[];
  value: IOption | IOption[] | undefined;
  onChange: (option: IOption | IOption[] | undefined) => void;
  placeholder?: string;
  menuPortalTarget?: HTMLElement;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isMulti?: boolean;
}
