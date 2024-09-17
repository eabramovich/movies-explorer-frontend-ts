import { InputHTMLAttributes, ChangeEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  disabled?: boolean;
}