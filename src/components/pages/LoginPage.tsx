import { FC } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
//import { loginFields } from "../../constants/LoginPage";
import { FormField } from "../AuthForm/AuthForm";
import { AuthFormData } from "../AuthForm/types";
import { loginFields } from "../../constants/loginFields";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { loginUser } from "../../store/action-creators/auth";

// interface AuthFormData {
//   email: string;
//   password: string;
//   confirmPassword?: string;  // Поле для регистрации
// }




const LoginPage: FC = () => {
  const { currentUser, isLoggedIn, token } = useTypedSelector(state => state.user);
  console.log(token);

  const dispatch = useTypedDispatch();

  const handleSubmit = (data: AuthFormData) => {
    console.log('123');
    console.log("Auth Data:", data);
    // Здесь вы можете отправить данные на сервер
    dispatch(loginUser(data.email, data.password));
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
