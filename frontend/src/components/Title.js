import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

function Title({ title }) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>{title}</Typography>
      <div className={classes.separator}>
        <div className={classes.separatorBegining} />
        <div className={classes.separatorEnd} />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    title: {
      fontSize: "1.4rem",
      color: "#0E1B42",
    },
    separator: {
      display: "flex",
      alignItems: "center",
      margin: "6px 0",
    },
    separatorBegining: {
      width: 60,
      backgroundColor: "#C4E2E6",
      borderRadius: 6,
      height: 6,
    },
    separatorEnd: {
      width: "100%",
      background: theme.palette.faded,
      height: 3,
      borderRadius: 3,
    },
  };
});

export default Title;
