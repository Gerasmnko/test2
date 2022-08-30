import React from "react";
import "./Wall.scss";

const Wall = () => {
  return (
    <div className="wall">
      <div>
        <img
          className="logo"
          src="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
        />
      </div>
      <div>Ava+description+pohuytest</div>
      <div>Posts</div>
      <div>
        <div>Post1</div>
        <div>Post2</div>
      </div>
    </div>
  );
};

export default Wall;
