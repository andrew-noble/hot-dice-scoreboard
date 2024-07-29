import React, { useState, useReducer } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Player from "./Player.jsx";
import RollInput from "./RollInput.jsx";
import PotCounter from "./PotCounter.jsx";
import BuildDecision from "./BuildDecision.jsx";
import CashoutDecision from "./CashoutDecision.jsx";

export default function ScoreBoard({
  state,
  build,
  noBuild,
  roll,
  cashout,
  escalate,
}) {
  //this decides which component to show user based on what prompt is active. Just a conditional.
  function promptUser(prompt) {
    switch (prompt) {
      case "ask-build-or-start-fresh":
        return <BuildDecision build={build} noBuild={noBuild}></BuildDecision>;
      case "ask-for-roll-input":
        return <RollInput roll={roll}></RollInput>;
      case "ask-cashout-or-continue":
        return (
          <CashoutDecision
            cashout={cashout}
            escalate={escalate}
          ></CashoutDecision>
        );
    }
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {promptUser(state.prompt)}
        </Grid>
        <Grid item xs={6}>
          <PotCounter pot={state.pot}></PotCounter>
        </Grid>
      </Grid>

      <Stack spacing={2}>
        {state.players.map((player, playerIndex) => {
          return (
            <Player
              name={player.name}
              score={player.score}
              key={playerIndex}
              myTurn={state.whosTurn === playerIndex ? true : false}
            ></Player>
          );
        })}
      </Stack>
    </Box>
  );
}
