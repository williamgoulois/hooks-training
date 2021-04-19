import { useState } from "react";

export type FormValues = {
  [value: string]: string;
};

export default function useForm(
  initialValues: FormValues
): [FormValues, React.ChangeEventHandler<HTMLInputElement>] {
  const [values, setValues] = useState<FormValues>(initialValues);

  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    },
  ];
}
