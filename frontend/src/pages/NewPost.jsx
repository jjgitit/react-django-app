import React from "react";
import { useEffect, useState } from "react";
import api from "../api";

function NewPost() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to make note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <form onSubmit={createNote}>
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
      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default NewPost;
