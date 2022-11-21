import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import useInput from "../../hooks/useInput";

function Register({ handleRegister }) {
  const name = useInput("", { isEmpty: true, minLength: 2 });
  const email = useInput("", { isEmpty: true, minLength: 3, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 3 });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(name.value, email.value, password.value);
  };

  return (
    <main className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <Link to={"/"} className="register__logo">
          <img className="register__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label">Имя</label>
        <input
          className="register__input"
          id="name"
          name="name"
          type="text"
          value={name.value}
          onChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
        />
        {name.isDirty && name.isEmpty && (
          <div className="register__input-err">Поле не может быть пустым.</div>
        )}
        {name.isDirty && name.minLengthError && (
          <div className="register__input-err">Некорректная длина.</div>
        )}
        <label className="register__label">E-mail</label>
        <input
          className="register__input"
          id="email"
          name="email"
          type="email"
          value={email.value}
          onChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
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
        />
        {password.isDirty && password.isEmpty && (
          <div className="register__input-err">Поле не может быть пустым.</div>
        )}
        {password.isDirty && password.minLengthError && (
          <div className="register__input-err">Некорректная длина.</div>
        )}
        <button
          className="register__button"
          disabled={
            !name.inputValid || !email.inputValid || !password.inputValid
          }
          aria-label="войти"
          type="submit"
        >
          Зарегистрироваться
        </button>
        <div className="register__singin">
          <p className="register__singin-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link" type="submit">
            Войти
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Register;
