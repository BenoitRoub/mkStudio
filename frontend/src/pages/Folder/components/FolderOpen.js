import React, { useMemo, useCallback, useState, useContext } from "react";
import { useDropzone } from "react-dropzone";
import FileListItem from "./FileListItem";
import Title from "../../../components/Title";
import { makeStyles, Typography, ButtonBase } from "@material-ui/core";

import { BsFileEarmarkPlus, BsFileEarmark } from "react-icons/bs";
import ModalImportFiles from "./ModalImportFiles";
import { Skeleton } from "@material-ui/lab";
import { useHistory } from "react-router";
import { postAuth } from "../../../api/config";
import { FolderContext } from "../../../hoc/FolderContext";
import { OpenFolderContext } from "../Folder";

function FolderOpen({ folder }) {
  const classes = useStyles();
  const history = useHistory();
  const folderContext = useContext(FolderContext);
  const openFolderContext = useContext(OpenFolderContext);

  const generatedFiles = useMemo(
    () => folder.files?.filter((file) => !file.imported),
    [folder]
  );
  const importedFiles = useMemo(
    () => folder.files?.filter((file) => file.imported),
    [folder]
  );

  const [openAddAddFile, setOpenAddFile] = useState(false);
  const [file, setFile] = useState();
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setOpenAddFile(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function generateDoc() {
    postAuth("/folder/generateDoc", {
      folderId: folder._id,
    }).then((res) => {
      openFolderContext.setFolder(res.data);
    });
  }

  return (
    <>
      <div>
        <Title
          title={
            folder.name ? "Dossier " + folder.name : <Skeleton width={200} />
          }
        />
        <div className={classes.buttonContainer}>
          <ButtonBase
            className={classes.cancelbutton}
            onClick={() => history.push("/folders/new/" + folder._id)}
            color="primary"
          >
            {folder.form ? "Modifier le formulaire" : "Remplir le formulaire"}
          </ButtonBase>
          <ButtonBase
            className={classes.button}
            //   onClick={handleConfirm}
            color="primary"
          >
            Envoyer
          </ButtonBase>
        </div>
        <Title title={"Documents générés"} />
        {!folder.files?.find((doc) => !doc.imported) && (
          <>
            {!folder.form && (
              <div className={classes.noFolder}>
                <BsFileEarmark fontSize={36} color="#4a5575" />
                <Typography className={classes.textNoFolder}>
                  Pas encore de fichier générés, remplissez le formulaire.
                </Typography>
              </div>
            )}
            {folder.form && (
              <div className={classes.noFolder}>
                <ButtonBase
                  className={classes.button}
                  onClick={generateDoc}
                  color="primary"
                >
                  Générer les documents
                </ButtonBase>
              </div>
            )}
          </>
        )}
        {generatedFiles?.map(
          (file) =>
            !file.imported && (
              <>
                {console.log(file)}
                {file.pdfPath && file.pdfUrlSigned && (
                  <FileListItem
                    name={file.name}
                    url={file.pdfUrlSigned}
                    type="pdf"
                    createdAt={file.createdAt}
                    id={file._id}
                  />
                )}
                {file.docPath && file.docUrlSigned && (
                  <FileListItem
                    name={file.name}
                    url={file.docUrlSigned}
                    type="doc"
                    createdAt={file.createdAt}
                    id={file._id}
                  />
                )}
              </>
            )
        )}
        <div className={classes.divider} />
        <Title title={"Documents importés"} />
        {importedFiles?.map(
          (file) =>
            file.imported && (
              <>
                <FileListItem
                  name={file.name}
                  url={file.pdfUrlSigned}
                  type="pdf"
                  createdAt={file.createdAt}
                  id={file._id}
                />
              </>
            )
        )}

        <div className={classes.noFolder} {...getRootProps()}>
          <input {...getInputProps()} accept="application/pdf" />
          <BsFileEarmarkPlus fontSize={36} color="#4a5575" />
          <Typography className={classes.textNoFolder}>
            {isDragActive
              ? "Déposer votre fichier ici"
              : "Importer des fichiers PDF"}
          </Typography>
        </div>
      </div>
      <ModalImportFiles
        open={openAddAddFile}
        handleClose={() => setOpenAddFile(false)}
        file={file}
        folder={folder}
      />
    </>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    divider: {
      margin: 12,
    },
    buttonContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
    },
    button: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      padding: "12px 32px",
      margin: " 0 16px 16px 16px",
      width: "auto",
      color: "white",
      borderRadius: 6,
      boxShadow: "2px 2px 8px rgba(0,0,0,0.35)",
    },
    cancelbutton: {
      marginTop: theme.spacing(3),
      padding: "12px 32px",
      margin: " 0 16px 16px 16px",
      color: "black",
      borderRadius: 6,
      border: "1px solid rgba(0,0,0,0.20)",
    },
    noFolder: {
      borderRadius: 12,
      width: "100%",
      height: "20vh",
      marginTop: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "2px dashed #E4E8F6",
      cursor: "pointer",
    },
    textNoFolder: {
      marginTop: 24,
      color: "#132046",
    },
  };
});

export default FolderOpen;
