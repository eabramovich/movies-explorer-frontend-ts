export type validationRules = {
  required?: boolean | string;
  minLength?: {value: number; message: string;};
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: any) => boolean | string;
}