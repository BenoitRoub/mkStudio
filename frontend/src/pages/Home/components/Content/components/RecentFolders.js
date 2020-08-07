import React, { useState, useContext, useMemo } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import Title from "../../../../../components/Title";
import PreviewFolder from "./PreviewFolder";
import { useHistory } from "react-router";
import { FolderContext } from "../../../../../hoc/FolderContext";
import moment from "moment";
import DialogCreateFolder from "../../../../NewFolders/DialogCreateFolder";

function RecentFolders({ search }) {
  const classes = useStyles();
  const history = useHistory();

  const folderContext = useContext(FolderContext);

  const folders = useMemo(
    () =>
      folderContext.folders
        ? [
            folderContext.folders[2],
            folderContext.folders[1],
            folderContext.folders[0],
          ]
        : [],
    [folderContext]
  );

  const [openNewFolder, setOpenNewFolder] = useState(false);

  return (
    <div className={classes.container}>
      {!search && (
        <>
          <Title title="Dossiers récents" />
          <div className={classes.foldersContainer}>
            {folders?.map(
              (folder, index) =>
                folder && index < 3 && <PreviewFolder folder={folder} />
            )}

            <div
              className={classes.dropZone}
              onClick={() => setOpenNewFolder(true)}
            >
              <AddButton />
              <Typography className={classes.dropText}>
                Nouveau dossier
              </Typography>
            </div>
          </div>
        </>
      )}
      <DialogCreateFolder
        open={openNewFolder}
        handleClose={() => setOpenNewFolder(false)}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      marginTop: `calc(${theme.value.absoluteTopContent} - ${theme.value.absoluteTop} - 56px)`,
    },
    foldersContainer: {
      margin: "40px 0",
      display: "flex",
    },
    dropZone: {
      border: "2px dashed #E4E8F6",
      borderRadius: 12,
      width: 220 - 4,
      height: 150 - 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      cursor: "pointer",
    },
    dropText: {
      marginTop: 4,
      color: "#132046",
    },
  };
});

function AddButton() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 40 40"
      width={48}
      height={48}
      xmlSpace="preserve"
    >
      <circle fill="#F7F8FB" cx="20" cy="20" r="19" />
      <line strokeWidth={2} stroke="#5057A6" x1="20" y1="15" x2="20" y2="25" />
      <line strokeWidth={2} stroke="#5057A6" x1="15" y1="20" x2="25" y2="20" />
    </svg>
  );
}

export default RecentFolders;
