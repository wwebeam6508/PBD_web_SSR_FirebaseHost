import * as actionTypes from './actionType';

export function login(user) {
    return {
        type: actionTypes.LOGIN,
        payload: user
    }
}

export function logout() {
    return {
        type: actionTypes.LOGOUT
    }
}
