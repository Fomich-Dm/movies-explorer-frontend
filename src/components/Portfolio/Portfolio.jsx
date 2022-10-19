import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <a className="portfolio__link" href="https://github.com/Fomich-Dm/how-to-learn" target="_blank" rel="noreferrer">
        Статичный сайт <img className="portfolio__icon" src={arrow} alt="Статичный сайт" />
      </a>
      <a className="portfolio__link" href="https://github.com/Fomich-Dm/russian-travel" target="_blank" rel="noreferrer">
      Адаптивный сайт <img className="portfolio__icon" src={arrow} alt="Адаптивный сайт" />
      </a>
      <a className="portfolio__link" href="https://github.com/Fomich-Dm/react-mesto-api-full" target="_blank" rel="noreferrer">
      Одностраничное приложение <img className="portfolio__icon" src={arrow} alt="Одностраничное приложение" />
      </a>
    </section>
  );
}

export default Portfolio;
