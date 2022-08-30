import React from "react";
import "./Wall.scss";
import asd from "../../images/logo.png";

const Wall = () => {
  return (
    <div className="wall">
      <div>
        <img className="logo" src={asd} alt="kuy" />
      </div>
      <div>Ava description</div>
      <div>Posts</div>
      <div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
  );
};

export default Wall;
