import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({children}) {
  const { pathname } = useLocation();

  return (
    <section className="navigation">
      <div className="navigation__links">
        <>
        {children}
        </>
        <Link to={"/movies"} className={`${pathname === "/movies" ? "navigation__link_active" : ""} navigation__link`}>
          Фильмы
        </Link>
        <Link to={"/saved-movies"} className={`${pathname === "/saved-movies" ? "navigation__link_active" : ""} navigation__link`}>
          Сохранённые фильмы
        </Link>
      </div>
    </section>
  );
}

export default Navigation;
