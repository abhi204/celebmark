import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, LOGOUT } from "_consts/auth";
import { BOOKMARK } from "../_consts/types";
import { LOGIN_IN_PROGRESS, LOGIN_RETRY } from "../_consts/auth";

let initialState = { loggedIn: false, details: {} };

let userReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_IN_PROGRESS:
            return { loggedIn: LOGIN_IN_PROGRESS }
        case LOGIN_SUCCESS:
        return { loggedIn: true, details: action.payload };
        case LOGOUT:
        case LOGIN_ERROR:
        case LOGIN_FAILED:
        return { loggedIn: false };
        case LOGIN_RETRY:
            return { loggedIn: false, loginStatus: LOGIN_RETRY }
        case BOOKMARK:
            state.details.bookmarks = action.payload;
            return state;
        default:
            return state
    }
}

export default userReducer;