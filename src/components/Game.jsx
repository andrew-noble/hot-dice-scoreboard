import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import InitPlayers from "./InitPlayers.jsx";
import useGameLogic from "../useGameLogic.js";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Game() {
  //custom hook, returning state and its mutate functions
  const { state, start, addPlayer, build, noBuild, roll, cashout, escalate } =
    useGameLogic({
      isStarted: false,
      players: [],
      prompt: "ask-for-roll-input",
      whosTurn: 0,
      pot: 0,
    });

  function triggerGameStart() {
    start();
  }

  function handleAddPlayer(name, color) {
    addPlayer(name, color);
  }

  return (
    <>
      {state.isStarted ? (
        <ScoreBoard
          state={state}
          build={build}
          noBuild={noBuild}
          roll={roll}
          cashout={cashout}
          escalate={escalate}
        ></ScoreBoard>
      ) : (
        <>
          <InitPlayers onAddPlayer={handleAddPlayer}></InitPlayers>
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
          <Button
            disableElevation
            variant="contained"
            onClick={triggerGameStart}
          >
            Start Game
          </Button>
        </>
      )}
    </>
  );
}
