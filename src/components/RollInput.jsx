import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

export default function RollInput(props) {
  const [rollInput, setRollInput] = useState("");
  const [error, setError] = useState(false);

  const regex = /^(?:[0-9]|[1-9][0-9]{0,3}|10000)$/; //controls for 0-10000

  function isValid(entry) {
    return regex.test(entry);
  }

  function handleEntry(event) {
    const input = event.target.value;

    //unintuitive code that converts entry to an int from string and also makes form happy to be empty
    let num = input === "" ? "" : parseInt(input);
    setRollInput(num);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const roll = event.target.value;

    if (!isValid(roll)) {
      setError(true);
    } else {
      props.doGameLogic({ type: "ROLL", roll: roll });
    }
  }

  return (
    <>
      <FormControl error={error} onSubmit={handleSubmit} autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Roll"
          variant="outlined"
          type="number"
          helperText="Must be between 0 and 10,000."
          onChange={handleEntry}
          value={rollInput}
          sx={{ marginTop: 2, marginBottom: 2, display: "block" }}
        />
      </FormControl>
      <Button variant="contained" onClick={handleSubmit}>
        Submit Roll
      </Button>
    </>
  );
}
