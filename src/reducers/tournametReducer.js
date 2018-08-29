import { CREATE_TOURNAMENT_SUCCESS, REDIRECTED } from '../actions/actionTypes';

export function createTournametReducer(state = { success: false }, action) {
    switch (action.type) {
    case CREATE_TOURNAMENT_SUCCESS:
        return Object.assign({}, state, { success: true });
    case REDIRECTED:
        return Object.assign({}, state, { success: false });
    default:
        return state;
    }
}