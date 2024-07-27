import React, { useState } from "react";
import Box from "@mui/material/Box";

export default function PotCounter(props) {
  return (
    <Box>
      <h2>Pot:</h2>
      <h2>{props.pot}</h2>
    </Box>
  );
}
