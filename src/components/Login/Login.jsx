import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import useInput from "../../hooks/useInput";

function Login({ handleLogin }) {
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 3 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.value || !password.value) {
      return;
    }
    handleLogin(email.value, password.value);
  };

  return (
    <main className="login">
      <form className="register__form" onSubmit={handleSubmit}>
        <Link to={"/"} className="register__logo">
          <img className="register__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Рады видеть!</h1>
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          id="email"
          name="email"
          type="email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          required
        />
        {email.isDirty && email.isEmpty && (
          <div className="register__input-err">Поле не может быть пустым.</div>
        )}
        {email.isDirty && email.minLengthError && (
          <div className="register__input-err">Некорректная длина.</div>
        )}
        {email.isDirty && email.emailError && (
          <div className="register__input-err">Должен быть email.</div>
        )}
        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
          value={password.value}
          onChange={(e) => password.onChange(e)}
          onBlur={(e) => password.onBlur(e)}
          required
        />
        {password.isDirty && password.isEmpty && (
          <div className="register__input-err">Поле не может быть пустым.</div>
        )}
        {password.isDirty && password.minLengthError && (
          <div className="register__input-err">Некорректная длина.</div>
        )}
        <button
          className="register__button register__button_login"
          disabled={!email.inputValid || !password.inputValid}
          aria-label="войти"
        >
          Войти
        </button>
        <div className="register__singin">
          <p className="register__singin-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__link" type="submit">
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
