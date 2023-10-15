import React from "react";

const Header = () => {
  return (
    <header className="header">
      <img className="header_logo" src="logo.png" height="60px" />
      <button className="header_button">Оружие</button>
      <button className="header_button">Дорога</button>
      <button className="header_button">Недвижимость</button>
      <button className="header_button">Семья</button>
      <button className="header_button">Уголовное</button>
      <button className="header_button">Контакты</button>
    </header>
  );
};

export default Header;
