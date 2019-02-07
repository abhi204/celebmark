import { LOGIN_SUCESS, LOGIN_ERROR, LOGIN_FAILED } from "../_consts/auth";

let initialState = false;

let loggedInReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCESS:
            return { ...state, loggedIn: true};
        case LOGIN_ERROR:
        case LOGIN_FAILED:
            return { ...state, loggedIn: false};
        default:
            return state
    }
}

export default loggedInReducer;