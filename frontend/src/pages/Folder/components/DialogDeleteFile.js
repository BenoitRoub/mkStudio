import React, { useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  ButtonBase,
  makeStyles,
} from "@material-ui/core";
import { postAuth } from "../../../api/config";
import { OpenFolderContext } from "../Folder";

function DialogDeleteFile({ open, handleClose, name, id, type }) {
  const classes = useStyles();
  const openFolderContext = useContext(OpenFolderContext);

  function handleConfirm() {
    handleClose();
    postAuth("/file/delete", { fileId: id, type }).then((res) =>
      openFolderContext.setFolder({
        ...openFolderContext.folder,
        files: openFolderContext.folder.files.filter((file) => file._id !== id),
      })
    );
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Supprimer un fichier</DialogTitle>
      <DialogContent>
        <Typography className={classes.label}>
          Vous êtes sur le point de supprimer le fichier {name}
        </Typography>
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
          style={{ fontWeight: "bold" }}
          onClick={handleConfirm}
          color="primary"
        >
          Confirmer
        </ButtonBase>
      </DialogActions>
    </Dialog>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    label: {
      color: "#0a0a0a",
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
      justifyContent: "flex-end",
    },
  };
});

export default DialogDeleteFile;
