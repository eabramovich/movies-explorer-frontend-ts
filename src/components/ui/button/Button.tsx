import styles from './Button.module.scss'
import { ButtonProps } from './types'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   title: string;
//   onClick?: () => void;
//   type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
// }

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <button className={styles.button} onClick={onClick} type={type} {...props}>{title}</button>
  )
}