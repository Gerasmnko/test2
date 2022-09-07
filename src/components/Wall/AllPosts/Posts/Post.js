import React from "react";
import "./Post.scss";
import asd from "../../../../images/ava.JPG";

function Post(props) {
  return (
    <div className="posts">
      <img className="ava" alt="kuy" src={asd} />
      {props.message}
      <div>
        <span>likes</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
