import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <a className="portfolio__link" href="https://github.com/Fomich-Dm/how-to-learn">
        Статичный сайт <img className="portfolio__icon" src={arrow} alt="Статичный сайт" />
      </a>
      <a className="portfolio__link" href="https://github.com/Fomich-Dm/russian-travel">
      Адаптивный сайт <img className="portfolio__icon" src={arrow} alt="Адаптивный сайт" />
      </a>
      <a className="portfolio__link" href="https://github.com/Fomich-Dm/react-mesto-api-full">
      Одностраничное приложение <img className="portfolio__icon" src={arrow} alt="Одностраничное приложение" />
      </a>
    </section>
  );
}

export default Portfolio;
