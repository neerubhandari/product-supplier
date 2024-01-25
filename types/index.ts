export interface InputFieldProps {
  label: string;
  placeholder: string;
  suffixIcon?: any;
  name: string;
  control?: any;
  rules: any;
  onChange?: any;
  value?: any;
  onClick?: any;
}

export interface TextAreaProps {
  label: string;
  placeholder: string;
  className?: string;
}

export interface CustomSelectProps {
  label?: string;
  placeholder: string;
  style: string;
  listedData: [];
}
