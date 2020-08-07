import React from "react";
import { makeStyles, InputBase } from "@material-ui/core";
import { BsSearch } from "react-icons/bs";

function Search({ search, setSearch }) {
  const classes = useStyles();
  return (
    <div className={classes.inputContainer}>
      <BsSearch className={classes.iconSearch} />
      <InputBase
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher un dossier"
        className={classes.input}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    inputContainer: {
      width: "50%",
      minWidth: 240,
      borderRadius: 24,
      backgroundColor: "rgba(202, 206, 231, 0.14)",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
    },
    iconSearch: {
      color: "#8F94B8",
      marginRight: theme.spacing(1.5),
      fontSize: "1.2rem",
    },
    input: {
      width: "100%",
    },
  };
});

export default Search;
