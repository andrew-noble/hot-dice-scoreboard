import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function CreatePlayerArea({ onAddPlayer, state }) {
  const [playerDetailsEntry, setPlayerDetailsEntry] = useState({
    name: "",
    color: "",
  });

  const colorOptions = ["red", "green", "blue", "orange", "purple"];

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
    <Grid container>
      <Grid item xs={6}>
        <form onSubmit={handleAddPlayer} autoComplete="off">
          <FormControl>
            <FormLabel>Player Name</FormLabel>
            <TextField
              name="name"
              value={playerDetailsEntry.name}
              onChange={handleChange}
              label="Name"
              variant="outlined"
              required
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
      </Grid>

      <Grid item xs={6}>
        <Stack spacing={2}>
          {state.players.map((player, index) => {
            return (
              <Typography
                key={index}
                sx={{ color: player.color, fontSize: "large" }}
              >
                {player.name}
              </Typography>
            );
          })}
        </Stack>
      </Grid>
    </Grid>
  );
}
