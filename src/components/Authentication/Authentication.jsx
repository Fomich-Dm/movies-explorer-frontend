import React from "react";
import { Link } from "react-router-dom";
import "./Authentication.css";

function Authentication() {
  return (
    <section className="authentication">
      <Link to={"/signup"} className="authentication__login-link">
        Регистрация
      </Link>
      <Link to={"/signin"} className="authentication__register-link">
        Войти
      </Link>
    </section>
  );
}

export default Authentication;
