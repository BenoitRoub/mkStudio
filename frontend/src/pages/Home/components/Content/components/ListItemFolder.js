import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import moment from "moment";

import { BsThreeDots } from "react-icons/bs";
import FolderIcon from "../../../../../components/FolderIcon";

import { useHistory } from "react-router";

function ListItemFolder({ folder }) {
  const classes = useStyles();
  const history = useHistory();

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
        <BsThreeDots className={classes.threeDot} />
      </div>
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
  };
});

export default ListItemFolder;
