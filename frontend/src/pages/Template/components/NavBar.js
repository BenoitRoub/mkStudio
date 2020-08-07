import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";

function NavBar() {
  const navState = useLocation().pathname;
  const history = useHistory();

  const classes = useStyles({ home: navState.includes("home") });

  return (
    <div className={classes.container}>
      <Logo />

      <div className={classes.linkContainer}>
        <Typography
          className={classes.home}
          onClick={() => history.push("/home")}
        >
          Accueil
        </Typography>

        <Typography
          className={classes.folders}
          onClick={() => history.push("/folders")}
        >
          Dossiers
        </Typography>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: "20%",
      height: "100vh",
      backgroundColor: theme.palette.primary.main,
    },
    linkContainer: {
      marginTop: theme.value.absoluteTopContent,
    },
    home: {
      color: ({ home }) => (home ? "white" : "rgba(255,255,255, 0.8)"),
      background: ({ home }) =>
        home
          ? "transparent linear-gradient(90deg, rgba(255,255,255, 0.10) 0%, rgba(255,255,255, 0) 90%) 0% 0% no-repeat padding-box"
          : null,
      padding: "16px 48px ",
      cursor: "pointer",
      transition: "200ms",
      "&:hover": {
        color: "white",
      },
    },
    folders: {
      color: ({ home }) => (!home ? "white" : "rgba(255,255,255, 0.7)"),
      background: ({ home }) =>
        !home
          ? "transparent linear-gradient(90deg, rgba(255,255,255, 0.10) 0%, rgba(255,255,255, 0) 90%) 0% 0% no-repeat padding-box"
          : null,
      padding: "16px 48px ",
      cursor: "pointer",
      transition: "200ms",
      "&:hover": {
        color: "white",
      },
    },
    logo: {
      position: "absolute",
      left: theme.value.absoluteLeft,
      top: theme.value.absoluteTop,
      width: 40,
      height: 40,
    },
  };
});

function Logo() {
  const classes = useStyles();
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 36 37"
      xmlSpace="preserve"
      className={classes.logo}
    >
      <g id="_2_petitlogo">
        <g id="logo" transform="translate(74 102)">
          <path
            id="Path_36_Copy_2"
            opacity="0.3"
            fill="white"
            enableBackground="new"
            d="M-73.3-96.2c16,9.2,21.8,19.4,17.3,30.7C-67.4-67.4-73.2-77.7-73.3-96.2z"
          />
          <path
            id="Path_36_Copy_3"
            opacity="0.3"
            fill="white"
            enableBackground="new"
            d="M-38.7-96.2C-54.6-87-60.4-76.8-56-65.5C-44.6-67.4-38.8-77.7-38.7-96.2z"
          />
          <path
            id="Path_36"
            opacity="0.3"
            fill="white"
            enableBackground="new"
            d="M-56-101c0,0-14,24.2,0,35.5C-42.6-76.8-56-101-56-101z"
          />
        </g>
      </g>
    </svg>
  );
}

export default NavBar;
