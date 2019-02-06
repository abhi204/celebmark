import { API_HOST } from '../_consts/api';
import { LOGIN_FAILED, LOGIN_REDIRECT } from '../_consts/auth';
import { getCookie } from '../_helpers/cookies';
import createBody from '../_helpers/send_body';
import refreshAccessToken from '../_helpers/refresh_access_token';

/* this middleware works only when refreshToken is present in cookie */
export const apiMiddleware = (store) => (next) => async (action) => {
    let META = action.meta;
    if(!META || META.type !== 'api')
        return next(action);

    let refreshToken = getCookie('refresh');
    if(!refreshToken)
        return store.dispatch({
            type: LOGIN_REDIRECT, //make sure the user redirects to login page
            payload: action.payload
        });

    let accessToken = getCookie('access');
    const body = createBody(META.data);
    if(!accessToken)
    {
        let refreshStatus = refreshAccessToken(refreshToken);
        if(refreshStatus!==1) //refreshStatus is 1 when access token was successfuly updated
            return store.dispatch({ 
                type: LOGIN_FAILED,
                payload: refreshStatus 
            });
    }
    //Add authorization to header and send request to api endpoint
    await fetch(`${API_HOST}${META.path}`, {Authorization: `Bearer ${accessToken}`, method: META.method, body,},)
                .then(response => response.json())
                .then(data => action.payload = data);
    return store.dispatch({
        type: action.type,
        payload: action.payload,
    })
}