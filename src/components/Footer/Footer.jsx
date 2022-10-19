import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">© 2020</p>
        <nav>
          <ul className="footer__lists">
            <li className="footer__list">
              <a className="footer__link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__list">
              <a className="footer__link" href="Github">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
