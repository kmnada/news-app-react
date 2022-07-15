import React, {useEffect} from 'react';
import useFormValidate from '../../hooks/useFormValidate';
import { loginSignUp } from '../../store/login/action';
import RegisterForm from '../registerform/registerForm';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loginSuccess } = useSelector((state) => state.loginReducer);
    
    const onSubmit = () => {
        console.log(values);
        dispatch(loginSignUp({email: values.email,
        password: values.password}, 'LOGIN' ));
    };
    
    
    const { values, errors , handleChange, handleSubmit} = useFormValidate(onSubmit);

    useEffect(() => {
    if(loginSuccess) {
      debugger;
    history.push('/home');
  }
  }, [loginSuccess]);

    const onClickSignUp = () => history.push('/signup');

  return (
      <RegisterForm message="Don't have an account? Sign Up" title='Sign In' buttonTitle='Sign In' onClickSubmit={handleSubmit} handleChange={handleChange} errors={errors} values={values} onClick={onClickSignUp} />
  );
}

export default Login;