import React from "react";
import Note from "../components/Note";
import Header from "../components/Header";
import api from "../api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function UserNotes() {
  const username = useParams().username; // Extract username from URL
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getUserNotes();
  }, [username]);

  const getUserNotes = () => {
    api
      .get(`/api/notes/${username}/`) // API call to get the user's notes
      .then((res) => setNotes(res.data))
      .catch((err) => alert("Error fetching user notes: ", err));
  };

  return (
    <div>
      <Header />
      <h2>Posts by {username}</h2>
      {notes.length > 0 ? (
        notes.map((note) => <Note key={note.id} note={note} />)
      ) : (
        <p>No posts found for this user.</p>
      )}
    </div>
  );
}

export default UserNotes;
