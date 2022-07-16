import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useFormValidate from '../../hooks/useFormValidate';
import { loginSignUp } from '../../store/login/action';
import RegisterForm from '../registerform/registerForm';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loginSuccess } = useSelector((state) => state.loginReducer);
  const onSubmit = () => {
    dispatch(loginSignUp({ email: values.email, password: values.password }, 'SIGNUP'));
  };

  useEffect(() => {
    if (loginSuccess) {
      history.push('/home');
    }
  }, [loginSuccess]);

  const { values, errors, handleChange, handleSubmit } = useFormValidate(onSubmit);

  const onClickSignIn = () => history.push('/login');

  return (
    <RegisterForm
      onClick={onClickSignIn}
      message="Already have an account? Sign in"
      title="Sign Up"
      buttonTitle="Sign Up"
      onClickSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
      values={values}
    />
  );
};

export default SignUp;
