import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, REDIRECTED } from '../actions/actionTypes'

export function registerReducer (state = { success: false } , action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { success: true })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: false })
    case LOGOUT_SUCCESS:
      console.log('1')
      return Object.assign({}, state, { success: false }, { isAdmin: false})
    case REDIRECTED:
      return Object.assign({}, state, { success: false })
    default:
      return state
  }
}

export function loginReducer (state = { success: false } , action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, { success: true }, { isAdmin: action.isAdmin })
    case REDIRECTED:
      return Object.assign({}, state, { success: false })
    default:
      return state
  }
}
