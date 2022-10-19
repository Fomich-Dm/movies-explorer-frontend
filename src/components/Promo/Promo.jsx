import React from "react";
import landingLogo from "../../images/landing-logo.svg";
import "./Promo.css";

function Promo() {
  return (
    <section className="promo">
      <img className="promo__img" alt="лого лендинга" src={landingLogo} />
      <div >
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;
