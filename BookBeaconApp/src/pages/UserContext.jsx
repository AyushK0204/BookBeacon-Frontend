// src/context/UserContext.js
// import React, { createContext, useContext, useState } from 'react';

// // Create a context to hold user data
// const UserContext = createContext();

// export const useUser = () => {
//     return useContext(UserContext);
// };

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         name: "Riya Sharma",
//         email: "riyasharma2@gmail.com",
//         membershipId: "29038",
//         joinDate: "2024-11-01",
//         phone: "983678272",
//         address: "S-3 Rohini",
//     });

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };
// src/context/UserContext.js or UserContext.jsx


// import React, { createContext, useContext, useState } from 'react';

// // Create a Context
// const UserContext = createContext();

// // Custom hook to use the UserContext
// export const useUser = () => {
//   return useContext(UserContext); // This returns the current user object
// };

// // UserProvider component that provides the user data to the app
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState({
//     name: 'Riya Sharma',
//     email: 'riyasharma2@gmail.com',
//     membershipId: '29038',
//     joinDate: '2024-11-01',
//     phone: '983678272',
//     address: 'S-3 Rohini',
//   });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// src/pages/UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext); // This returns the current user object
};

// UserProvider component that provides the user data to the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Riya Sharma',
    email: 'riyasharma2@gmail.com',
    CollegeId: 'jims0122',
    joinDate: '18-11-2024',
    phone: '983678272',
    address: 'S-3 Rohini',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
