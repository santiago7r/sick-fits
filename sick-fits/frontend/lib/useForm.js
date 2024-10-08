import React, { useState } from 'react'

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { name, value, type } = e.target;

    if(type === 'number') {
        value = parseInt(value);
    }
    if(type === 'file') {
        [value] = e.target.files;
    }
    setInputs({
        ...inputs,
        [name]: value,
    })
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
        const blankState = Object.fromEntries(
            Object.entries(inputs).map(([key, value]) => [key, ''])
        );
        setInputs(blankState);
    }

  //Return the things we want to surface from this custom hook

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  }
}
