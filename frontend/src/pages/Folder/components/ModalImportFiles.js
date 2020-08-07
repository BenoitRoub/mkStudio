import React, { useEffect, useState, useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
  TextField,
  Typography,
  InputBase,
  ButtonBase,
  makeStyles,
} from "@material-ui/core";
import { postAuth } from "../../../api/config";
import { OpenFolderContext } from "../Folder";

function ModalImportFiles({ open, handleClose, file, folder }) {
  const classes = useStyles();
  const openFolderContext = useContext(OpenFolderContext);

  const [name, setName] = useState("");

  useEffect(() => {
    if (file) {
      setName(file.name);
    }
  }, [file]);

  function handleConfirm() {
    handleClose();
    var formData = new FormData();

    formData.append("name", name);
    formData.append("file", file);
    formData.append("type", file.type);
    formData.append("folderId", folder._id);

    postAuth("/file/import", formData, {
      405: () => console.log("Wrong type of file"),
    }).then((res) => {
      openFolderContext.setFolder({
        ...openFolderContext.folder,
        files: [...openFolderContext.folder.files, res.data],
      });
    });
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Importer un fichier</DialogTitle>
      <DialogContent>
        <Typography className={classes.label}>Nom du fichier</Typography>
        <InputBase
          className={classes.input}
          autoFocus
          label="Nom du fichier"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          inputProps={{
            style: { padding: "8px 12px" },
          }}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ButtonBase
          className={classes.cancelbutton}
          onClick={handleClose}
          color="primary"
        >
          Annuler
        </ButtonBase>
        <ButtonBase
          className={classes.button}
          onClick={handleConfirm}
          color="primary"
        >
          Enregistrer
        </ButtonBase>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    label: {
      color: "#757575",
      marginBottom: 4,
    },
    input: {
      width: "15vw",
      border: "1px solid rgba(0,0,0,0.20)",
      borderRadius: 6,
    },
    cancelbutton: {
      marginTop: theme.spacing(3),
      padding: "12px 32px",
      margin: " 0 16px 16px 16px",
      color: "black",
      borderRadius: 6,
      border: "1px solid rgba(0,0,0,0.20)",
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
    dialogActions: {
      display: "flex",
      justifyContent: "space-between",
    },
  };
});

export default ModalImportFiles;
