export const initialState = {
  players: [],
  prompt: "ask-for-roll-input",
  whosTurn: 0,
  pot: 0,
};

//this function constitutes the finite state machine or game logic
export function gameReducer(state, action) {
  const curPlayerName = state.players.find(
    (player) => player.id === state.whosTurn
  );
  switch (action.type) {
    case "INIT-PLAYERS":
      const listOfPlayerDetails = action.playerList.map((name, index) => ({
        id: index,
        name: name,
        score: 0,
      }));
      return { ...state, players: listOfPlayerDetails };

    case "BUILD":
      console.log(curPlayerName + "Decided to build off the last player's pot");
      return { ...state, prompt: "ask-for-roll-input" };

    case "NO-BUILD":
      console.log(curPlayerName + "Decided to start a new pot");
      return { ...state, pot: 0, prompt: "ask-for-roll-input" };

    case "ROLL":
      console.log(curPlayerName + `Rolled ${action.roll}`);
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
      console.log(curPlayerName + "Cashed out, next players turn");
      return {
        ...state,
        players: state.players.map((player) =>
          player.id === state.whosTurn
            ? { ...player, score: (player.score += state.pot) }
            : player
        ),
        whosTurn: (state.whosTurn + 1) % state.players.length,
        prompt: "ask-build-or-start-fresh",
      };

    case "CONTINUE":
      console.log(curPlayerName + "Decided to push their luck");
      return { ...state, prompt: "ask-for-roll-input" };
  }
}
