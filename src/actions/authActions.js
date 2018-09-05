import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT_SUCCESS, REDIRECTED, AJAX_BEGIN, AJAX_ERROR } from '../actions/actionTypes';
import { login, register } from '../api/remote';

function registerSuccess() {
    return {
        type: REGISTER_SUCCESS
    };
}

function loginSuccess(isAdmin) {
    return {
        type: LOGIN_SUCCESS,
        isAdmin
    };
}

function logoutSuccess(){
    return {
        type: LOGOUT_SUCCESS
    }
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
    return async (dispatch) => {
        dispatch({ type: AJAX_BEGIN });
        try {
            const data = await login(username, password);
            localStorage.setItem('authToken', data._kmd.authtoken);
            dispatch(loginSuccess(data.isAdmin));
            
        }
        catch (err) {
            dispatch({
              type: AJAX_ERROR,
              err
          });
        }
    };
}

function logoutAction() {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logoutSuccess());
    };
}

export { registerAction, loginAction, logoutAction };