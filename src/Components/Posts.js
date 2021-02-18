import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import PostForm from "./PostForm";
import PostList from "./PostList";
import Search from "./Search";

const Wrapper = styled.div`
  height: 100%;
  padding: 10px;
  margin: 10px;
  display: grid;
  grid-template: 0.1fr 0.2fr 1fr/1fr;
  grid-gap: 10px;
`;
const Posts = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showPostList, setShowPostList] = useState(false);
  const posts = useSelector((state) => state.posts);
  const handleSearchValue = (value) => {
    setSearchValue(value);
  };
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  const handleShowPost = () => {
    setShowPostList(!showPostList);
  };
  return (
    <Wrapper>
      <div className="search">
        <Search handleSearchValue={handleSearchValue} />
      </div>
      <div className="btn-grp">
        <div>
          <button onClick={handleShowForm} className="btn">
            New Post
          </button>
        </div>
        <div>
          <button onClick={handleShowPost} className="btn">
            Published
          </button>
        </div>
      </div>
      <div className="main_block">
        <div className="form_block">{showForm && <PostForm />}</div>
        <div className="post_block">
          {showPostList &&
            posts
              .filter(
                (ele) =>
                  ele.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                  ele.body.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((ele, i) => (
                <PostList key={i} title={ele.title} body={ele.body} />
              ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Posts;
