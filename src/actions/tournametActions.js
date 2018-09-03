import {
  CREATE_TOURNAMENT_SUCCESS,
  GET_TOURNAMENTS_SUCCESS,
  GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS,
  DELETE_TOURNAMENT_FOR_APPROVAL_SUCCESS,
  DELETE_TOURNAMENT_SUCCESS,
  AJAX_BEGIN,
  AJAX_ERROR,
  REDIRECTED 
} from './actionTypes';

import {
  createTournamet,
  getTournaments,
  getTournamentsForApproval,
  deleteTournament
} from '../api/remote';

function createTournametForApprovalSuccess (data) {
  return {
    type: CREATE_TOURNAMENT_SUCCESS,
    data
  }
}

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

function getTournamentsForApprovalSuccess (data) {
  return {
    type: GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS,
    data
  }
}

function deleteTournamentForApprovalSuccess (id) {
  return {
    type: DELETE_TOURNAMENT_FOR_APPROVAL_SUCCESS,
    id
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




function createTournametForApprovalAction (imgUrl, price, name, info, place, date) {
  return async (dispatch) => {
    dispatch({ type: AJAX_BEGIN });
    try{
      const data = await createTournamet(imgUrl, price, name, info, place, date, "ForApproval");
      dispatch(createTournametForApprovalSuccess(data));
    }
    catch (err) {
      dispatch({
        type: AJAX_ERROR,
        err
    });
    }
  }
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

function getTournamentsForApprovelAction () {
  return async (dispatch) => {   
    dispatch({ type: AJAX_BEGIN });
    try{
      const data = await getTournamentsForApproval();
      dispatch(getTournamentsForApprovalSuccess(data))
    }
    catch (err) {
      dispatch({
        type: AJAX_ERROR,
        err
    });
    }
  }
}

function deleteTournamentForApprovalAction (id) {
  return async (dispatch) => {
    dispatch({ type: AJAX_BEGIN });
    try{
      await deleteTournament(id, "ForApproval");
      dispatch(deleteTournamentForApprovalSuccess(id));
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
      await deleteTournament(id);
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
  createTournametForApprovalAction,
  getTournamentsAction,
  getTournamentsForApprovelAction,
  deleteTournamentForApprovalAction,
  deleteTournamentAction 
}
