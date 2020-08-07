import React from "react";
import Form from "./Components/Form";
import LeftIllustration from "./Components/LeftIllustration";
import { makeStyles } from "@material-ui/core";

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Form />

      <LeftIllustration />
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});
export default Login;
