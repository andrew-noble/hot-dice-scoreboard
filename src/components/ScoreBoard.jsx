import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Player from "./Player.jsx";
import RollInput from "./RollInput.jsx";
import CreatePlayerArea from "./CreatePlayerArea.jsx";
import PotCounter from "./PotCounter.jsx";
import BuildDecision from "./BuildDecision.jsx";
import CashoutDecision from "./CashoutDecision.jsx";

export default function ScoreBoard() {
  const prompts = [
    "ask-build-or-start-fresh",
    "ask-for-roll-input",
    "ask-cashout-or-continue",
  ];

  const [players, setPlayers] = useState([]);
  //this is a state that tracks if program is waiting for roll input or for user to make a decision
  const [prompt, setPrompt] = useState("ask-for-roll-input");
  const [whosTurn, setWhosTurn] = useState(0);
  const [pot, setPot] = useState(0);
  // const [roll, setRoll] = useState(0);

  function handleAddPlayer(name) {
    setPlayers((prevList) => {
      const newPlayer = { id: players.length, name: name, score: 0 };
      return [...prevList, newPlayer];
    });
  }

  function promptUser(prompt) {
    switch (prompt) {
      case "ask-build-or-start-fresh":
        return (
          <BuildDecision
            handleBuild={handleBuild}
            handleNoBuild={handleNoBuild}
          ></BuildDecision>
        );
      case "ask-for-roll-input":
        return <RollInput handleRollSubmit={handleRollSubmit}></RollInput>;
      case "ask-cashout-or-continue":
        return (
          <CashoutDecision
            handleCashout={handleCashout}
            handleContinue={handleContinue}
          ></CashoutDecision>
        );
    }
  }

  //STATE MACHINE FUNCTIONS: its within these functions that the game flow is implemented. See diagram

  //player decided to build off last player's pot. Effect: just change prompt user to roll dice
  function handleBuild() {
    setPrompt("ask-for-roll-input");
  }
  //player decided to start a fresh pot with 6 die
  function handleNoBuild() {
    setPot(0);
    setPrompt("ask-for-roll-input");
  }

  function handleRollSubmit(roll) {
    if (roll === 0) {
      setPot(0);
      setWhosTurn((prevTurn) => (prevTurn + 1) % players.length); //sneaky way to wrap to start of players
    } else {
      setPot((prevVal) => prevVal + roll);
      setPrompt("ask-cashout-or-continue");
    }
  }

  //player decided to cashout their pot and add it to their score
  function handleCashout() {
    //this updates the current player's score in the list of players
    setPlayers((playerList) => {
      return playerList.map((player) => {
        if (player.id === whosTurn) {
          return { ...player, score: pot + player.score };
        }
        return player;
      });
    });
    //advance turn
    setWhosTurn((prevTurn) => (prevTurn + 1) % players.length);
  }
  //player decided to push their luck and roll again
  function handleContinue() {
    setPrompt("ask-for-roll-input");
  }

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {promptUser(prompt)}
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
