import React from "react";
import "./Posts.scss";
import Post from "./Posts/Post";

const Posts = () => {
  return (
    <div className="allPosts">
      <div>Posts</div>
      <textarea></textarea>
      <button>Add new post</button>
      <div className="posts">
        <Post message="Well Hello" likesCount="73" />
        <Post message="Nock Nock Neo" likesCount="37" />
      </div>
    </div>
  );
};

export default Posts;
