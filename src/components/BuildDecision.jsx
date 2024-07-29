import React from "react";
import Button from "@mui/material/Button";

export default function BuildDecision(props) {
  return (
    <>
      <Button
        variant="contained"
        disableElevation
        onClick={() => props.doGameLogic({ type: "BUILD" })}
      >
        Build Off Last Player's Score
      </Button>
      <Button
        variant="contained"
        disableElevation
        onClick={() => props.doGameLogic({ type: "NO-BUILD" })}
      >
        Start Pot Over
      </Button>
    </>
  );
}
