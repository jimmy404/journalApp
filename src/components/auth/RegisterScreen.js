import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          autoComplete="off"
          className="auth__input"
          name="name"
          placeholder="Name"
          type="text"
        />

        <input
          autoComplete="off"
          className="auth__input"
          name="email"
          placeholder="Email"
          type="text"
        />

        <input
          autoComplete="off"
          className="auth__input"
          name="password"
          placeholder="Password"
          type="password"
        />

        <input
          autoComplete="off"
          className="auth__input"
          name="confirm"
          placeholder="Repeat Password"
          type="password"
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
