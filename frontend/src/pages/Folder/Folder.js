import React, { useEffect, useContext, createContext, useState } from "react";
import Template from "../Template/Template";
import { useParams } from "react-router";
import { postAuth } from "../../api/config";
import FolderOpen from "./components/FolderOpen";
import { relativeTimeRounding } from "moment";

export const OpenFolderContext = createContext({});

function Folder() {
  const [folder, setFolder] = useState({});

  const { id } = useParams();

  useEffect(() => {
    setFolder("loading");
    postAuth("/folder/get", { id }).then((res) => {
      setFolder(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (folder.files) {
      for (let file of folder.files) {
        if (
          new Date().getTime() - new Date(file.dateUrlSigned).getTime() >
          59 * 5 * 1000
        ) {
          console.log(new Date().getTime() - new Date(file.dateUrlSigned).getTime())
          postAuth("/folder/get", { id }).then((res) => {
            setFolder(res.data);
          });
          break;
        }
      }
    }
  });

  return (
    <OpenFolderContext.Provider value={{ folder, setFolder }}>
      <Template
        content={
          <FolderOpen
            folder={folder}
            handleNewFile={(data) => {
              setFolder({ ...folder, files: [...folder.files, data] });
            }}
            handleDeleteFile={(id) => {
              setFolder({
                ...folder,
                files: folder.files.filter((file) => file._id !== id),
              });
            }}
          />
        }
      />
    </OpenFolderContext.Provider>
  );
}

export default Folder;
