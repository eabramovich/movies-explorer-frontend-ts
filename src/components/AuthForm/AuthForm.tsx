import { useForm, SubmitHandler, Path } from "react-hook-form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import styles from './AuthForm.module.scss';
import { validationRules } from "../../utils/validation";


export interface FormField<T> {
  name: Path<T>;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  validation?: validationRules;
}


interface AuthFormProps<T> {
  fields: FormField<T>[];
  onSubmit: (data: T) => void;
  buttonText: string;
  errorMessage: string | null;
}

export const AuthForm = <T extends Record<string, any>>({
  fields,
  onSubmit, 
  buttonText,
  errorMessage
}: AuthFormProps<T>) => {
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<T>({
    mode: 'onChange'
  });

  const onFormSubmit: SubmitHandler<T> = async (data) => {
    onSubmit(data);
  }

  console.log('Error', errorMessage)

  return (
    <form className={styles.authForm} onSubmit={handleSubmit(onFormSubmit)} noValidate>
      {fields.map((field) => (
        <div key={String(field.name)} >
          <Input 
            className={`${styles.authFormInput} ${errors[field.name] ? styles.authFormInputError : ''}`}
            register={register(field.name as Path<T>, field.validation)}
            name={String(field.name)}
            type={field.type}
            placeholder={String(field.placeholder)}
          />
          {errors[field.name] && (
            <span className={styles.authFormInputErrorMessage}>{errors[field.name]?.message as string}</span>
          )}
        </div>
      ))}
      {errorMessage && <span className={`authFormErrorMessage ${errorMessage ? "authFormErrorMessageActive" : "" }`}>{errorMessage}</span>}
      <Button title={buttonText} type="submit" disabled={!isValid} />
    </form>
  )
}