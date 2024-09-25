import { FormField } from "../components/AuthForm/AuthForm";
import { AuthFormData } from "../components/AuthForm/types";

export const registerFields: FormField<AuthFormData>[] = [{
  name: "name",
  type: "text",
  placeholder: "Имя",
  validation: {
    required: "Имя обязательно для заполнения",
    minLength: { value: 3, message: "Имя должно содержать минимум 3 символа" }
  }
},
{
  name: "email",
  type: "email",
  placeholder: "E-mail",
  validation: {
    required: "Email обязателен для заполнения",
    pattern: {
      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "Некорректный email адрес"
    }
  }
},
{
  name: "password",
  type: "password",
  placeholder: "Пароль",
  validation: {
    required: "Пароль обязателен для заполнения",
    minLength: { value: 8, message: "Пароль должен содержать минимум 8 символов" }
  }
}
]