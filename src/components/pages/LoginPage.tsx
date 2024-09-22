import { FC } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
import { loginFields } from "../../constants/LoginPage";


const LoginPage: FC = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (data: any) => {
    console.log("Auth Data:", data);
    // Здесь вы можете отправить данные на сервер
  };

  return (
    <AuthPage
      title="Рады видеть!"
      link={{ name: 'Регистрация', href: '/sign-up' }}
    >
      <AuthForm buttonText="Войти" onSubmit={handleSubmit} type="login"/>
    </AuthPage>
  )
}

export default LoginPage;