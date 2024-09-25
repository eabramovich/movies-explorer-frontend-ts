export interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;  // Поле для регистрации
  name?: string;
}