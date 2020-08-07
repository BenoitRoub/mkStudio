import React, { useState } from "react";
import { makeStyles, Typography, Menu, MenuItem } from "@material-ui/core";
import moment from "moment";

import { BsThreeDots } from "react-icons/bs";

import { useHistory } from "react-router";

import { ReactComponent as DocIcon } from "../../../icons/google-docs.svg";
import { ReactComponent as PdfIcon } from "../../../icons/pdf.svg";
import DialogDeleteFile from "./DialogDeleteFile";

function FileListItem({ name, type, url, createdAt, id }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDeleteFile, setOpenDeleteFile] = useState(false);
  return (
    <>
      <div className={classes.container} onClick={() => window.open(url)}>
        <div className={classes.padding}>
          <div className={classes.nameContainer}>
            {type === "pdf" ? <PdfIcon width={36} /> : <DocIcon width={36} />}
            <Typography className={classes.name}>{name}</Typography>
          </div>
          <Typography className={classes.date}>
            {moment(createdAt).format("DD MMM YYYY")}
          </Typography>
          <BsThreeDots
            className={classes.threeDot}
            onClick={(e) => {
              e.stopPropagation();
              setAnchorEl(e.currentTarget);
            }}
          />
        </div>
      </div>
      <FileMenu
        onClick={() => setOpenDeleteFile(true)}
        anchorEl={anchorEl}
        handleClose={() => setAnchorEl(null)}
      />
      <DialogDeleteFile
        open={openDeleteFile}
        handleClose={() => setOpenDeleteFile(false)}
        name={name}
        id={id}
        type={type}
      />
    </>
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
      gridTemplateColumns: "2fr 1fr 1fr",
      alignItems: "center",
    },
    nameContainer: {
      display: "flex",
      alignItems: "center",
    },
    name: {
      color: "#0E1B42",
      margin: "6px 12px",
      marginLeft: 36,
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

function FileMenu({ anchorEl, handleClose, onClick }) {
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
        onClick={() => {
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

export default FileListItem;
