import { CREATE_TOURNAMENT_SUCCESS, GET_TOURNAMENTS_SUCCESS } from '../actions/actionTypes'

const initialState = []

export function tournamentsReducer (state = initialState , action) {
  switch (action.type) {
    case CREATE_TOURNAMENT_SUCCESS:
      return state;
    case GET_TOURNAMENTS_SUCCESS:
      return action.data;
    default:
      return state;
  }
}
