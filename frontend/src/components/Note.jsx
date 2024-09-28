import React from "react";
import styles from "../styles/Note.module.css";
import api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Note({ note, onDelete, onUpdate }) {
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
    <div className={styles.container}>
      <p className={styles.title}>{note.title}</p>
      <Link to={`/notes/${note.author}`}>{note.author}</Link>
      <p className={styles.content}>{note.content}</p>
      <p className={styles.date}>{formattedDate}</p>
      {currentUserId === note.author && ( // Compare user IDs instead of usernames
        <button className={styles.deleteBtn} onClick={() => onDelete(note.id)}>
          Delete
        </button>
      )}
      {currentUserId === note.author && ( // Compare user IDs instead of usernames
        <button
          className={styles.updateBtn}
          onClick={() => console.log('update btn')}
        >
          Update
        </button>
      )}
    </div>
  );
}

export default Note;
