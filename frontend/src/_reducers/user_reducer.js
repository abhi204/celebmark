import { 
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_FAILED,
    LOGOUT,
    LOGIN_IN_PROGRESS,
    LOGIN_RETRY,
} from "_consts/auth";
import { USER_UPDATE } from "_consts/types";
import { BOOKMARK } from "_consts/types";
import { API_HOST } from "_consts/api";

let initialState = { loggedIn: false, details: {} };

let userReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_IN_PROGRESS:
            return { loggedIn: LOGIN_IN_PROGRESS }
        case USER_UPDATE:
        case LOGIN_SUCCESS:
            action.payload.profile_pic = `${API_HOST}/${action.payload.profile_pic}`
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