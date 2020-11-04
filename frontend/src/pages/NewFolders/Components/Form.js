import React, { useState, useContext, useEffect, useRef } from "react";
import {
  makeStyles,
  ButtonBase,
  Breadcrumbs,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { postAuth } from "../../../api/config";
import { FolderContext } from "../../../hoc/FolderContext";
import { useHistory, useParams } from "react-router";
import FormPart from "./FormPart";
import { wedding } from "./FormObject/Wedding";
import { firstConsort } from "./FormObject/firstConsort";
import { secondConsort } from "./FormObject/secondConsort";
import { children } from "./FormObject/children";
import { compensatory } from "./FormObject/compensatory";
import { maritalName } from "./FormObject/maritalName";
import { maritalHome } from "./FormObject/maritalHome";
import { propertyDistribution } from "./FormObject/propertyDistribution";
import { debt } from "./FormObject/debt";
import { bankAccount } from "./FormObject/bankAccount";
import { realProperty } from "./FormObject/realProperty";
import { aboutTaxes } from "./FormObject/aboutTaxes";
import { annexes } from "./FormObject/annexes";

function FolderForm() {
  const classes = useStyles();
  const { id } = useParams();
  const folderContext = useContext(FolderContext);
  const history = useHistory();

  const [formInfo, setFormInfo] = useState({
    first: {},
    second: {},
    wedding: {},
    children: {},
    compensatory: {},
    maritalName: {},
    maritalHome: {},
    propertyDistribution: {},
    debt: {},
    bankAccount: {},
    realProperty: {},
    aboutTaxes: {},
    annexes: {},
  });


  useEffect(() => {
    if (id && folderContext.folders) {
      let form = folderContext.folders.find((folder) => folder._id === id).form;

      if (form) {
        setFormInfo({ ...formInfo, ...form });
      }
    }
  }, [id, folderContext.folders]);

  function handleWrite(value, participant, name) {
    let newValue = { ...formInfo };
    newValue[participant][name] = value;
    setFormInfo(newValue);
  }

  function handleClick() {
    postAuth("/folder/generateDoc", {
      folderId: id,
      form: formInfo,
    }).then((res) => {
      folderContext.setFolders([
        ...folderContext.folders.filter((folder) => folder._id !== id),
        res.data,
      ]);
      history.push("/folders/" + res.data._id);
    });
  }

  const partArray = [
    firstConsort,
    secondConsort,
    wedding,
    children,
    compensatory,
    maritalName,
    maritalHome,
    propertyDistribution,
    debt,
    bankAccount,
    realProperty,
    aboutTaxes,
    annexes,
  ];

  const [navState, setNavState] = useState(partArray[0].part.name);

  function handleGoBack() {
    let index = partArray.findIndex((part) => part.part.name === navState) - 1;
    setNavState(partArray[index].part.name);
  }
  function handleNext() {
    let index = partArray.findIndex((part) => part.part.name === navState) + 1;
    setNavState(partArray[index].part.name);
  }

  useEffect(() => {
    topRef.current.scrollTo(0, 0);
    postAuth("/folder/saveForm", {
      id: id,
      form: formInfo,
    });
  }, [navState]);

  const topRef = useRef(null);

  function returnToFolder() {
    postAuth("/folder/saveForm", {
      id: id,
      form: formInfo,
    });
    history.goBack()
  }


  return (
    <div className={classes.formContainer} ref={topRef}>
      <ButtonBase onClick={() => returnToFolder()} className={classes.back}>
        <ArrowBackIcon />
        <span className={classes.backText}>
        dossier </span>
      </ButtonBase>
      <Breadcrumbs aria-label="breadcrumb">
        {partArray.map((part) => (
          <Typography
            style={{
              cursor: "pointer",
              color: navState === part.part.name ? "black" : null,
            }}
            onClick={() => setNavState(part.part.name)}
          >
            {part.part.label}
          </Typography>
        ))}
      </Breadcrumbs>

      {partArray.map(
        (part) =>
          navState === part.part.name && (
            <FormPart
              handleWrite={handleWrite}
              formInfo={formInfo}
              name={part}
            />
          )
      )}

      {navState !== partArray[partArray.length - 1].part.name && (
        <div className={classes.buttonContainer}>
          <ButtonBase className={classes.cancelbutton} onClick={handleGoBack}>
            Précédent
          </ButtonBase>
          <ButtonBase className={classes.button} onClick={handleNext}>
            Suivant
          </ButtonBase>
        </div>
      )}

      {navState === partArray[partArray.length - 1].part.name && (
        <div className={classes.buttonContainer}>
          <ButtonBase
            className={classes.cancelbutton}
            onClick={() => history.goBack()}
          >
            Annuler
          </ButtonBase>
          <ButtonBase className={classes.button} onClick={handleClick}>
            Confirmer
          </ButtonBase>
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  return {
    formContainer: {
      width: "100%",
      paddingRight: "48px",
      marginTop: "-" + theme.value.absoluteTop,
      paddingTop: theme.value.absoluteTop,
      maxHeight: `calc(100vh - ${theme.value.absoluteTop})`,
      // overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "0.4em",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
        webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.1)",
        outline: "1px solid slategrey",
        borderRadius: 8,
      },
    },
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
      marginTop: 16,
      color: "#757575",
      marginLeft: 12,
    },
    input: {
      width: "80%",
      border: "1px solid rgba(0,0,0,0.20)",
      borderRadius: 6,
    },
    buttonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      margin: "48px 0",
    },
    button: {
      marginTop: theme.spacing(3),
      backgroundColor: theme.palette.primary.main,
      padding: "12px 32px",
      width: "auto",
      color: "white",
      borderRadius: 6,
      boxShadow: "2px 2px 8px rgba(0,0,0,0.35)",
      alignSelf: "end",
      marginRight: 48,
    },
    cancelbutton: {
      marginTop: theme.spacing(3),
      padding: "12px 32px",
      margin: " 0 16px 16px 16px",
      color: "black",
      borderRadius: 6,
      border: "1px solid rgba(0,0,0,0.20)",
    },
    back: {
      color: 'black',
      fontSizem: '1rem',
      marginBottom: 16
    },
    backText: {
      marginLeft: 12,
      fontSize: "1rem"
    }
  };
});

export default FolderForm;
