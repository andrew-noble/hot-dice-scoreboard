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
    <Container>
      {state.isStarted ? (
        <>
          <ScoreBoard
            state={state}
            reset={reset}
            build={build}
            noBuild={noBuild}
            roll={roll}
            cashout={cashout}
            escalate={escalate}
          ></ScoreBoard>
          <ConfirmButton
            //key is necessary here to avoid fuckery with the other SubmitButton

            key="reset"
            confirmAction={reset}
            initialText="Reset Game"
            confirmText="Confirm Reset?"
          />
        </>
      ) : (
        <>
          <InitPlayers
            state={state}
            start={start}
            onAddPlayer={(name, color) => addPlayer(name, color)}
          ></InitPlayers>
          <ConfirmButton
            key="start"
            confirmAction={start}
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
