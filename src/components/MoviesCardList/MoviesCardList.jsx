import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import {
  ADD_MOVIES_EXTRO_LARGE_SIZE,
  ADD_MOVIES_LARGE_SIZE,
  ADD_MOVIES_MEDIUM_SIZE,
  ADD_MOVIES_SMALL_SIZE,
  DISPLAY_MOVIES_LARGE_SIZE,
  DISPLAY_MOVIES_MEDIUM_SIZE,
  DISPLAY_MOVIES_SMALL_SIZE,
  EXTRO_LARGE_SIZE,
  LARGE_SIZE,
  MEDIUM_SIZE,
} from "../../utils/constant";

function MoviesCardList({
  movies,
  onMovieLike,
  saveMovies,
  allMoviesList,
  searchValue,
}) {
  const { pathname } = useLocation();
  const [width, setWidth] = useState(0);
  const [numberOfFilms, setNumberOfFilms] = useState(0);
  const slice = movies.slice(0, numberOfFilms);

  function screenWidthChange() {
    setTimeout(() => {  
      setWidth(window.innerWidth);
    }, 1000);
  }

  const handleLoadMore = () => {
    if (width >= EXTRO_LARGE_SIZE) {
      setNumberOfFilms(numberOfFilms + ADD_MOVIES_EXTRO_LARGE_SIZE);
    } else if (width >= LARGE_SIZE) {
      setNumberOfFilms(numberOfFilms + ADD_MOVIES_LARGE_SIZE);
    } else if (width >= MEDIUM_SIZE) {
      setNumberOfFilms(numberOfFilms + ADD_MOVIES_MEDIUM_SIZE);
    } else {
      setNumberOfFilms(numberOfFilms + ADD_MOVIES_SMALL_SIZE);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", screenWidthChange);
    setWidth(window.innerWidth);
    if (width >= LARGE_SIZE) {
      setNumberOfFilms(DISPLAY_MOVIES_LARGE_SIZE);
    } else if (width >= MEDIUM_SIZE) {
      setNumberOfFilms(DISPLAY_MOVIES_MEDIUM_SIZE);
    } else {
      setNumberOfFilms(DISPLAY_MOVIES_SMALL_SIZE);
    }
    return () => {
      window.removeEventListener("resize", screenWidthChange);
    };
  }, [width]);

  return (
    <section className="cards">
      {(
        pathname === "/movies"
          ? allMoviesList === null
          : JSON.parse(localStorage.getItem("saveMovies")).length === 0
      ) ? (
        pathname === "/movies" ? (
          <div></div>
        ) : (
          <p className="cards__nothing-found">Нет сохранненых фильмов</p>
        )
      ) : (
        <div className="cards__container">
          {movies.length === 0 ? (
            searchValue === "" ? (
              <p className="cards__nothing-found">
                Нужно ввести ключевое слово
              </p>
            ) : (
              <p className="cards__nothing-found">Ничего не найдено</p>
            )
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
      )}
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
