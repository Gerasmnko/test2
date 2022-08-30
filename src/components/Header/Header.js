import React from "react";
import "./Header.scss";
import asd from "../../images/pepsi.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={asd} alt="kuy" />
      </div>
    </header>
  );
};

export default Header;
