import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if ( isFormValid() ) {
      console.log('Form ok')
    }
  }

  const isFormValid = () => {
    if ( name.trim().length === 0 ){
      dispatch(setError('Name is required'));
      return false;
    } else if ( !validator.isEmail(email) ) {
      dispatch(setError('Email is not valid'));
      return false;
    } else if ( password !== password2 || password.length < 5 ) {
      dispatch(setError('Password should be at least 6 characters and match each other'));
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">Alert message TEST</div>
        <input
          autoComplete="off"
          className="auth__input"
          name="name"
          placeholder="Name"
          type="text"
          value={name}
          onChange={handleInputChange}
        />

        <input
          autoComplete="off"
          className="auth__input"
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          name="password2"
          placeholder="Repeat Password"
          type="password"
          value={password2}
          onChange={handleInputChange}
        />

        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
        >Register
        </button>

        <Link to="/auth/login" className="link">Already registered?
        </Link>
      </form>
    </>
  )
}
