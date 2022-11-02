import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, addMovies }) {
  return (
    <section className="cards">
      <div className="cards__container">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} addMovies={addMovies} />
        ))}
      </div>
      <button className="cards__button" type="button">
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
