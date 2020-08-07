import React, { createContext, useState } from "react";

export const UserContext = createContext({});

function UserContextHoc({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextHoc;
