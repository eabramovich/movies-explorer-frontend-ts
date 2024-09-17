import { useState } from "react"
import { AuthFormProps } from "./types"
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const AuthForm = <T extends Record<string, any>>({
  fields,
  initialValues,
  onSubmit,
  buttonText
}: AuthFormProps<T>) => {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input 
          key={field.name}
          name={field.name}
          value={formValues[field.name]}
          type={field.type}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      ))}
      <Button title={buttonText} type="submit"/>
    </form>
  )
}