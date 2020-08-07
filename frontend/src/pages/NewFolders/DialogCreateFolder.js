import React, { useState, useContext } from "react";
import {
  makeStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  ButtonBase,
  InputBase,
} from "@material-ui/core";
import { useHistory } from "react-router";
import { FolderContext } from "../../hoc/FolderContext";
import { postAuth } from "../../api/config";

function DialogCreateFolder({ open, handleClose }) {
  const classes = useStyles();
  const history = useHistory();
  const folderContext = useContext(FolderContext);

  const [folderName, setFolderName] = useState("");

  function handleClick() {
    postAuth("/folder/create", { folderName }).then((res) => {
      folderContext.setFolders([...folderContext.folders, res.data]);
      history.push("/folders/" + res.data._id);
    });
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Nouveau dossier</DialogTitle>
      <DialogContent>
        <Typography className={classes.label}>Nom du dossier</Typography>
        <InputBase
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          inputProps={{
            style: { padding: "8px 12px" },
          }}
          className={classes.input}
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
          style={{ fontWeight: "bold" }}
          onClick={handleClick}
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
      color: "#757575",
      paddingLeft: 12,
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

export default DialogCreateFolder;
