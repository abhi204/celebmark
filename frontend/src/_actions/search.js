import { API_SEARCH_CELEB } from '_consts/api';
import { SEARCH_RESPONSE, SEARCH_FAILED } from '_consts/types';
import axios from 'axios';

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
export function searchCeleb(params=null){
    let searchTerm = params.search || '';
    const request = params ? axios.get(API_SEARCH_CELEB, { params }) : axios.get(API_SEARCH_CELEB)
    return (dispatch) => {
        return request.then( ({data}) => {
            dispatch({type: SEARCH_RESPONSE, payload: {...data, searchTerm} });
        }).catch( error => dispatch({type: SEARCH_FAILED, payload: {searchTerm, ...error} }) )
    }

}