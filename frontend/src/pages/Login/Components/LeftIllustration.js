import React from "react";
import { makeStyles } from "@material-ui/core";

import { ReactComponent as Illustration } from "../../../icons/#1_Illustration 1.svg";

function LeftIllustration() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Illustration />
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.primary.main,
      width: "50%",
      height: "100vh",
    },
  };
});

export default LeftIllustration;
