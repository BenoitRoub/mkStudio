import React, { useContext } from "react";
import NavBar from "./components/NavBar";
import { makeStyles } from "@material-ui/core";
import SideBar from "./components/SideBar";

function Template({ content, sidebar }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <NavBar />
      <div className={classes.content}>
        {content}
        <div style={{ height: 120 }} />
      </div>
      <SideBar>{sidebar}</SideBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      height: "100vh",
      overflow: "hidden",
    },
    content: {
      width: "calc(60% - 240px)",
      padding: "0 120px",
      paddingTop: theme.value.absoluteTop,
      borderRight: "3px solid " + theme.palette.faded,
      overflow: "auto",
    },
  };
});

export default Template;
