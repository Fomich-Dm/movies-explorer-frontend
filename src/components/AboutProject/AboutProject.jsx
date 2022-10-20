import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section id="project" className="about-project">
      <h3 className="about-project__title">О проекте</h3>
      <div className="stage-table">
        <div className="stage-table__cell">
          <h3 className="stage-table__title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="stage-table__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="stage-table__cell">
          <h3 className="stage-table__title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="stage-table__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="time-table">
        <div className="time-table__cell time-table__cell_back-end">
          <p className="time-table__duration time-table__duration_back-end">
            1 неделя
          </p>
          <p className="time-table__name">Back-end</p>
        </div>
        <div className="time-table__cell time-table__cell_front-end">
          <p className="time-table__duration time-table__duration_front-end">
            4 недели
          </p>
          <p className="time-table__name">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
