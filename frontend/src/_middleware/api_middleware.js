import axios from 'axios';
import { API_REFRESH_TOKEN } from '../_consts/api';
import { LOGIN_FAILED, LOGIN_REDIRECT, ACCESS_TOKEN_EXPIRE } from '../_consts/auth';
import { getCookie, setCookie } from '../_helpers/cookies';
// import refreshAccessToken from '../_helpers/refresh_access_token';

/* this middleware works only when refreshToken is present in cookie */
export const apiMiddleware = (store) => (next) => (action) => {
    let META = action.meta || {};
    if(META.type !== 'api')
    {
        return next(action);
    }

    let refreshToken = getCookie('refresh');
    if(!refreshToken)
    return next({
        type: LOGIN_REDIRECT, //makes sure the user redirects to login page
        payload: action.payload
    });
    
    let accessToken = getCookie('access');
    if(!accessToken){
        return next((dispatch) => {
                return axios.post(API_REFRESH_TOKEN, { refresh: refreshToken })
                        .then( ({data}) => {
                            if(data.access){
                                setCookie('access', data.access, ACCESS_TOKEN_EXPIRE)
                                dispatch(action)
                            }
                            else
                                dispatch({type: LOGIN_FAILED})
                        })
                        .catch( error => dispatch({ type: LOGIN_FAILED, payload: error }))
            }
        )
    }

    let request = axios({ 
        method: META.method,
        url: META.url,
        data: META.data,
        headers: { 'Authorization': `Bearer ${accessToken}` }
    })

    // response handled by then function
    if(typeof(META.then) === "function")
        return next((dispatch) => {
                        // dispatch({ type: action.loadingType })
                        return request.then( response => { META.then(response, true); dispatch({type: "api"}) } )
                                        .catch( error => { META.then(error, false); dispatch({type: "api"}) } )
                        }
        )
    
    // response data passed to reducers
    else
        return next((dispatch) => {
                if(action.loadingType)
                    dispatch({type: action.loadingType})
                return request.then( ({data}) => next({ type: action.type, payload: data }) )
                                .catch( error => dispatch({ type: action.failedType, payload: error }))
            }
        )
}