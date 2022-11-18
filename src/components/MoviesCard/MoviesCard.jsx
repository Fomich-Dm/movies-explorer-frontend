import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

function MoviesCard({ movie, onMovieLike, saveMovies }) {
  const [like, setLike] = useState(false);
  const { pathname } = useLocation();

  const convertToHours = (mins) => {
    return `${Math.trunc(mins / 60)}ч ${mins % 60}м`;
  };

  useEffect(() => {
    saveMovies.map((data) => {
      if (data.movieId === movie.id) {
        setLike(true);
      }
    });
  }, [saveMovies]);

  const handleLikeClick = () => {
    setLike(!like);
    onMovieLike(movie);
  };
  console.log(movie)

  return (
    <section className="card">
      <div className="card__info">
        <div className="card__title">
          <h2 className="card__name">{movie.nameRU}</h2>
          <p className="card__time">{convertToHours(movie.duration)}</p>
        </div>
        <button
          className={`${
            pathname === "/saved-movies" ? "card__button_delete" : ""
          } card__button ${
            like ? "card__button_save-active" : "card__button_save"
          }`}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
      <a href={movie.trailerLink}>
        <img
          className="card__img"
          alt="Обложка фильма"
          src={
            pathname === "/saved-movies"
              ? movie.image
              : `https://api.nomoreparties.co/${movie.image.url}`
          }
        />
      </a>
    </section>
  );
}

export default MoviesCard;
