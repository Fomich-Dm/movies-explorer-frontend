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
          <p className="about-me__description"></p>
          <a
            className="about-me__link"
            href="https://github.com/Fomich-Dm"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="about-me__photo" src={photo} alt="фото студента"></img>
      </div>
    </section>
  );
}

export default AboutMe;
