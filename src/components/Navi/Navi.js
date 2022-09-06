import React from "react";
import { NavLink } from "react-router-dom";
import i from "./Navi.scss";

const Navi = () => {
  return (
    <div className="navi">
      <div className="item">
        <NavLink to="/wall" activeClassName={i.active}>
          Main
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/dialogs" activeClassName={i.active}>
          Messages
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/news" activeClassName={i.active}>
          News
        </NavLink>
      </div>
      <div className="item">
        <NavLink to="/settings" activeClassName={i.active}>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Navi;
