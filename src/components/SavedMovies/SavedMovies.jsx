import React from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
  saveMovies,
  onMovieLike,
  searchSaveMovies,
  checkbox,
  setCheckbox,
  preloaderActive,
}) {
  return (
    <main>
      <SearchForm
        searchSaveMovies={searchSaveMovies}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
      {preloaderActive ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={saveMovies}
          onMovieLike={onMovieLike}
          saveMovies={saveMovies}
        />
      )}
    </main>
  );
}

export default SavedMovies;
