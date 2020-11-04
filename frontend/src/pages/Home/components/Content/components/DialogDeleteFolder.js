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
import { postAuth } from "../../../../../api/config";
import { FolderContext } from "../../../../../hoc/FolderContext";

function DialogDeleteFolder({ open, handleClose, name, id }) {
  const classes = useStyles();
  const folderContext = useContext(FolderContext)

  function handleConfirm(e) {
    e.stopPropagation()
    handleClose();
    postAuth("/folder/delete", { folderId: id }).then((res) =>
      
    folderContext.setFolders(res.data ||[])
    );
  }

  function onClose(e) {    
    e.stopPropagation()
    handleClose()
  }


  return (
    <Dialog open={open} onClose={e => onClose(e)}>
      <DialogTitle id="form-dialog-title">Supprimer un dossier</DialogTitle>
      <DialogContent>
        <Typography className={classes.label}>
          Vous êtes sur le point de supprimer le dossier {name}
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <ButtonBase
          className={classes.cancelbutton}
          onClose={e => onClose(e)}
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

export default DialogDeleteFolder;
