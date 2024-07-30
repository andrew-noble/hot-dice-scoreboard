import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

export default function CashoutDecision({ doGameLogic }) {
  return (
    <ButtonGroup variant="outlined" orientation="vertical" color="secondary">
      <Button disableElevation onClick={doGameLogic.cashout}>
        Cashout ("Bank") this Pot 🏦
      </Button>
      <Button disableElevation onClick={doGameLogic.escalate}>
        Push Your Luck 😈
      </Button>
    </ButtonGroup>
  );
}
