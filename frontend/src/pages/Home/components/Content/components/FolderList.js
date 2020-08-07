import React, { useState, useContext, useEffect } from "react";
import Title from "../../../../../components/Title";
import ListItemFolder from "./ListItemFolder";
import FolderIcon from "../../../../../components/FolderIcon";
import { Typography, makeStyles } from "@material-ui/core";
import { FolderContext } from "../../../../../hoc/FolderContext";
import Fuse from "fuse.js";

function FolderList({ search }) {
  const classes = useStyles();

  const folderContext = useContext(FolderContext);
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    if (search) {
      const options = {
        includeScore: false,
        // Search in `author` and in `tags` array
        keys: ["name"],
      };
      const fuse = new Fuse(folderContext.folders, options);
      const result = fuse.search(search).map((item) => item.item);

      setFolders(result);
    } else setFolders(folderContext.folders);
  }, [search, folderContext]);

  return (
    <div>
      <Title title="Dossiers" />
      {folders?.length > 0 ? (
        folders.map((folder) => <ListItemFolder folder={folder} />)
      ) : (
        <div className={classes.noFolder}>
          <FolderIcon />
          <Typography className={classes.textNoFolder}>
            Auncun dossier
          </Typography>
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    noFolder: {
      borderRadius: 12,
      width: "100%",
      height: "30vh",
      backgroundColor: "#F7F8FB",
      marginTop: 56,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    textNoFolder: {
      marginTop: 12,
      color: "#132046",
    },
  };
});

export default FolderList;
