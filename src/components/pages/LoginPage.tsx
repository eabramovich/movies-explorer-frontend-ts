import { FC } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
//import { loginFields } from "../../constants/LoginPage";
import { FormField } from "../AuthForm/AuthForm";
import { AuthFormData } from "../AuthForm/types";
import { loginFields } from "../../constants/loginFields";

// interface AuthFormData {
//   email: string;
//   password: string;
//   confirmPassword?: string;  // Поле для регистрации
// }




const LoginPage: FC = () => {

  const handleSubmit = (data: AuthFormData) => {
    console.log('123');
    console.log("Auth Data:", data);
    // Здесь вы можете отправить данные на сервер
  };

  return (
    <AuthPage
      title="Рады видеть!"
      link={{ name: 'Регистрация', href: '/sign-up' }}
    >
      <AuthForm fields={loginFields} buttonText="Войти" onSubmit={handleSubmit}/>
    </AuthPage>
  )
}

export default LoginPage;
