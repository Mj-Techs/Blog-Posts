import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { startAddPost } from "../Action/postAction";
import Alert from "./Alert";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState({});
  const errors = {};
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTitle(e.target.value);
    setSuccess(false);
  };
  const handleBodyChange = (e, editor) => {
    const body = editor.getData();
    setBody(body);
  };
  const runValidation = () => {
    //   title validation
    if (title.length === 0) {
      errors.title = true;
    }
    // Body validation
    if (body.length === 0) {
      errors.body = true;
    }
  };
  //   handleSubmit callback
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      setFormError({});
      const formData = { title, body };
      dispatch(startAddPost(formData));
      setTitle("");
      setBody("");
      setSuccess(!success);
    } else {
      setFormError(errors);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
          style={{ borderColor: formError.title && "red" }}
        />
        {formError.title && <Alert />}
        <br />
        <CKEditor
          editor={ClassicEditor}
          data={body}
          onChange={handleBodyChange}
        />
        {formError.body && <Alert />}
        <br />
        <button type="submit" className="btn submit_btn">
          PUBLISH
        </button>
      </form>
      {success && <p className="animation-style">successfully submitted</p>}
    </>
  );
};

export default PostForm;
