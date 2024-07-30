import React, { useReducer } from "react";

//This is the overall game logic aka finite state machine aka decision tree
const gameReducer = (state, action) => {
  const curPlayerName = () => state.players[state.whosTurn].name;

  switch (action.type) {
    case "START":
      console.log("Game started!");
      return { ...state, isStarted: true };

    case "RESET":
      console.log("Game reset");
      return {
        isStarted: false,
        players: [],
        prompt: "ask-for-roll-input",
        whosTurn: 0,
        pot: 0,
      };

    case "ADD-PLAYER":
      console.log(`New player: ${action.newPlayerName}`);
      return {
        ...state,
        players: [
          ...state.players,
          {
            name: action.newPlayerName,
            color: action.newPlayerColor,
            score: 0,
          },
        ],
      };

    //--below is the "core game logic", what actually happens once the game starts

    case "BUILD":
      console.log(
        `${curPlayerName} decided to build off the last player's pot`
      );
      return { ...state, prompt: "ask-for-roll-input" };

    case "NO-BUILD":
      console.log(`${curPlayerName} decided to start a new pot`);
      return { ...state, pot: 0, prompt: "ask-for-roll-input" };

    case "ROLL":
      console.log(`${curPlayerName} rolled ${action.roll}`);
      if (action.roll === 0) {
        //player busted, advance turn and reset pot
        return {
          ...state,
          pot: 0,
          whosTurn: (state.whosTurn + 1) % state.players.length,
        };
      } else {
        //player scored
        return {
          ...state,
          pot: state.pot + action.roll,
          prompt: "ask-cashout-or-continue",
        };
      }

    case "CASHOUT":
      console.log(`${curPlayerName} cashed out, next players turn`);
      return {
        ...state,
        players: state.players.map((player, playerIndex) =>
          playerIndex === state.whosTurn
            ? { ...player, score: (player.score += state.pot) }
            : player
        ),
        whosTurn: (state.whosTurn + 1) % state.players.length,
        prompt: "ask-build-or-start-fresh",
      };

    case "ESCALATE":
      console.log(`${curPlayerName} decided to push their luck`);
      return { ...state, prompt: "ask-for-roll-input" };
  }
};

//this is the custom hook that allows several components to mutate the games state
//according to the game logic as defined above
export default function useGameLogic(initialState) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  //this technique abstracts away the logic reducer for the components that use this hook
  //the build, noBuild, etc is an easier interface than dispatch's obj arg on the right
  return {
    state: state,
    start: () => dispatch({ type: "START" }),
    reset: () => dispatch({ type: "RESET" }),
    addPlayer: (player, color) =>
      dispatch({
        type: "ADD-PLAYER",
        newPlayerName: player,
        newPlayerColor: color,
      }),
    build: () => dispatch({ type: "BUILD" }),
    noBuild: () => dispatch({ type: "NO-BUILD" }),
    roll: (roll) => dispatch({ type: "ROLL", roll: roll }),
    cashout: () => dispatch({ type: "CASHOUT" }),
    escalate: () => dispatch({ type: "ESCALATE" }),
  };
}
