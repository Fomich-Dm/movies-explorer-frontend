import React from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, addMovies }) {
  const [like, setLike] = React.useState(false);
  const { pathname } = useLocation();

  

  const likeClick = (e) => {
    setLike(!like);
    addMovies(movie)
  };


  return (
    <section className="card">
      <div className="card__info">
        <div className="card__title">
          <h2 className="card__name">{pathname === "/saved-movies" ? movie.data.nameRU : movie.nameRU}</h2>
          <p className="card__time">{pathname === "/saved-movies" ? movie.data.duration : movie.duration}</p>
        </div>
        <button
          className={`${
            pathname === "/saved-movies" ? "card__button_delete" : ""
          } card__button ${
            like ? "card__button_save-active" : "card__button_save"
          }`}
          type="button"
          onClick={likeClick}
        ></button>
      </div>
      <img
        className="card__img"
        alt="Обложка фильма"
        src={pathname === "/saved-movies" ? movie.data.image :`https://api.nomoreparties.co/${movie.image.url}`}
      />
    </section>
  );
}

export default MoviesCard;
