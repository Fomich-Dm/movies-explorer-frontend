import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <section className="login">
      <form className="register__form">
        <Link to={"/"} className="register__logo">
          <img className="register__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Рады видеть!</h1>
        <label className="register__label">E-mail</label>
        <input className="register__input" />
        <span className="register__input-error" />
        <label className="register__label">Пароль</label>
        <input className="register__input" />
        <span className="register__input-error" />
        <button className="register__button register__button_login">Войти</button>
        <div className="register__singin">
          <p className="register__singin-text">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="register__link" type="submit">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;
