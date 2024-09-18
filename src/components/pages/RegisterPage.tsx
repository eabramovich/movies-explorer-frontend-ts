import { FC } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
import { registerFields } from "../../constants/RegisterPage";

const RegisterPage: FC = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleLogin = async (values: typeof initialValues) => {
    console.log('Register values:', values);
    // Логика авторизации
  };

  return (
    <AuthPage
      title="Добро пожаловать!"
      link={{ name: 'Вход', href: '/sign-in' }}
    >
      <AuthForm initialValues={initialValues} buttonText="Войти" fields={registerFields} onSubmit={handleLogin} />
    </AuthPage>
  )
}

export default RegisterPage;