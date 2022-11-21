import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useInput from "../../hooks/useInput";
import PopupSaveProfile from "../PopupSaveProfile/PopupSaveProfile";
import "./Profile.css";

function Profile({ handleLogout, handleUpdateUser, editInfo, setEditInfo }) {
  const currentUser = useContext(CurrentUserContext);

  const name = useInput(currentUser.name, { isEmpty: true, minLength: 2 });
  const email = useInput(currentUser.email, {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
  });

  const [dataProfile, setDataProfile] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

  useEffect(() => {
    if (currentUser.name !== name.value || currentUser.email !== email.value) {
      setDataProfile(true);
    } else {
      setDataProfile(false);
    }
  });

  const handleClickEdit = () => {
    setEditInfo(!editInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editInfo) {
      handleUpdateUser({ name: name.value, email: email.value });
    }
    handleClickEdit();
  };

  const handleSaveClick = () => [
    setInfoTooltipOpen(true)
  ]

  function closePopup() {
    setInfoTooltipOpen(false)
  }

  return (
    <>
    <form className="profile" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <div className="profile__content">
        <div className="profile__info">
          <h3 className="profile__name">Имя</h3>
          <div>
            <input
              className="profile__meaning"
              disabled={editInfo ? "" : "disabled"}
              value={name.value || ""}
              onChange={(e) => name.onChange(e)}
              onBlur={(e) => name.onBlur(e)}
            />
            {name.isDirty && name.isEmpty && (
              <div className="profile__meaning-err">
                Поле не может быть пустым.
              </div>
            )}
            {name.isDirty && name.minLengthError && (
              <div className="profile__meaning-err">Некорректная длина.</div>
            )}
          </div>
        </div>
        <div className="profile__info">
          <h3 className="profile__name">E-mail</h3>
          <div>
            <input
              className="profile__meaning"
              disabled={editInfo ? "" : "disabled"}
              value={email.value || ""}
              onChange={(e) => email.onChange(e)}
              onBlur={(e) => email.onBlur(e)}
            />
            {email.isDirty && email.isEmpty && (
              <div className="profile__meaning-err">
                Поле не может быть пустым.
              </div>
            )}
            {email.isDirty && email.minLengthError && (
              <div className="profile__meaning-err">Некорректная длина.</div>
            )}
            {email.isDirty && email.emailError && (
              <div className="profile__meaning-err">Должен быть email.</div>
            )}
          </div>
        </div>
      </div>

      {editInfo ? (
        <>
          <button
            className="profile__button-save"
            onClick={handleSaveClick}
            disabled={!name.inputValid || !email.inputValid || !dataProfile}
            aria-label="Сохранить"
          >
            Сохранить
          </button>
          <button className="profile__button-back">Назад</button>
        </>
      ) : (
        <>
          <button className="profile__button-edit">Редактировать</button>
          <button
            className="profile__button-exit"
            type="button"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </>
      )}
    </form>
    <PopupSaveProfile isOpen={isInfoTooltipOpen} onClose={closePopup}/>
    </>
  );
}

export default Profile;
