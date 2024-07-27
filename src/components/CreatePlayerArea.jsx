import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CreatePlayerArea(props) {
  const [nameEntry, setNameEntry] = useState("");

  function handleEntry(event) {
    setNameEntry(event.target.value);
  }

  function handleAddPlayer(event) {
    event.preventDefault();
    props.handleAddPlayer(nameEntry);
    setNameEntry("");
  }

  function handleStart(event) {
    event.preventDefault();
    props.handleGameStart();
  }

  return (
    <Box>
      <form onSubmit={handleAddPlayer}>
        <TextField
          id="outlined-basic"
          label="Create Player"
          variant="outlined"
          onChange={handleEntry}
          value={nameEntry}
        />
      </form>
      <Button variant="contained" onClick={handleAddPlayer}>
        Add
      </Button>
      <Button variant="contained" onClick={handleStart}>
        Start Game
      </Button>
    </Box>
  );
}
