import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function CreatePlayerArea(props) {
  const { handleAddPlayer } = props;
  const [nameEntry, setNameEntry] = useState("");

  function handleEntry(event) {
    setNameEntry(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddPlayer(nameEntry);
    setNameEntry("");
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Create Player"
          variant="outlined"
          onChange={handleEntry}
          value={nameEntry}
        />
      </form>
      <Button variant="contained" onClick={handleSubmit}>
        Add
      </Button>
    </Box>
  );
}
