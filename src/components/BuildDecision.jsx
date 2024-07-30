import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

export default function BuildDecision(props) {
  return (
    <ButtonGroup variant="outlined" orientation="vertical">
      <Button disableElevation onClick={props.build}>
        Build Off Last Player's Score
      </Button>
      <Button disableElevation onClick={props.noBuild}>
        Start Pot Over
      </Button>
    </ButtonGroup>
  );
}
