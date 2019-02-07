import { deleteCookie } from '../_helpers/cookies';
import {
    LOGOUT,
    LOGIN_FAILED,
    LOGIN_SUCESS,
} from '../_consts/auth';
import sendCredentials from '../_helpers/api_login';

// After login attempt, reducer will recieve payload which tells if the login was sucessful
// (i.e. refresh, access tokens were set in cookie)
export const login = (user_name, password) => {
    let loginAttempt = sendCredentials(user_name, password);
    if(loginAttempt==='OK')
        return {type: LOGIN_SUCESS, payload: { user_name } }
    else
        return {type: LOGIN_FAILED, payload: loginAttempt};
}

export const logout = () => {
    deleteCookie('access');
    return{
        type: LOGOUT,
        payload: null
    }
}