export const initialState = {
  players: [],
  prompt: "ask-for-roll-input",
  whosTurn: 0,
  pot: 0,
};

//this function constitutes the finite state machine or game logic
export function gameReducer(state, action) {
  switch (action.type) {
    case "INIT-PLAYERS":
      return { ...state, players: action.players };
    case "BUILD":
      //player is playing off last pot
      return { ...state, prompt: "ask-for-roll-input" };
    case "NO-BUILD":
      //player is starting a fresh pot
      return { ...state, pot: 0, prompt: "ask-for-roll-input" };
    case "ROLL":
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
      //looks confusing but just updates this players score
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
      return { ...state, prompt: "ask-for-roll-input" };
  }
}
