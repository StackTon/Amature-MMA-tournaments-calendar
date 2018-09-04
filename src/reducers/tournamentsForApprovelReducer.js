import { GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS, DELETE_TOURNAMENT_FOR_APPROVAL_SUCCESS, CREATE_TOURNAMENT_FOR_APPROVAL_SUCCESS } from '../actions/actionTypes'

const initialState = [];

export function tournamentsForApprovelReducer (state = initialState , action) {
  switch (action.type) {
    case GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS:
      return action.data;

    case DELETE_TOURNAMENT_FOR_APPROVAL_SUCCESS:
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

    case CREATE_TOURNAMENT_FOR_APPROVAL_SUCCESS:
      return [...state, (action.data)];

    default:
      return state;
  }
}
