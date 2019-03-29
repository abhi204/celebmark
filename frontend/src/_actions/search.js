import { API_SEARCH_CELEB } from '_consts/api';
import axios from 'axios';
import { 
    NAV_SEARCH_RESPONSE,
    NAV_SEARCH_FAILED,
    SEARCH_LOADING,
    SEARCH_RESPONSE,
    SEARCH_FAILED,
    SEARCH_NEXT_LOADING,
    SEARCH_NEXT_RESPONSE,
    SEARCH_NEXT_FAILED,
    SEARCH_RESET,
} from '_consts/types';

/*
 Usage: 
    the passed argument must be JSON Object with { parameter: value }

    If no argument is passed -> the response includes all celebs.
    If argument is passed -> argument SHOULD include "search" as one of the parameters 

 ***************************************************************
 response format:
    JSON Object -> {
        'count': ..., 
        'next': ...,
        'previous': ...,
        'results: [ userObjects ],
        }
 ***************************************************************
 On Fail:
    returns the error response object from server 
 */
export function navSearchCeleb(params=null){
    let searchTerm = params.search || '';
    const request = params ? axios.get(API_SEARCH_CELEB, { params }) : axios.get(API_SEARCH_CELEB)
    return (dispatch) => {
        return request.then( ({data}) => {
            dispatch({type: NAV_SEARCH_RESPONSE, payload: {...data, searchTerm} });
        }).catch( error => dispatch({type: NAV_SEARCH_FAILED, payload: {searchTerm, ...error} }) )
    }

}

export function searchCeleb(params=null){
    let searchTerm = params.search || '';
    const request = params ? axios.get(API_SEARCH_CELEB, { params }) : axios.get(API_SEARCH_CELEB)
    return (dispatch) => {
        dispatch({ type: SEARCH_LOADING })
        return request.then( ({data}) => {
            dispatch({type: SEARCH_RESPONSE, payload: {...data, searchTerm} });
        }).catch( error => dispatch({type: SEARCH_FAILED, payload: {searchTerm, ...error} }) )
    }

}

export function searchNext(nextUrl){
    const request = axios.get(nextUrl)
    return (dispatch) => {
        dispatch({ type: SEARCH_NEXT_LOADING })
        return request.then( ({data}) => {
            dispatch({type: SEARCH_NEXT_RESPONSE, payload: { ...data } });
        }).catch( error => dispatch({type: SEARCH_NEXT_FAILED, payload: error }) )
    }
}

export function clearSearch(){
    return { type: SEARCH_RESET }
}