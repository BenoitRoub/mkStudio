import React from "react";
import { InputBase, Typography, makeStyles } from "@material-ui/core";

function CustomTextField({ part, field, handleWrite, formInfo }) {
  const classes = useStyles({ fullWidth: field.fullWidth });
  return (
    <div className={classes.fieldContainer}>
      <Typography className={classes.label}>
        {field.customLabel ? field.label + " l'" + part.label : field.label}
      </Typography>
      <InputBase
        className={classes.input}
        type="text"
        name={`${part.name}.${field.name}`}
        value={formInfo[part.name] ? formInfo[part.name][field.name] : ""}
        onChange={(e) => handleWrite(e.target.value, part.name, field.name)}
        inputProps={{
          style: { padding: "8px 12px" },
        }}
      />
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    label: {
      marginTop: 16,
      margin: ({ fullWidth }) => (fullWidth ? "24px 0 8px 0" : "16px 0 0 0"),
      color: "#757575",
      paddingRight: "20%",
      width: ({ fullWidth }) => (fullWidth ? "180%" : "80%"),
    },
    input: {
      border: "1px solid rgba(0,0,0,0.20)",
      borderRadius: 6,
      margin: ({ fullWidth }) => (fullWidth ? "0 0 8px 0" : "0 0 0 0"),
      width: ({ fullWidth }) => (fullWidth ? "180%" : "80%"),
    },
  };
});

export default CustomTextField;
