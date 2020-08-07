import React from "react";

import { ReactComponent as Illustration } from "../../../../icons/illustrationSideBar.svg";
import { makeStyles } from "@material-ui/core";

function HomeSidebar() {
  const classes = useStyles();
  return (
    <div className={classes.illustration}>
      <Illustration />
    </div>
  );
}
const useStyles = makeStyles((theme) => {
  return {
    illustration: {
      position: "absolute",
      bottom: 16,
      display: "flex",
      justifyContent: "center",
      width: "19.5%",
    },
  };
});

export default HomeSidebar;
