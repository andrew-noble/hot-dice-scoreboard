import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <>
      <Header></Header>
      <ScoreBoard></ScoreBoard>
      <Footer></Footer>
    </>
  );
}
