import { useState } from 'react';

export const useFormulario = <T extends Object> (initialForm: T) => {
  
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (campo: keyof T, value: string ) => {
    setFormState({
      ...formState,
      [campo]: value
    });   
  }

  const onCheckboxChange = (nome:string, value: number[]) => {
    setFormState({
      ...formState,
      [nome]: value
    });   
  }

  const onInputRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value  } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });   
  }

  return {
    formState,
    onInputChange,
    onCheckboxChange,
    onInputRadio
  }
}