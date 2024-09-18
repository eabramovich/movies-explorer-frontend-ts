import { FC } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
import { loginFields } from "../../constants/LoginPage";


const LoginPage: FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleLogin = async (values: typeof initialValues) => {
    console.log('Login values:', values);
    // Логика авторизации
  };

  return (
    <AuthPage
      title="Рады видеть!"
      link={{ name: 'Регистрация', href: '/sign-up' }}
    >
      <AuthForm initialValues={initialValues} buttonText="Войти" fields={loginFields} onSubmit={handleLogin} />
    </AuthPage>
  )
}

export default LoginPage;