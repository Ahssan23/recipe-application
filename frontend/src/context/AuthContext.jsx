// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");
    if (token && name && role) {
      setUser({ token, name, role });
    }
  }, []);

  const login = (token, role, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
    setUser({ token, role, name });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
