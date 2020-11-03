import React from "react";
import Title from "../../../components/Title";
import { Typography, makeStyles } from "@material-ui/core";
import CustomTextField from "./FormComponents.js/CustomTextField";
import CustomRadioField from "./FormComponents.js/CustomRadioField";
import CustomDateField from "./FormComponents.js/CustomDateField";
import CustomRadioParticipant from "./FormComponents.js/CustomRadioParticipant";
import CustomCheckbox from "./FormComponents.js/CustomCheckbox";
import CustomSelect from "./FormComponents.js/CustomSelect";

function FormPart({ handleWrite, formInfo, name }) {
  const classes = useStyles();

  const { part, fields } = name;

  return (
    <>
      <div className={classes.separatorBefore} />

      <Title title={part.label} />

      <div className={classes.separator} />
      <div className={classes.fieldsContainer}>
        {fields.map((field, index) =>
          !field.if ||
          formInfo[part.name][fields[index - field.if].name] === "true" ? (
            <>
              {field.type === "textfield" && (
                <CustomTextField
                  part={part}
                  field={field}
                  handleWrite={handleWrite}
                  formInfo={formInfo}
                />
              )}
              {field.type === "date" && (
                <CustomDateField
                  part={part}
                  field={field}
                  handleWrite={handleWrite}
                  formInfo={formInfo}
                />
              )}
              {field.type === "radio" && (
                <CustomRadioField
                  part={part}
                  field={field}
                  handleWrite={handleWrite}
                  formInfo={formInfo}
                />
              )}

{field.type === "select" && (
                <CustomSelect
                  part={part}
                  field={field}
                  handleWrite={handleWrite}
                  formInfo={formInfo}
                />
              )}

              {field.type === "checkbox" && (
                <React.Fragment>
                  <CustomCheckbox
                    part={part}
                    field={field}
                    handleWrite={handleWrite}
                    formInfo={formInfo}
                  />
                  <div />
                </React.Fragment>
              )}

              {field.type === "radioParticipant" && (
                <CustomRadioParticipant
                  part={part}
                  field={field}
                  handleWrite={handleWrite}
                  formInfo={formInfo}
                />
              )}
              {field.type === "text" && (
                <Typography className={classes.label}>{field.label}</Typography>
              )}
              {field.type === "outlineText" && (
                <Typography className={classes.outlineLabel}>
                  {field.label}
                </Typography>
              )}

              {field.type === "break" && <div />}
            </>
          ) : field.ifBreak ? (
            <div />
          ) : null
        )}
      </div>
    </>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    separatorBefore: {
      marginBottom: 48,
    },
    separator: {
      marginBottom: 32,
    },
    fieldsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    label: {
      marginTop: 24,
      color: "#757575",
      fontSize: "1rem",
      width: "200%",
    },
    outlineLabel: {
      marginTop: 24,
      color: "#757575",
      fontSize: "1rem",
      width: "200%",
      textDecoration: "underline",
    },
    input: {
      width: "80%",
      border: "1px solid rgba(0,0,0,0.20)",
      borderRadius: 6,
    },
  };
});

export default FormPart;
