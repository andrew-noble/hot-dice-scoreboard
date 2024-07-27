import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Player from "./Player.jsx";
import RollInput from "./RollInput.jsx";
import CreatePlayerArea from "./CreatePlayerArea.jsx";
import PotCounter from "./PotCounter.jsx";

export default function ScoreBoard() {
  const [players, setPlayers] = useState([]);
  const [phase, setPhase] = useState(0);
  const [whosTurn, setWhosTurn] = useState(0);
  const [pot, setPot] = useState(50);
  const [roll, setRoll] = useState(0);

  function handleAddPlayer(name) {
    setPlayers((prevList) => {
      const newPlayer = { id: players.length + 1, name: name, score: 0 };
      return [...prevList, newPlayer];
    });
  }

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {" "}
            <RollInput></RollInput>
          </Grid>
          <Grid item xs={6}>
            <PotCounter pot={pot}></PotCounter>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Stack spacing={2}>
          {players.map((player) => {
            return (
              <Player
                name={player.name}
                score={player.score}
                key={player.id}
              ></Player>
            );
          })}
        </Stack>
      </Box>
      <Box>
        <CreatePlayerArea handleAddPlayer={handleAddPlayer}></CreatePlayerArea>
      </Box>
    </Container>
  );
}
