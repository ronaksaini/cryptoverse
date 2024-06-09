// // src/context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth } from '../../firebase';
// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, []);

//   const login = async (email, password) => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       console.error("Failed to sign in:", error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await auth.signOut();
//       setUser(null);
//     } catch (error) {
//       console.error("Failed to sign out:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
