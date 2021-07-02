import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
  }

  const isFormValid = () => {

  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
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
