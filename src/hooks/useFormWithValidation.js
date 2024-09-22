import { useCallback, useState } from "react";

export function useFormWithValidation {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
}