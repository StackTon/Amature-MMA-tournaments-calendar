import { CREATE_TOURNAMENT_SUCCESS, GET_TOURNAMENTS_SUCCESS, GET_TOURNAMENTS_FOR_APPROVAL_SUCCESS, AJAX_BEGIN, AJAX_ERROR, REDIRECTED } from './actionTypes'
import { createTournamet, getTournaments, getTournamentsForApproval } from '../api/remote'

function createTournametSuccess () {
  return {
    type: CREATE_TOURNAMENT_SUCCESS
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

export function redirect() {
  return {
      type: REDIRECTED
  };
}

function createTournametAction (imgUrl, price, name, info, place, date) {
  return async (dispatch) => {
    return createTournamet(imgUrl, price, name, info, place, date)
      .then(json => {
        dispatch(createTournametSuccess())
      })
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

export { createTournametAction, getTournamentsAction, getTournamentsForApprovelAction }
