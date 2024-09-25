import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = 'button',
  disabled,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${disabled ? '' : styles.buttonActive}`} onClick={onClick} type={type} {...props}>{title}</button>
  )
}