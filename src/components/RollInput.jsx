import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function RollInput(props) {
  const [rollInput, setRollInput] = useState("");

  function handleEntry(event) {
    const inputVal = event.target.value;

    //unintuitive code that allows input to be empty w/o complaints and converts to integer
    let num = inputVal === "" ? "" : parseInt(inputVal);
    setRollInput(num);
  }

  return (
    <>
      <form onSubmit={() => props.handleRollSubmit(rollInput)}>
        <TextField
          id="outlined-basic"
          label="Roll"
          variant="outlined"
          type="number"
          onChange={handleEntry}
          value={rollInput}
        />
      </form>
      <Button
        variant="contained"
        onClick={() => props.handleRollSubmit(rollInput)}
      >
        Submit
      </Button>
    </>
  );
}
