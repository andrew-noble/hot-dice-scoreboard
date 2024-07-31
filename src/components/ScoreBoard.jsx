import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Player from "./Player.jsx";
import RollInput from "./RollInput.jsx";
import PotCounter from "./PotCounter.jsx";
import BuildDecision from "./BuildDecision.jsx";
import CashoutDecision from "./CashoutDecision.jsx";

export default function ScoreBoard({ state, doGameLogic }) {
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
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={8} md={6}>
          {promptUser(state.prompt)}
        </Grid>
        <Grid item xs={4} md={6}>
          <PotCounter pot={state.pot}></PotCounter>
        </Grid>
      </Grid>

      <Stack spacing={2} sx={{ marginTop: "50px" }}>
        {state.players.map((player, playerIndex) => {
          return (
            <Player
              name={player.name}
              playerColor={player.color}
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
