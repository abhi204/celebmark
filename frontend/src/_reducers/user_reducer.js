import { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, LOGOUT } from "_consts/auth";
import { getCookie } from "_helpers/cookies";

let initialState = { loggedIn: false, details: {} };

let userReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            const refreshToken = getCookie("refresh");
            const data = JSON.parse(atob(refreshToken.split('.')[1]));
            return { ...state, loggedIn: true, details: data.user };
        case LOGOUT:
        case LOGIN_ERROR:
        case LOGIN_FAILED:
            return initialState;
        default:
            return state
    }
}

export default userReducer;