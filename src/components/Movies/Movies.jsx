import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({movies ,addMovies}) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies} addMovies={addMovies} />
    </main>
  );
}

export default Movies;
