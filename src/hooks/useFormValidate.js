import { useState, useEffect } from 'react';
import validate from '../utils/FormValidationRules';

const useFormValidate = (onSubmit) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitClicked) {
      onSubmit();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setErrors(validate(values));
    setSubmitClicked(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((previousValues) => ({ ...previousValues, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors
  };
};

export default useFormValidate;
