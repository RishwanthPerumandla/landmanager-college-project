/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // Check if the access token is valid when the component is mounted
    const savedAccessToken = getCookie('accessToken');
    
    if (savedAccessToken) {
      // You may need to implement a token validation function on the server
      // to check if the token is still valid and belongs to the user
      // Example: performTokenValidation(savedAccessToken).then((isValid) => {
      //   setAuthenticated(isValid);
      //   setAccessToken(savedAccessToken);
      // });
      
      setAuthenticated(true);
      setAccessToken(savedAccessToken);
    }
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const login = (token) => {
    setAccessToken(token);
    setAuthenticated(true);
    // Store the access token in cookies if needed
    document.cookie = `accessToken=${token}; Secure; SameSite=None;`;
  }

  const logout = () => {
    setAccessToken(null);
    setAuthenticated(false);
    // Remove the access token from cookies if needed
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Secure; SameSite=None;';
  }

  return (
    <AuthContext.Provider value={{ authenticated, accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
