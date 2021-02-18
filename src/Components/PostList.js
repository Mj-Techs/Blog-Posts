import React from "react";
import parse from "html-react-parser";
const PostList = ({ title, body }) => {
  return (
    <div className="post_card">
      <h2>{title}</h2>
      <p className="post_body">{parse(body)}</p>
    </div>
  );
};

export default PostList;
