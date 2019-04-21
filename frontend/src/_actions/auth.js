import { deleteCookie, storeTokens, getCookie } from '../_helpers/cookies';
import { API_GET_TOKEN, API_REFRESH_TOKEN, API_USER_DETAILS } from '../_consts/api';
import axios from 'axios';
import {
    LOGOUT,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGIN_IN_PROGRESS,
    LOGIN_RETRY,
} from '../_consts/auth';

export function getUserDetails(){
    // Used MY Custom Authentication Middleware for JWT
    return {
        type: LOGIN_SUCCESS,
        failedType: LOGIN_FAILED,
        meta: {
            type: 'api',
            method: 'get',
            url: API_USER_DETAILS,
            data: {}
        }
    }
}

/*
 IF successful saves tokens to cookies
 and sends the server response which is in the format:
 JSON Object -> {
    'access': ..., 
    'refresh': ...,
    'user': ...,
    }
 * 
 IF failed, returns the error response object from server 
 */
export function login(user_name, password){
    const request = axios.post(API_GET_TOKEN, { user_name, password })
    return (dispatch) => {
        dispatch({ type: LOGIN_IN_PROGRESS })
        return request.then( ({data}) => {
            storeTokens(data.access, data.refresh);
            dispatch(getUserDetails());
        }).catch( error => dispatch({type: LOGIN_RETRY, payload:error}) )
    }

}

export const logout = () => {
    deleteCookie('refresh');
    deleteCookie('access');
    return{
        type: LOGOUT,
        payload: null
    }
}

//obtains new accessToken every time the website loads
export function checkLogin(){
    const refreshToken = getCookie("refresh");
    if(!refreshToken)
        return { type: LOGIN_FAILED, payload: null}
    
    const request = axios.post(API_REFRESH_TOKEN, {refresh: refreshToken})

    return (dispatch) => {
        dispatch({type: LOGIN_IN_PROGRESS})
        return request.then( ({data}) => {
            storeTokens(data.access, refreshToken);
            dispatch(getUserDetails());
        }).catch( error => dispatch({type: LOGIN_FAILED, payload:error}) )
    }
}