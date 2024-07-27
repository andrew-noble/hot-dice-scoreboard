import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function BuildDecision(props) {
  const { handleBuild, handleNoBuild } = props;

  return (
    <>
      <Button variant="contained" onClick={handleBuild}>
        Build Off Last Player's Score
      </Button>
      <Button variant="contained" onClick={handleNoBuild}>
        Start Pot Over
      </Button>
    </>
  );
}
