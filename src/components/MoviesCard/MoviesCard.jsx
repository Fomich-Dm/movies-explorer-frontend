import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ img }) {
  const [like, setLike] = React.useState(false);
  const { pathname } = useLocation();

  const likeClick = (e) => {
    setLike(!like);
  };

  return (
    <section className="card">
      <div className="card__info">
        <div className="card__title">
          <h2 className="card__name">Фильм</h2>
          <p className="card__time">Время</p>
        </div>
        <button
          className={`${pathname === "/saved-movies" ? "card__button_delete" : ""} card__button ${like ? "card__button_save-active" : "card__button_save"}`}
          type="button" onClick={likeClick}
        ></button>
      </div>
      <img className="card__img" alt="Обложка фильма" src={img} />
    </section>
  );
}

export default MoviesCard;
