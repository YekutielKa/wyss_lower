import React from "react";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header_logo" src="logo.png" height="60px" />
      </Link>
      <div className="header_buttons">
        <Link to="/arms">
          <button className="header_button">Оружие</button>
        </Link>
        <Link to="/traffic">
          <button className="header_button">Дорога</button>
        </Link>
        <Link to="/realstate">
          <button className="header_button">Недвижимость</button>
        </Link>
        <Link to="/family">
          <button className="header_button">Семья</button>
        </Link>
        <Link to="/criminal">
          <button className="header_button">Уголовное</button>
        </Link>
        <Link to="/contact">
          <button className="header_button">Контакты</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
