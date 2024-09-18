export interface FormField {
  name: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

export interface AuthFormProps<T> {
  fields: FormField[];
  initialValues: T;
  onSubmit: (values:T) => Promise<void>
  buttonText: string;
}

