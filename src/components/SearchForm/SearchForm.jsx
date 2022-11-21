import React, { useState } from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function SearchForm({
  searchAllMovies,
  searchSaveMovies,
  checkbox,
  setCheckbox,
  searchValue,
}) {
  const [value, setValue] = useState(searchValue);
  const { pathname } = useLocation();

  useEffect(() => {});

  const toggleClick = () => {
    setCheckbox(!checkbox);
  };

  const heandleSearchClick = (e) => {
    e.preventDefault();

    if (pathname === "/movies") {
      searchAllMovies(value);
    }
    if (pathname === "/saved-movies") {
      searchSaveMovies(value);
    }
  };

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <img className="search-form__img" src={searchIcon} alt="" />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
            onChange={(event) => setValue(event.target.value)}
            value={value}
          ></input>
          <button
            className="search-form__button"
            onClick={heandleSearchClick}
          ></button>
        </form>
        <label className="search__label" onClick={toggleClick}>
          <div className="search__checkbox">
            <div
              className={`search__checkbox-slider ${
                checkbox ? "search__checkbox-slider_active" : ""
              }`}
            ></div>
          </div>
          <span className="search__checkbox-text">Короткометражки</span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
