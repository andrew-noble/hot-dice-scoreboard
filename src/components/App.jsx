import React from "react";
import Game from "./Game.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Container from "@mui/material/Container";

const theme = createTheme({
  palette: {
    primary: deepOrange,
  },
});

export default function App() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Game></Game>
        <Footer></Footer>
      </ThemeProvider>
    </Container>
  );
}
