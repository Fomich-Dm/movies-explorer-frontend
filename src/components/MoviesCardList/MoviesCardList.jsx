import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import q from "../../images/пробные картинки/1.png";
import w from "../../images/пробные картинки/2.png";
import e from "../../images/пробные картинки/3.png";
import r from "../../images/пробные картинки/4.png";
import t from "../../images/пробные картинки/5.png";
import y from "../../images/пробные картинки/6.png";
import u from "../../images/пробные картинки/7.png";
import i from "../../images/пробные картинки/8.png";
import o from "../../images/пробные картинки/9.png";
import p from "../../images/пробные картинки/10.png";
import a from "../../images/пробные картинки/11.png";
import s from "../../images/пробные картинки/12.png";

function MoviesCardList() {
  return (
    <section className="cards">
      <div className="cards__container">
        <MoviesCard img={q} />
        <MoviesCard img={w} />
        <MoviesCard img={e} />
        <MoviesCard img={r} />
        <MoviesCard img={t} />
        <MoviesCard img={y} />
        <MoviesCard img={u} />
        <MoviesCard img={i} />
        <MoviesCard img={o} />
        <MoviesCard img={p} />
        <MoviesCard img={a} />
        <MoviesCard img={s} />
      </div>
      <button className="cards__button" type="button">
        Еще
      </button>
    </section>
  );
}

export default MoviesCardList;
