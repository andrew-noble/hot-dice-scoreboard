import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";

export default function CreatePlayerArea({ onAddPlayer }) {
  const [playerDetailsEntry, setPlayerDetailsEntry] = useState({
    name: "",
    color: "",
  });

  const colorOptions = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "pink",
    "yellow",
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setPlayerDetailsEntry((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  }

  function handleAddPlayer(event) {
    event.preventDefault();
    onAddPlayer(playerDetailsEntry.name, playerDetailsEntry.color);
    setPlayerDetailsEntry({ name: "", color: "" });
  }

  return (
    <form onSubmit={handleAddPlayer} autoComplete="off">
      <FormControl>
        <FormLabel>Player Name</FormLabel>
        <TextField
          name="name"
          value={playerDetailsEntry.name}
          onChange={handleChange}
          label="Name"
          variant="outlined"
          sx={{ marginTop: 2, marginBottom: 2, display: "block" }}
        />
        <FormLabel>Player Color</FormLabel>
        <RadioGroup
          name="color"
          value={playerDetailsEntry.color}
          onChange={handleChange}
          row
        >
          {colorOptions.map((colorOption, index) => (
            <FormControlLabel
              key={index}
              label={colorOption}
              value={colorOption}
              control={<Radio />}
            ></FormControlLabel>
          ))}
        </RadioGroup>
        <Button
          disableElevation
          type="submit"
          onClick={handleAddPlayer}
          variant="contained"
        >
          Add
        </Button>
      </FormControl>
    </form>
  );
}
