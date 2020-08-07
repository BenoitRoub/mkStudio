import React, { createContext, useState } from "react";

export const FolderContext = createContext({});
function FolderContextHoc({ children }) {
  const [folders, setFolders] = useState();

  return (
    <FolderContext.Provider value={{ folders, setFolders }}>
      {children}
    </FolderContext.Provider>
  );
}

export default FolderContextHoc;
