import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";

function Login({ handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((oldData) => ({
      ...oldData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (!email || !password) {
      return;
    }
    handleLogin(email, password);
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
          value={data.email}
          onChange={handleChange}
          required
        />
        <span className="register__input-error" />
        <label className="register__label">Пароль</label>
        <input
          className="register__input"
          id="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <span className="register__input-error" />
        <button className="register__button register__button_login" aria-label="войти">
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
