import React, { useState, useReducer } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { gameReducer, initialState } from "../gameLogic.js";
import Player from "./Player.jsx";
import RollInput from "./RollInput.jsx";
import CreatePlayerArea from "./CreatePlayerArea.jsx";
import PotCounter from "./PotCounter.jsx";
import BuildDecision from "./BuildDecision.jsx";
import CashoutDecision from "./CashoutDecision.jsx";

export default function ScoreBoard() {
  const [isStarted, setIsStarted] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [state, doGameLogic] = useReducer(gameReducer, initialState);

  function handleAddPlayer(name) {
    setPlayerList((prevList) => {
      return [...prevList, name];
    });
  }

  function handleGameStart() {
    doGameLogic({ type: "INIT-PLAYERS", playerList: playerList });
    setIsStarted(true);
  }

  //this decides which component to show user based on what prompt is active. Just a conditional.
  function promptUser(prompt) {
    switch (prompt) {
      case "ask-build-or-start-fresh":
        return <BuildDecision doGameLogic={doGameLogic}></BuildDecision>;
      case "ask-for-roll-input":
        return <RollInput doGameLogic={doGameLogic}></RollInput>;
      case "ask-cashout-or-continue":
        return <CashoutDecision doGameLogic={doGameLogic}></CashoutDecision>;
    }
  }

  return (
    <Container>
      {isStarted ? (
        <>
          <Box>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {promptUser(state.prompt)}
                </Grid>
                <Grid item xs={6}>
                  <PotCounter pot={state.pot}></PotCounter>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box>
            <Stack spacing={2}>
              {state.players.map((player) => {
                return (
                  <Player
                    name={player.name}
                    score={player.score}
                    key={player.id}
                    myTurn={state.whosTurn === player.id ? true : false}
                  ></Player>
                );
              })}
            </Stack>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <CreatePlayerArea
              handleAddPlayer={handleAddPlayer}
              handleGameStart={handleGameStart}
            ></CreatePlayerArea>
          </Box>
          <Box>
            <Stack spacing={2}>
              {playerList.map((player, index) => {
                return <Typography key={index}>{player}</Typography>;
              })}
            </Stack>
          </Box>
        </>
      )}
      <Button disableElevation variant="contained" onClick={handleGameStart}>
        Start Game
      </Button>
    </Container>
  );
}
