import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

export default function BuildDecision({ doGameLogic }) {
  return (
    <ButtonGroup variant="outlined" orientation="vertical">
      <Button disableElevation onClick={doGameLogic.build}>
        Build Off Last Player's Score
      </Button>
      <Button disableElevation onClick={doGameLogic.noBuild}>
        Start Pot Over
      </Button>
    </ButtonGroup>
  );
}
