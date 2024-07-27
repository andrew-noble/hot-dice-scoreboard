import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function RollInput() {
  const [rollInput, setRollInput] = useState(0);

  function handleEntry(event) {
    setRollInput(event.target.value);
  }

  return (
    <Box>
      <TextField
        id="outlined-basic"
        label="Roll"
        variant="outlined"
        onChange={handleEntry}
        value={rollInput}
      />
    </Box>
  );
}
