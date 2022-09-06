import React from "react";
import "./Post.scss";
import asd from "../../images/ava.jpg";

const Post = () => {
  return (
    <div className="posts">
      <img className="ava" alt="kuy" src={asd} />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
