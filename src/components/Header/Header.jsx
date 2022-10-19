import { Link, useLocation } from "react-router-dom";
import Authentication from "../Authentication/Authentication";
import logo from "../../images/logo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Account from "../Account/Account";
import React from "react";

function Header({ themeColor }) {
  const location = useLocation();
  const windowInnerWidth = window.innerWidth;

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
        {location.pathname === "/" ? (
          <Authentication />
        ) : windowInnerWidth <= 768 ? (
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
                <Navigation>
                  <Link to={"/"} className="navigation__link">Главная</Link>
                </Navigation>
                <Account />
              </div>
            </div>
          </>
        ) : (
          <>
            <Navigation />
            <Account />
          </>
        )}
      </>
    </header>
  );
}

export default Header;
