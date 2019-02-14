import { deleteCookie, storeTokens } from '../_helpers/cookies';
import { API_GET_TOKEN } from '../_consts/api';
import axios from 'axios';
import {
    LOGOUT,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
} from '../_consts/auth';

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
        return request.then( ({data}) => {
            storeTokens(data.access, data.refresh);
            dispatch({type: LOGIN_SUCCESS, payload: data.user});
        }).catch( error => dispatch({type: LOGIN_FAILED, payload:error}) )
    }

}

export const logout = () => {
    deleteCookie('access');
    deleteCookie('refresh');
    return{
        type: LOGOUT,
        payload: null
    }
}