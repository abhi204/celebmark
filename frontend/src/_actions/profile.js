import axios from "axios";
import { API_CELEB_PROFILE } from "../_consts/api";
import { PROFILE_LOADING, PROFILE_RESPONSE, PROFILE_FAILED } from "../_consts/types";

export function getCelebProfile(celebUserName){
    let request = axios.get(`${API_CELEB_PROFILE}/${celebUserName}`)
    return (dispatch) => {
        dispatch({ type: PROFILE_LOADING })
        return request.then( ({data}) => dispatch({ type: PROFILE_RESPONSE, payload: data }) )
                .catch( error =>  dispatch({ type: PROFILE_FAILED, error}) )
    }
}