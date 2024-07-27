import React from "react";
import Button from "@mui/material/Button";

export default function CashoutDecision(props) {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => props.doGameLogic({ type: "CASHOUT" })}
      >
        Cash ("Bank") this Pot 🏦
      </Button>
      <Button
        variant="contained"
        onClick={() => props.doGameLogic({ type: "CONTINUE" })}
      >
        Push Your Luck 😈
      </Button>
    </>
  );
}
