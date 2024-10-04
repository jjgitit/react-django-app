import React, { useState, useEffect } from "react";
import api from "../api";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";

function NewPost() {
  const { postId } = useParams(); // Extract noteId from params
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  // Prepopulating if we are updating notes, and have noteId
  useEffect(() => {
    if (postId) {
      api
        .get(`/api/notes/${postId}/`) // Use the correct detail endpoint
        .then((res) => {
          setTitle(res.data.title);
          setContent(res.data.content);
        })
        .catch((err) => alert(err));
    }
  }, [postId]);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Note created!");
          navigate("/"); // Redirect to Home page
        } else {
          alert("Failed to make note.");
        }
        getNotes();
      })
      .catch((err) => alert(err));
  };

  const updateNote = (e) => {
    e.preventDefault();
    api
      .put(`/api/notes/update/${postId}/`, { content, title }) // Use PUT for updating
      .then((res) => {
        if (res.status === 200) {
          alert("Post Updated!");
          navigate("/");
        } else {
          alert("Failed to Update Post...");
        }
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <Header />
      <form onSubmit={postId ? updateNote : createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value={postId ? "Update" : "Post"}></input>
      </form>
    </div>
  );
}

export default NewPost;
