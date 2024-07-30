import React from "react";
import Game from "./Game.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
    background: {
      default: "#fefefe",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginTop: "10px", // Or use theme.spacing(1) for consistency
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: "10px",
          marginBottom: "10px",
        },
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <Game></Game>
      <Footer></Footer>
    </ThemeProvider>
  );
}
