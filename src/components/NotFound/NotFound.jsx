import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-2)

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button onClick={handleClick} type="button" className="not-found__link">
        Назад
      </button>
    </section>
  );
}

export default NotFound;
