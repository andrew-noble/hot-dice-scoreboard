import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

export default function RollInput(props) {
  const [rollInput, setRollInput] = useState("");
  const [error, setError] = useState(false);

  function handleEntry(event) {
    const input = event.target.value;

    //unintuitive code that converts entry to an int from string and also makes form happy to be empty
    let num = input === "" ? "" : parseInt(input);
    setRollInput(num);
  }

  function isValid(entry) {
    const regex = /^(?:10000|[0-9]\d{0,3})$/; //controls for 0-10000
    return regex.test(entry);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid(rollInput)) {
      setError(true);
    } else {
      props.roll(rollInput);
    }
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <FormControl error={error}>
        <TextField
          id="outlined-basic"
          label="Roll"
          variant="outlined"
          type="number"
          helperText="Must be between 0 and 10,000."
          onChange={handleEntry}
          value={rollInput}
          sx={{ marginTop: 2, marginBottom: 2, display: "block" }}
          required
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Submit Roll
        </Button>
      </FormControl>
    </form>
  );
}
