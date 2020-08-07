import React from "react";
import { makeStyles, Radio, Typography, InputBase } from "@material-ui/core";

function CustomRadioField({ part, field, handleWrite, formInfo }) {
  const classes = useStyles({ fullWidth: field.fullWidth });
  return (
    <div>
      <Typography className={classes.label}>
        {field.customLabel ? field.label + " l'" + part.label : field.label}
      </Typography>
      {field.radioFields.map((radio) => (
        <div className={classes.radioContainer}>
          <Radio
            checked={
              formInfo[part.name] &&
              radio.value === formInfo[part.name][field.name]
            }
            value={radio.value}
            onChange={(e) => handleWrite(e.target.value, part.name, field.name)}
          />
          <Typography>{radio.label}</Typography>
          {radio.information &&
            formInfo[part.name] &&
            radio.value === formInfo[part.name][field.name] && (
              <InputBase
                className={classes.input}
                type="text"
                name={`${part.name}.${field.name + "Information"}`}
                value={
                  formInfo[part.name]
                    ? formInfo[part.name][field.name + "Information"]
                    : ""
                }
                onChange={(e) =>
                  handleWrite(
                    e.target.value,
                    part.name,
                    field.name + "Information"
                  )
                }
                inputProps={{
                  style: { padding: "8px 12px" },
                }}
              />
            )}
        </div>
      ))}
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
    radioContainer: {
      display: "flex",
      alignItems: "center",
    },
  };
});
export default CustomRadioField;
