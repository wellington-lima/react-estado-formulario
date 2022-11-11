import React, { useState } from 'react';

export const useFormulario = <T extends Object> (initialForm: T) => {
  
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value  } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });   
  }

  const onInputRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value  } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });   
  }

  const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value  } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });   
  }

  const onCheckboxChange = (nome:string, value: number[]) => {
    setFormState({
      ...formState,
      [nome]: value
    });   
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onSelectChange,
    onCheckboxChange,
    onInputRadio
  }
}