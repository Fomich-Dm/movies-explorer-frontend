import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
    </main>
  );
}

export default Movies;
