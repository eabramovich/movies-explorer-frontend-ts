import { FormField } from "../components/AuthForm/types";

export const registerFields: FormField[] = [
  { name: 'name', type: 'email', placeholder: 'Имя' },
  { name: 'email', type: 'email', placeholder: 'Email' },
  { name: 'password', type: 'password', placeholder: 'Пароль' },
];