import React from "react";
import "./AboutMe.css";
import photo from "../../images/Photo.jpg";

function AboutMe() {
  return (
    <section id="me" className="about-me">
      <h3 className="about-me__title">Студент</h3>
      <div className="about-me__card">
        <div className="about-me__info">
          <h2 className="about-me__name">Дмитрий</h2>
          <h3 className="about-me__job">Фронтенд-разработчик, 27 лет</h3>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="about-me__link" href="https://github.com/Fomich-Dm">
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photo} alt="фото студента"></img>
      </div>
    </section>
  );
}

export default AboutMe;
