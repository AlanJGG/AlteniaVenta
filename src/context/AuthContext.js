import React, { createContext, useState, useEffect } from "react";

// Crear el contexto
const AuthContext = createContext();

// Proveedor de autenticación
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Cargar el estado de autenticación desde localStorage si existe
    const storedUser = localStorage.getItem("userDetails");
    if (storedUser) {
      setIsAuthenticated(true);
      setUserDetails(JSON.parse(storedUser));
    }
  }, []);

  const login = (userDetails) => {
    setIsAuthenticated(true);
    setUserDetails(userDetails);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
    localStorage.removeItem("userDetails");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userDetails, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
