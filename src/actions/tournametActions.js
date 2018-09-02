import { CREATE_TOURNAMENT_SUCCESS, GET_TOURNAMENTS_SUCCESS, AJAX_BEGIN, AJAX_ERROR, REDIRECTED } from './actionTypes'
import { createTournamet, getTournaments } from '../api/remote'

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

export { createTournametAction, getTournamentsAction }
