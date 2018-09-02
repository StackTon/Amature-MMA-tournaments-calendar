import { REGISTER_SUCCESS, LOGIN_SUCCESS, REDIRECTED } from '../actions/actionTypes';
import { login, register } from '../api/remote';

function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    };
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    };
}

export function redirect() {
    return {
        type: REDIRECTED
    };
}

function registerAction(username, password) {
    return (dispatch) => {
        return register(username, password)
            .then(json => {
                if (json.success) {
                    dispatch(registerSuccess());
                }
            });
    };
}

function loginAction(username, password) {
    return (dispatch) => {
        return login(username, password)
            .then(json => {
                localStorage.setItem('authToken', json._kmd.authtoken);
                dispatch(loginSuccess());
            });
    };
}

function logoutAction() {
    return (dispatch) => {
        localStorage.clear();
    };
}

export { registerAction, loginAction, logoutAction };