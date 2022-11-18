import { Link } from "react-router-dom";
import Authentication from "../Authentication/Authentication";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import React from "react";

function Header({ themeColor, loggedIn }) {
  const [menuActive, setMenuActive] = React.useState(false);

  const openMenu = (e) => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={`header ${themeColor}`}>
      <Link to={"/"}>
        <img className="header__logo" alt="Movies" src={logo} />
      </Link>
      <>
        {loggedIn ? (
          <>
            <nav className="burger">
              <div className="burger__btn" onClick={openMenu}>
                <span className="burger__span"></span>
              </div>
            </nav>
            <div
              className={`menu ${menuActive ? "menu__active" : ""}`}
              onClick={openMenu}
            >
              <div className="menu__opacity"></div>
              <div
                className="menu__content"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button className="menu__btn-close" onClick={openMenu} />
                </div>
                <Navigation active={true}>
                  <Link to={"/"} className="navigation__link">
                    Главная
                  </Link>
                </Navigation>
                <Account active={true} />
              </div>
            </div>
            <Navigation active={false} />
            <Account active={false} />
          </>
        ) : (
          <Authentication />
        )}
      </>
    </header>
  );
}

export default Header;
