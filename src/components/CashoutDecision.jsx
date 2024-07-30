import React from "react";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

export default function CashoutDecision(props) {
  return (
    <ButtonGroup variant="outlined" orientation="vertical">
      <Button disableElevation onClick={props.cashout}>
        Cashout ("Bank") this Pot 🏦
      </Button>
      <Button disableElevation onClick={props.escalate}>
        Push Your Luck 😈
      </Button>
    </ButtonGroup>
  );
}
