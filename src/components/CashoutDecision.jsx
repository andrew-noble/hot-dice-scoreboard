import React from "react";
import Button from "@mui/material/Button";

export default function CashoutDecision(props) {
  return (
    <>
      <Button variant="contained" disableElevation onClick={props.cashout}>
        Cashout ("Bank") this Pot 🏦
      </Button>
      <Button variant="contained" disableElevation onClick={props.escalate}>
        Push Your Luck 😈
      </Button>
    </>
  );
}
