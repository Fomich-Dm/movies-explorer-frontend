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
  allMoviesList,
  searchValue
}) {
  return (
    <main>
      <SearchForm
        searchAllMovies={searchAllMovies}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
        searchValue={searchValue}
      />
      {preloaderActive ? (
        <Preloader />
      ) : (
        <MoviesCardList
          addMovies={addMovies}
          movies={movies}
          onMovieLike={onMovieLike}
          saveMovies={saveMovies}
          allMoviesList={allMoviesList}
          searchValue={searchValue}
        />
      )}
    </main>
  );
}

export default Movies;
