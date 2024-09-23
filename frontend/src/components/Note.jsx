import React from "react";
import "../styles/Note.css";
import api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

  const [currentUserId, setCurrentUserId] = useState(null); // Store current user ID

  useEffect(() => {
    // Fetch the current user when the component mounts
    api
      .get("/api/current_user/")
      .then((response) => {
        setCurrentUserId(response.data.username); // Store the logged-in user's ID
      })
      .catch((error) => {
        console.error("Error fetching current user:", error);
      });
  }, []);

  return (
    <div className="note-container">
      <p className="note-title">{note.title}</p>
      <Link to={`notes/${note.author}`}>{note.author}</Link>
      <p className="note-content">{note.content}</p>
      <p className="note-date">{formattedDate}</p>
      {currentUserId === note.author && ( // Compare user IDs instead of usernames
        <button className="delete-button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      )}
    </div>
  );
}

export default Note;
