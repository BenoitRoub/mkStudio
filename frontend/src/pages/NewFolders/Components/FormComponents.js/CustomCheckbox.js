import React from "react";
import { Typography, makeStyles, Checkbox } from "@material-ui/core";

function CustomCheckbox({ part, field, handleWrite, formInfo }) {
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <Checkbox
        checked={
          formInfo[part.name] ? formInfo[part.name][field.name] || false : false
        }
        onChange={(e) =>
          handleWrite(!formInfo[part.name][field.name], part.name, field.name)
        }
      />

      <Typography className={classes.label}>
        {field.customLabel ? field.label + " l'" + part.label : field.label}
      </Typography>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    label: {
      color: "#757575",
      marginLeft: 18,
    },
    fieldContainer: {
      display: "flex",
      alignItems: "center",
      width: "190%",
    },
  };
});

export default CustomCheckbox;
