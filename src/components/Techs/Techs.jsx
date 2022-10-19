import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section id="techs" className="techs" name="techs">
      <h3 className="techs__title">Технологии</h3>
      <h2 className="techs__subtitle">7 технологий</h2>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__table">
        <li className="techs__cell">HTML</li>
        <li className="techs__cell">CSS</li>
        <li className="techs__cell">JS</li>
        <li className="techs__cell">React</li>
        <li className="techs__cell">Git</li>
        <li className="techs__cell">Express.js</li>
        <li className="techs__cell">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
