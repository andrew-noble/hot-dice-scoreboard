import React, { useState } from "react";
import ScoreBoard from "./ScoreBoard.jsx";
import InitPlayers from "./InitPlayers.jsx";
import useGameLogic from "../useGameLogic.js";
import ConfirmButton from "./ConfirmButton.jsx";

import Container from "@mui/material/Container";

export default function Game() {
  //custom hook, returning state and its mutate functions.
  //mutate functions get passed to the components that need them.
  //definitely would be better with redux
  const { state, doGameLogic } = useGameLogic({
    isStarted: false,
    players: [],
    prompt: "ask-for-roll-input",
    whosTurn: 0,
    pot: 0,
  });

  return (
    <Container>
      {state.isStarted ? (
        <>
          <ScoreBoard state={state} doGameLogic={doGameLogic}></ScoreBoard>
          <ConfirmButton
            //key is necessary here to avoid fuckery with the other SubmitButton
            key="reset"
            confirmAction={doGameLogic.reset}
            initialText="Reset Game"
            confirmText="Confirm Reset?"
          />
        </>
      ) : (
        <>
          <InitPlayers state={state} doGameLogic={doGameLogic}></InitPlayers>
          <ConfirmButton
            key="start"
            confirmAction={doGameLogic.start}
            initialText="Start game"
            confirmText="Confirm start?"
          >
            Start Game
          </ConfirmButton>
        </>
      )}
    </Container>
  );
}
