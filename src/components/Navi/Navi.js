import React from "react";
import "./Navi.scss";

const Navi = () => {
  return (
    <div className="navi">
      <div className="item">
        <a>Main</a>
      </div>
      <div className="item">
        <a>Messages</a>
      </div>
      <div className="item">
        <a>News</a>
      </div>
      <div className="item">
        <a>Settings</a>
      </div>
    </div>
  );
};

export default Navi;
