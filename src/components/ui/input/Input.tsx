import { InputProps } from "./types";
import styles from './Input.module.scss';

export const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text', disabled, ...props }) => {
  return (
    <input 
      className={styles.input}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      type={type} 
      disabled={disabled} 
      {...props}>
    </input>
  )
}