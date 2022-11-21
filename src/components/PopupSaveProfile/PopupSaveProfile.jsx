import React from "react";
import { useEffect } from "react";
import "./PopupSaveProfile.css";

function PopupSaveProfile({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
  }, [isOpen]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div>
    <div
      className={`popup popup_profile ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className="popup__content">
        <button
          className="popup__close"
          type="button"
          aria-label="закрыть попап"
          onClick={onClose}
        ></button>
        <div className="popup__tooltip-info popup__info">
          <p className="popup__tooltip-title">Профиль успешно изменен.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PopupSaveProfile;
