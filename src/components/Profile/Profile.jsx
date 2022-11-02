import React, { useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profile.css";

function Profile({ handleLogout, handleUpdateUser, editInfo, setEditInfo }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  function heandleChangeName(e) {
    setName(e.target.value);
  }

  function heandleChangeEmail(e) {
    setEmail(e.target.value);
  }

  const handleClickEdit = () => {
    setEditInfo(!editInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({name, email})
    handleClickEdit()
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <div className="profile__content">
        <div className="profile__info">
          <h3 className="profile__name">Имя</h3>
          <input className="profile__meaning" disabled={editInfo ? "" : "disabled"} value={name || ""} onChange={heandleChangeName}/>
        </div>
        <div className="profile__info">
          <h3 className="profile__name">E-mail</h3>
          <input className="profile__meaning" disabled={editInfo ? "" : "disabled"} value={email || ""} onChange={heandleChangeEmail}/>
        </div>
      </div>

      {editInfo ? ( 
        <>
        <button className="profile__button-save" >Сохранить</button>
        </>
      ) : (
        <>
          <button className="profile__button-edit">
            Редактировать
          </button>
          <button className="profile__button-exit" type="button" onClick={handleLogout}>
            Выйти из аккаунта
          </button>
        </>
      )}
    </form>
  );
}

export default Profile;
