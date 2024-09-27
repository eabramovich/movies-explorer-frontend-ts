import { FC } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
import { AuthFormData } from "../AuthForm/types";
import { loginFields } from "../../constants/loginFields";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTypedDispatch } from "../../hooks/useTypedDispatch";
import { loginUser } from "../../store/action-creators/auth";

const LoginPage: FC = () => {
  const { isLoggedIn, token, error } = useTypedSelector(state => state.user);
  console.log(token);

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: AuthFormData) => {
    console.log('123');
    console.log("Auth Data:", data);
    // Здесь вы можете отправить данные на сервер
    dispatch(loginUser(data.email, data.password));
    console.log(token);
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('\movies', {replace: true})
    }
  }, [isLoggedIn, navigate]);

  return (
    <AuthPage
      title="Рады видеть!"
      link={{ name: 'Регистрация', href: '/sign-up' }}
    >
      <AuthForm fields={loginFields} buttonText="Войти" onSubmit={handleSubmit} errorMessage={error}/>
    </AuthPage>
  )
}

export default LoginPage;
