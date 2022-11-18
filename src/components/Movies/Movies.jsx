import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({
  movies,
  addMovies,
  searchAllMovies,
  onMovieLike,
  saveMovies,
  checkbox,
  setCheckbox,
  preloaderActive,
}) {
  return (
    <main>
      <SearchForm
        searchAllMovies={searchAllMovies}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
      {preloaderActive ? (
        <Preloader />
      ) : (
        <MoviesCardList
          addMovies={addMovies}
          movies={movies}
          onMovieLike={onMovieLike}
          saveMovies={saveMovies}
        />
      )}
    </main>
  );
}

export default Movies;
