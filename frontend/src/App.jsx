import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NewPost from "./pages/NewPost";
import NotFound from "./pages/NotFound";
import UserNotes from "./pages/UserNotes";
import ProtectedRoute from "./components/ProtectedRoute";

function Logout() {
  //clear access and refresh token as soon as logout
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  //this is to prevent accidentally passing in access at register
  //if we have token cached in our local storage
  //which can create bugs
  localStorage.clear();
  return <Navigate to="/login" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-post/:postId"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-post"
          element={
            <ProtectedRoute>
              <NewPost />
            </ProtectedRoute>
          }
        />

        <Route path="/notes/:username" element={<UserNotes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
