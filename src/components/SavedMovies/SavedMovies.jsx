import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({movies}) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={movies}/>
    </main>
  );
}

export default SavedMovies;
