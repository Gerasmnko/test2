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
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
