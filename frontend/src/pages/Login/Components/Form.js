import React, { useState, useContext } from "react";
import {
  makeStyles,
  Typography,
  InputBase,
  ButtonBase,
} from "@material-ui/core";
import { postNotAuth } from "../../../api/config";

import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../hoc/Authorization";
import { UserContext } from "../../../hoc/UserContext";

function Form() {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authContext = useContext(AuthContext);
  const userContext = useContext(UserContext);

  function handleClick() {
    postNotAuth(
      "/user/login",
      { email, password },
      { 200: history.push("/folders") }
    ).then((res) => {
      authContext.setAuthToken(res.data);
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerForm}>
        <div className={classes.titleContainer}>
          <Logo />
          <Typography component="h1" className={classes.title}>
            Soluo Avocats
          </Typography>
        </div>

        <Typography className={classes.label}>Adresse email</Typography>
        <InputBase
          className={classes.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{
            style: { padding: "8px 12px" },
          }}
        />

        <Typography className={classes.label}>Mot de passe</Typography>
        <InputBase
          className={classes.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{
            style: { padding: "8px 12px" },
          }}
        />

        <ButtonBase className={classes.button} onClick={handleClick}>
          Connexion
        </ButtonBase>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 36 37"
      width="36"
      height="36"
      xmlSpace="preserve"
    >
      <g id="_2_petitlogo">
        <g id="logo" transform="translate(74 102)">
          <path
            id="Path_36_Copy_2"
            opacity="0.3"
            fill="#5348E3"
            enableBackground="new"
            d="M-73.3-96.2c16,9.2,21.8,19.4,17.3,30.7C-67.4-67.4-73.2-77.7-73.3-96.2z"
          />
          <path
            id="Path_36_Copy_3"
            opacity="0.3"
            fill="#5348E3"
            enableBackground="new"
            d="M-38.7-96.2C-54.6-87-60.4-76.8-56-65.5C-44.6-67.4-38.8-77.7-38.7-96.2z"
          />
          <path
            id="Path_36"
            opacity="0.3"
            fill="#5348E3"
            enableBackground="new"
            d="M-56-101c0,0-14,24.2,0,35.5C-42.6-76.8-56-101-56-101z"
          />
        </g>
      </g>
    </svg>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "50%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    containerForm: {
      marginTop: -80,
      display: "flex",
      flexDirection: "column",
    },
    titleContainer: {
      display: "flex",
      alignItems: "center",
      marginBottom: theme.spacing(6),
    },
    title: {
      color: theme.palette.primary.main,
      fontWeight: "bold",
      fontSize: "1.3rem",
      marginLeft: theme.spacing(3),
      fontFamily: "Helvetica",
      letterSpacing: "-0.2px",
    },
    label: {
      color: "#757575",
      paddingLeft: 12,
      marginBottom: 4,
    },
    input: {
      marginBottom: theme.spacing(3),
      width: "15vw",
      border: "1px solid rgba(0,0,0,0.20)",
      borderRadius: 6,
    },
    button: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      padding: "12px 32px",
      width: "auto",
      color: "white",
      borderRadius: 6,
      boxShadow: "2px 2px 8px rgba(0,0,0,0.35)",
    },
  };
});

export default Form;
