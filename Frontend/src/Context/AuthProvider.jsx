// React aur necessary hooks import kar rahe hain
import React, { useState, createContext, useContext } from "react";

//  1. Create a Context
// AuthContext ko create karte hain taaki hum user info globally share kar sake
export const AuthContext = createContext();

//  2. AuthProvider Component
// Ye component children components ko wrap karke AuthContext provide karega
export default function AuthProvider({ children }) {
  //children hai App.jsx ke saare components to access the setAuth and userAuth globally.
  //  2.1 Check if user info exists in localStorage
  // localStorage me data string ke form me hota hai
  const initialAuthUser = localStorage.getItem("Users");

  //  2.2 Setup authUser state
  // Agar localStorage me user data hai to use object me convert karo (JSON.parse)
  // Nahi hai to undefined se start karo
  const [authUser, setAuthUser] = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  //  2.3 Provide authUser and setAuthUser globally
  // Jo bhi component children me hai, wo authUser aur setAuthUser ko access kar sakta hai
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

//  3. Export AuthProvider
// Isko App.js me wrap karenge taaki context sabko mile

export const useAuth = () => {
  return useContext(AuthContext); // ye object {authUser, setAuthUser} return karega
};
