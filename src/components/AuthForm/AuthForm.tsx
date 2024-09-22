import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import styles from './AuthForm.module.scss';

interface FormFiled {
  name: string;
}

type FormFields = {
  name?: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: FormFields) => void;
  buttonText: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit, buttonText }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormFields>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  });

  const onFormSubmit: SubmitHandler<FormFields> = async (data) => {
    onSubmit(data);
  }

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onFormSubmit)} noValidate>
      {type === 'register' && (
        <Input
          register={register}
          name="name"
          type="text"
          placeholder="Имя"
          error={errors.name}
        />
      )}
      <Input
        register={register}
        name="email"
        type="email"
        placeholder="E-mail"
        error={errors.email}
      />
      <Input
        register={register}
        name="password"
        type="password"
        placeholder="Пароль"
        error={errors.password}
      />
      {/* <button>{buttonText}</button> */}
      <Button title={buttonText} type="submit"/>
    </form>
  )
}