import { deleteCookie } from '../_helpers/cookies';
import {
    LOGOUT,
    LOGIN_FAILED,
    LOGIN_SUCESS,
} from '../_consts/auth';
import sendCredentials from '../_helpers/api_login';

/*
login dispatches server response as payload (refer to sendCredentials)
*/
export const login = async (user_name, password) => {
    let loginResponse = await sendCredentials(user_name, password);
    const details = loginResponse.user;
    if(details) //login response got user details as user property (Thus login successful)
        return {type: LOGIN_SUCESS, payload: details }
    else
        return {type: LOGIN_FAILED, payload: details };
}

export const logout = () => {
    deleteCookie('access');
    return{
        type: LOGOUT,
        payload: null
    }
}