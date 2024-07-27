import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function CashoutDecision(props) {
  const { handleCashout, handleContinue } = props;

  return (
    <>
      <Button variant="contained" onClick={handleCashout}>
        Cash ("Bank") this Pot 🏦
      </Button>
      <Button variant="contained" onClick={handleContinue}>
        Push Your Luck 😈
      </Button>
    </>
  );
}
