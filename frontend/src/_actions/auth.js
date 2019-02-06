import { deleteCookie } from '../_helpers/cookies';
import {
    LOGIN_REQUEST,
    LOGOUT,
    API_GET_TOKEN,
} from '../_consts/auth';

// After login attempt, reducer will recieve payload which tells if the login was sucessful
// (i.e. refresh, access tokens were set in cookie)
export const login = (user_name, password) => {
    return {
        type: LOGIN_REQUEST,
        meta: {
            type: 'api',
            path: API_GET_TOKEN,
            method: 'POST',
            data: {
                user_name,
                password
            }
        },
    };
}

export const logout = () => {
    deleteCookie('access');
    return{
        type: LOGOUT,
        payload: null
    }
}