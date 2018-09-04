import {
  CREATE_TOURNAMENT_SUCCESS,
  GET_TOURNAMENTS_SUCCESS,
  DELETE_TOURNAMENT_SUCCESS,
  AJAX_BEGIN,
  AJAX_ERROR,
  REDIRECTED 
} from './actionTypes';

import {
  createTournamet,
  getTournaments,
  deleteTournamentById
} from '../api/remote';

function createTournametSuccess (data) {
    return {
      type: CREATE_TOURNAMENT_SUCCESS,
      data
    }
}

function getTournamentsSuccess (data) {
  return {
    type: GET_TOURNAMENTS_SUCCESS,
    data
  }
}

function deleteTournamentSuccess(id) {
  return {
    type: DELETE_TOURNAMENT_SUCCESS,
    id
  }
}

export function redirect() {
  return {
      type: REDIRECTED
  };
}


function createTournametAction (imgUrl, price, name, info, place, date) {
  return async (dispatch) => {
    dispatch({ type: AJAX_BEGIN });
    try{
      const data = await createTournamet(imgUrl, price, name, info, place, date);
      dispatch(createTournametSuccess(data));
    }
    catch (err) {
      dispatch({
        type: AJAX_ERROR,
        err
    });
    }
  }
}

function getTournamentsAction () {
  return async (dispatch) => {
    dispatch({ type: AJAX_BEGIN });
    try{
      const data = await getTournaments();
      dispatch(getTournamentsSuccess(data))
    }
    catch (err) {
      dispatch({
        type: AJAX_ERROR,
        err
    });
    }
  }
}

function deleteTournamentAction(id) {
  return async (dispatch) => {
    dispatch({ type: AJAX_BEGIN });
    try{
      await deleteTournamentById(id);
      dispatch(deleteTournamentSuccess(id));
    }
    catch (err) {
      dispatch({
        type: AJAX_ERROR,
        err
    });
    }
  }
}

export { 
  createTournametAction,
  getTournamentsAction,
  deleteTournamentAction 
}
