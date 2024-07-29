import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: deepOrange,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
      <ScoreBoard></ScoreBoard>
      <Footer></Footer>
    </ThemeProvider>
  );
}
