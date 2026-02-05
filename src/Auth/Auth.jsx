// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context object with a default value (optional)
const AuthContext = createContext(null);

// Create a custom hook to use the auth context easily in components
export function useAuth() {
  return useContext(AuthContext);
}

// Create the Provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // State to hold user info or null
  const[token , settoken] = useState()

  const login = (token) => {
    // In a real app, this would involve API calls for authentication
    settoken(localStorage.setItem("token",token))
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // The value provided to the children components
  const value = {
    token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
