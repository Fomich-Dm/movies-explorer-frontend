import React from "react";
import { Link } from "react-router-dom";
import account from "../../images/account-icon.svg";
import "./Account.css";

function Account() {
  return (
    <section className="account">
      <Link className="account__link" to={"/profile"}>
        <p className="account__title">Аккаунт</p>
        <img className="account__icon" src={account} alt="" />
      </Link>
    </section>
  );
}

export default Account;
