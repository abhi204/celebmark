import axios from 'axios';
import { API_REFRESH_TOKEN } from '../_consts/api';
import { LOGIN_FAILED, LOGIN_REDIRECT, ACCESS_TOKEN_EXPIRE } from '../_consts/auth';
import { getCookie, setCookie } from '../_helpers/cookies';
// import refreshAccessToken from '../_helpers/refresh_access_token';

/* this middleware works only when refreshToken is present in cookie */
export const apiMiddleware = (store) => (next) => async (action) => {
    let META = action.meta;
    if(!META || META.type !== 'api')
    {
        return next(action);
    }

    let refreshToken = getCookie('refresh');
    if(!refreshToken)
    return store.dispatch({
        type: LOGIN_REDIRECT, //make sure the user redirects to login page
        payload: action.payload
    });
    
    let accessToken = getCookie('access');
    if(!accessToken){
        return store.dispatch(
            (dispatch) => {
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

    if(typeof(META.then) === "function")
        return store.dispatch(
            (dispatch) => {
                return request.then( response => META.then(response, true) )
                                .catch( error => META.then(error, false) )
            }
        )


    return store.dispatch(
        (dispatch) => {
            return request.then( ({data}) => next({ type: action.type, payload: data }) )
                            .catch( error => dispatch({ type: action.failedType, payload: error }))
        }
    )

    // if(!accessToken)
    // {
    //     let refreshStatus = await refreshAccessToken(refreshToken);
    //     if(refreshStatus!==1) //refreshStatus is 1 when access token was successfuly updated
    //     return store.dispatch({ 
    //         type: LOGIN_FAILED,
    //         payload: refreshStatus 
    //     });
    // }
    // //Add authorization to header and send request to api endpoint
    // await axios({
    //     method: META.method,
    //     url: META.url,
    //     data: META.data,
    //     headers: {
    //         'Authorization': `Bearer ${accessToken}`
    //     }
    // }).then(response => { action.payload = response.data })
    // .catch((error) => {console.log('APIMIDDLEWARE AXIOS CATCH ERROR',error)})
    
    // console.log("MODIFIED PAYLOAD:", action.payload)

    // return store.dispatch({type: action.type, payload: action.payload})
}