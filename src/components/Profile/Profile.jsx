import React from "react";
import "./Profile.css";

function Profile () {
    return(
        <section className="profile">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <div className="profile__content">
                <div className="profile__info">
                    <h3 className="profile__name">Имя</h3>
                    <p className="profile__meaning">Виталий</p>
                </div>
                <div className="profile__info">
                    <h3 className="profile__name">E-mail</h3>
                    <p className="profile__meaning">pochta@yandex.ru</p>
                </div>
            </div>
            <button className="profile__button-edit">Редактировать</button>
            <button className="profile__button-exit">Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;