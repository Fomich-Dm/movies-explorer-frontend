import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function MoviesCardList({ movies, onMovieLike, saveMovies }) {
  const { pathname } = useLocation();
  const [width, setWidth] = useState(0);
  const [numberOfFilms, setNumberOfFilms] = useState(0);
  const slice = movies.slice(0, numberOfFilms);

  const largeSize = 1280;
  const mediumSize = 768;

  const displayMoviesLargeSize = 12;
  const displayMoviesMediumSize = 8;
  const displayMoviesSmallSize = 5;

  const addMoviesLargeSize = 3;
  const addMoviesMediumSize = 2;
  const addMoviesSmallSize = 2;

  function screenWidthChange() {
    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 1000);
  }

  const handleLoadMore = () => {
    if (width >= largeSize) {
      setNumberOfFilms(numberOfFilms + addMoviesLargeSize);
    } else if (width >= mediumSize) {
      setNumberOfFilms(numberOfFilms + addMoviesMediumSize);
    } else {
      setNumberOfFilms(numberOfFilms + addMoviesSmallSize);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", screenWidthChange);
    setWidth(window.innerWidth);
    if (width >= largeSize) {
      setNumberOfFilms(displayMoviesLargeSize);
    } else if (width >= mediumSize) {
      setNumberOfFilms(displayMoviesMediumSize);
    } else {
      setNumberOfFilms(displayMoviesSmallSize);
    }
    return () => {
      window.removeEventListener("resize", screenWidthChange);
    };
  }, [width]);

  return (
    <section className="cards">
      <div className="cards__container">
        {movies.length === 0 ? (
          <p className="cards__nothing-found">Ничего не найдено</p>
        ) : (
          slice.map((movie) => {
            return (
              <MoviesCard
                key={pathname === "/movies" ? movie.id : movie.movieId}
                movie={movie}
                onMovieLike={onMovieLike}
                saveMovies={saveMovies}
              />
            );
          })
        )}
      </div>
      {numberOfFilms >= movies.length ? null : (
        <button
          className="cards__button"
          type="button"
          onClick={handleLoadMore}
        >
          Еще
        </button>
      )}
    </section>
  );
}

export default MoviesCardList;
