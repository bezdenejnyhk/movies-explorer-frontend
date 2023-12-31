import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../../images/logo.svg";
import { useLocation, Link } from "react-router-dom";
import Drawer from "../Drawer/Drawer";
import useResize from "../../hooks/useResize";

const Header = ({ isLoggedIn }) => {
  const size = useResize();
  let location = useLocation();
  return (
    <header className={location.pathname === "/" ? "header_color" : "header"}>
      <Link className="header__route" to="/">
        <img className="header__logo" src={Logo} alt="Логотип" />
      </Link>

      {size.width > 768 ? (
        <Navigation isLoggedIn={isLoggedIn} />
      ) : isLoggedIn ? (
        <Drawer isLoggedIn={isLoggedIn} />
      ) : (
        <Navigation isLoggedIn={isLoggedIn} />
      )}
    </header>
  );
};

export default Header;
