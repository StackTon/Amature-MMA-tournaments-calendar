import { CREATE_TOURNAMENT_SUCCESS, GET_TOURNAMENTS_SUCCESS, DELETE_TOURNAMENT_SUCCESS, GET_TOURNAMENT_BY_ID_SUCCESS } from '../actions/actionTypes'

const initialState = []

export function tournamentsReducer (state = initialState , action) {
  switch (action.type) {
    case CREATE_TOURNAMENT_SUCCESS:
      return [...state, (action.data)]

    case GET_TOURNAMENTS_SUCCESS:
      return action.data || [];

    case DELETE_TOURNAMENT_SUCCESS:
      let newState = [...state];
      for (const index in state) {
        if (state.hasOwnProperty(index)) {
          const tournament = state[index];
          if (tournament._id === action.id) {
            newState.splice(index, 1);
          }
        }
      }
      return newState;

    default:
      return state;
  }
}

export function detailsTournamentReducer (state = {} , action) {
  switch (action.type) {
    case GET_TOURNAMENT_BY_ID_SUCCESS:
      return action.data || {};

    default:
      return state;

  }
}
