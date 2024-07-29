import React from "react";
import Button from "@mui/material/Button";

export default function BuildDecision(props) {
  return (
    <>
      <Button variant="contained" disableElevation onClick={props.build}>
        Build Off Last Player's Score
      </Button>
      <Button variant="contained" disableElevation onClick={props.noBuild}>
        Start Pot Over
      </Button>
    </>
  );
}
