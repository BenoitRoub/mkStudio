import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

function Palette({ children }) {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#5348e3" },
      faded: "rgba(0,0,0,0.05)",
    },
    value: {
      absoluteTop: "72px",
      absoluteLeft: 48,
      absoluteTopContent: "20vh",
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Palette;
