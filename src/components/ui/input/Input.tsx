import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  name: string;
  placeholder: string;
  type: InputHTMLAttributes<HTMLInputElement>['type'];
  disabled?: boolean;
  error?: FieldError;
}

export const Input: React.FC<InputProps> = ({ register, name, placeholder, type = 'text', disabled, error, ...props}) => {
  return (
    <input 
      className={`${styles.input} ${error ? styles.error : ''}`}
      {...register(name)}
      placeholder={placeholder} 
      type={type} 
      disabled={disabled} 
      {...props}>
    </input>
  )
}