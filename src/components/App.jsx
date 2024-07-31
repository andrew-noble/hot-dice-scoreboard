import React from "react";
import Game from "./Game.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Explanation from "./Explanation.jsx";

import {
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import { indigo, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: orange,
    mode: "dark",
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
      <Container sx={{ padding: "30px" }}>
        <CssBaseline />
        <Header />
        <Game />
        <Explanation />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
