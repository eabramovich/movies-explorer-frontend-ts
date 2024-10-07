import React from "react"
import classes from './InputSearch.module.scss';


export const InputSearch =  React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <input ref={ref} {...props} className={classes.inputSearch} />
  )
})