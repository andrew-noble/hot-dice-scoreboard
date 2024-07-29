import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";

export default function CreatePlayerArea(props) {
  const [playerDetails, setPlayerDetails] = useState({ name: "", color: "" });

  const colors = ["red", "green", "blue", "orange", "purple", "pink", "yellow"];

  function handleChange(event) {
    const { name, value } = event.target;
    setPlayerDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  }

  function handleAddPlayer(event) {
    event.preventDefault();
    props.handleAddPlayer(playerDetails.name);
    setPlayerDetails({ name: "", color: "" });
  }

  return (
    <Box>
      <form onSubmit={handleAddPlayer}>
        <FormControl autoComplete="off">
          <TextField
            name="name"
            value={playerDetails.name}
            onChange={handleChange}
            label="Name"
            variant="outlined"
            sx={{ marginTop: 2, marginBottom: 2, display: "block" }}
          />
          <FormLabel>Player Color</FormLabel>
          <RadioGroup
            name="color"
            value={playerDetails.color}
            onChange={handleChange}
            row
          >
            {colors.map((colorOption, index) => (
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
    </Box>
  );
}
