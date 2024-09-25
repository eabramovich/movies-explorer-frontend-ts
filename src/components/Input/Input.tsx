import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  name: string;
  placeholder: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  error?: FieldError;
}

export const Input: React.FC<InputProps> = ({ register, name, placeholder, type = 'text', error, ...props }) => {
  return (
    <>
      <input
        className={`${styles.input} ${error ? styles.error : ''}`}
        {...register}
        placeholder={placeholder}
        type={type}
        {...props}>
      </input>
    </>
  )
}