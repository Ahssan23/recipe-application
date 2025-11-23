// src/pages/Profile.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {user.name}</h2>
      <p>Role: {user.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
