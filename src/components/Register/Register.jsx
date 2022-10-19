import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";

function Register() {
  return (
    <section className="register">
      <form className="register__form">
        <Link to={"/"} className="register__logo">
          <img className="register__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label">Имя</label>
        <input className="register__input" />
        <span className="register__input-error" />
        <label className="register__label">E-mail</label>
        <input className="register__input" />
        <span className="register__input-error" />
        <label className="register__label">Пароль</label>
        <input className="register__input" />
        <span className="register__input-error" />
        <button className="register__button">Зарегистрироваться</button>
        <div className="register__singin">
          <p className="register__singin-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link" type="submit">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;
