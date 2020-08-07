import React from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles, Typography } from "@material-ui/core";

function CustomDateField({ part, field, handleWrite, formInfo }) {
  const classes = useStyles({ fullWidth: field.fullWidth });
  return (
    <div>
      <Typography className={classes.label}>
        {field.customLabel ? field.label + " l'" + part.label : field.label}
      </Typography>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        // label={
        //   field.customLabel ? field.label + " l'" + part.label : field.label
        // }
        format="DD/MM/yyyy"
        className={classes.input}
        value={
          formInfo[part.name] ? formInfo[part.name][field.name] || null : ""
        }
        onChange={(e) => {
          handleWrite(e._d, part.name, field.name);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
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
export default CustomDateField;
