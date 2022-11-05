import React from "react";
import "./SearchForm.css";
import searchIcon from "../../images/search-icon.svg";

function SearchForm({movies}) {
  const [checkbox, setCheckbox] = React.useState(false);

  const [value, setValue] = React.useState('')

  const toggleClick = () => {
    setCheckbox(!checkbox);
  }

  const filterCounters = movies.filter(movie => {
    return movie.name.toLowerCase().includes(value.toLowerCase())
  })
  
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <img className="search-form__img" src={searchIcon} alt="" />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм" required
            onChange={(event) => setValue(event.target.value)}
          ></input>
          <button className="search-form__button"></button>
        </form>
        <label className="search__label" onClick={toggleClick}>
          <div className="search__checkbox">
            <div className={`search__checkbox-slider ${checkbox ? 'search__checkbox-slider_active' : ''}`}></div>
          </div>
          <span className="search__checkbox-text">Короткометражки</span>
        </label>
      </div>
    </section>
  );
}

export default SearchForm;
