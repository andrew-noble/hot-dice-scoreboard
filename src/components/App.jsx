import React from "react";
import Game from "./Game.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: blue,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: "10px", // Or use theme.spacing(1) for consistency
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
