import React, { useState } from "react";
import { makeStyles, Menu, MenuItem, Typography } from "@material-ui/core";
import moment from "moment";

import { BsThreeDots } from "react-icons/bs";
import FolderIcon from "../../../../../components/FolderIcon";
import DialogDeleteFolder from './DialogDeleteFolder'

import { useHistory } from "react-router";

function ListItemFolder({ folder }) {
  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDeleteFolder, setOpenDeleteFolder] = useState(false);
  return (
    <div
      className={classes.container}
      onClick={() => history.push("/folders/" + folder._id)}
    >
      <div className={classes.padding}>
        <div className={classes.nameContainer}>
          <FolderIcon />
          <Typography className={classes.name}>{folder.name}</Typography>
        </div>
        <Typography className={classes.date}>
          {moment(folder.createdAt).format("DD MMM YYYY")}
        </Typography>
        <BsThreeDots className={classes.threeDot} onClick={(e) => {
              e.stopPropagation();
              setAnchorEl(e.currentTarget);
            }} />
      </div>
      <FolderMenu
        onClick={() => setOpenDeleteFolder(true)}
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
      />
      <DialogDeleteFolder
        open={openDeleteFolder}
        handleClose={() => setOpenDeleteFolder(false)}
        name={folder.name}
        id={folder._id}
      />
    </div>
  );
}
const useStyles = makeStyles((theme) => {
  return {
    container: {
      borderRadius: 12,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#F7F8FB",
      },
    },
    padding: {
      padding: 24,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      alignItems: "center",
    },
    nameContainer: {
      display: "flex",
      alignItems: "center",
    },
    name: {
      color: "#0E1B42",
      margin: "6px 12px",
    },
    date: {
      color: "#8186AD",
      fontSize: "0.8rem",
      justifySelf: "center",
    },
    threeDot: {
      color: "#8186AD",
      justifySelf: "end",
    },
    menu: {
      marginTop: 12,
      "& .MuiPaper-root": {
        borderRadius: 12,
      },
    },
    menuItem: {
      color: "#5348E3",
      "&:hover": {
        background: "white",
      },
    },
  };
});

function FolderMenu({ anchorEl, handleClose, onClick }) {
  const classes = useStyles();
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      className={classes.menu}
    >
      <MenuItem
        onClick={(e) => {
          e.stopPropagation()
          onClick();
          handleClose();
        }}
        className={classes.menuItem}
      >
        Supprimer
      </MenuItem>
    </Menu>
  );
}

export default ListItemFolder;
