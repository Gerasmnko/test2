import React from "react";
import "./Wall.scss";
import asd from "../../images/beach.jpg";
import Posts from "./AllPosts/Posts/Posts.scss";

const Wall = () => {
  return (
    <div>
      <div className="wall">
        <img className="logo" src={asd} alt="kuy" />
      </div>
      <div>Ava description</div>
      <Posts />
    </div>
  );
};

export default Wall;
