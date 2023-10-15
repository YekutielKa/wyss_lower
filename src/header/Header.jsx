import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="">
        <img className="header_logo" src="logo.png" height="60px" />
      </a>
      <div className="header_buttons">
        <button className="header_button">Оружие</button>
        <button className="header_button">Дорога</button>
        <button className="header_button">Недвижимость</button>
        <button className="header_button">Семья</button>
        <button className="header_button">Уголовное</button>
        <button className="header_button">Контакты</button>
      </div>
    </header>
  );
};

export default Header;
