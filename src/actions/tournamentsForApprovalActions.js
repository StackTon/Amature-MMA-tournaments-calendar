import { 
    CREATE_TOURNAMENT_FOR_APPROVAL_SUCCESS,
    GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS,
    DELETE_TOURNAMENT_FOR_APPROVAL_SUCCESS,
    AJAX_BEGIN,
    AJAX_ERROR
} from './actionTypes';

import { createTournamet,
    getTournamentsForApproval,
    deleteTournamentById
} from '../api/remote';


function createTournametForApprovalSuccess (data) {
  return {
    type: CREATE_TOURNAMENT_FOR_APPROVAL_SUCCESS,
  data}
}

function getTournamentsForApprovalSuccess (data) {
  return {
    type: GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS,
  data}
}

function deleteTournamentForApprovalSuccess (id) {
  return {
    type: DELETE_TOURNAMENT_FOR_APPROVAL_SUCCESS,
  id}
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

function getTournamentsForApprovalAction () {
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
        await deleteTournamentById(id, "ForApproval");
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

export { createTournametForApprovalAction, getTournamentsForApprovalAction, deleteTournamentForApprovalAction }