import { CREATE_TOURNAMENT_SUCCESS, REDIRECTED } from './actionTypes'
import { createTournamet } from '../api/remote'

function createTournametSuccess () {
  return {
    type: CREATE_TOURNAMENT_SUCCESS
  }
}

export function redirect () {
  return {
    type: REDIRECTED
  }
}

function createTournametAction (imgUrl, price, name, info, place, date) {
  return (dispatch) => {
    return createTournamet(imgUrl, price, name, info, place, date)
      .then(json => {
        dispatch(createTournametSuccess())
        console.log('event created!')
      })
  }
}

export { createTournametAction }
