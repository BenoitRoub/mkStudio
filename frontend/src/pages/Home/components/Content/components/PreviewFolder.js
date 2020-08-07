import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import moment from "moment";
import FolderIcon from "../../../../../components/FolderIcon";
import HomeSidebar from "../../SideBar/HomeSidebar";
import { useHistory } from "react-router";

function PreviewFolder({ folder }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div
      className={classes.container}
      onClick={() => history.push("/folders/" + folder._id)}
    >
      <div className={classes.padding}>
        <FolderIcon />
        <Typography className={classes.name}>{folder.name}</Typography>
        <Typography className={classes.date}>
          {moment(folder.createdAt).format("DD MMM YYYY")}
        </Typography>
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => {
  return {
    container: {
      borderRadius: 12,
      width: 220,
      height: 150,
      backgroundColor: "#F7F8FB",
      marginRight: 12,
      cursor: "pointer",
    },
    padding: {
      padding: 24,
    },
    name: {
      color: "#0E1B42",
      margin: "6px 0",
    },
    date: {
      color: "#8186AD",
      fontSize: "0.8rem",
    },
  };
});

export default PreviewFolder;
