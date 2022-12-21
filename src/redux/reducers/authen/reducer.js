import * as action from './action.js'

const initialState = {
    user: null,
    isLogin: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLogin: true
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLogin: false
            }
        default:
            return state
    }   
}

export default authReducer