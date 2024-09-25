import { FC } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { AuthForm } from "../AuthForm/AuthForm";
import { registerFields } from "../../constants/registerFields";

const RegisterPage: FC = () => {
  // const initialValues = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  const handleSubmit = (data: any) => {
    console.log("Auth Data:", data);
    // Здесь вы можете отправить данные на сервер
  };

  return (
    <AuthPage
      title="Добро пожаловать!"
      link={{ name: 'Вход', href: '/sign-in' }}
    >
      <AuthForm fields={registerFields} buttonText="Зарегестрироваться" onSubmit={handleSubmit} />
    </AuthPage>
  )
}

export default RegisterPage;