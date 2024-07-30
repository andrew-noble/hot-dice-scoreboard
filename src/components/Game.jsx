import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import InitPlayers from "./InitPlayers.jsx";
import useGameLogic from "../useGameLogic.js";
import ConfirmButton from "./ConfirmButton.jsx";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Game() {
  //custom hook, returning state and its mutate functions. Kinda fugly
  const {
    state,
    start,
    reset,
    addPlayer,
    build,
    noBuild,
    roll,
    cashout,
    escalate,
  } = useGameLogic({
    isStarted: false,
    players: [],
    prompt: "ask-for-roll-input",
    whosTurn: 0,
    pot: 0,
  });

  return (
    <Container align="center">
      {state.isStarted ? (
        <>
          <ScoreBoard
            state={state}
            build={build}
            noBuild={noBuild}
            roll={roll}
            cashout={cashout}
            escalate={escalate}
          ></ScoreBoard>
          <ConfirmButton
            confirmAction={reset}
            confirmText="Confirm Reset?"
            initialText="Reset Game"
          />
        </>
      ) : (
        <>
          <InitPlayers
            onAddPlayer={(name, color) => addPlayer(name, color)}
          ></InitPlayers>
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
          <Button disableElevation variant="contained" onClick={start}>
            Start Game
          </Button>
        </>
      )}
    </Container>
  );
}
