import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { useState } from "react";

function Register( {handleRegister}) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
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
    const { name, email, password } = data;
    handleRegister(name, email, password);
  }

  return (
    <main className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <Link to={"/"} className="register__logo">
          <img className="register__logo-img" src={logo} alt="Логотип" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <label className="register__label">Имя</label>
        <input className="register__input" id="name"
            name="name"
            type="text"
            value={data.name} required  onChange={handleChange}/>
        <span className="register__input-error" />
        <label className="register__label">E-mail</label>
        <input className="register__input" id="email"
            name="email"
            type="email"
            value={data.email} required  onChange={handleChange} />
        <span className="register__input-error" />
        <label className="register__label">Пароль</label>
        <input className="register__input" id="password"
            name="password"
            type="password"
            value={data.password} required  onChange={handleChange} />
        <span className="register__input-error" />
        <button className="register__button" aria-label="войти"
            type="submit">Зарегистрироваться</button>
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
