import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({saveMovies}) {
  return (
    <main>
      <SearchForm />
      <MoviesCardList movies={saveMovies}/>
    </main>
  );
}

export default SavedMovies;
