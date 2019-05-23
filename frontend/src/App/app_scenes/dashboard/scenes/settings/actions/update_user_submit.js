import _ from 'lodash';
import { API_UPDATE_USER } from "_consts/api";
import {
    USER_UPDATE,
    USER_UPDATE_FAILED
} from '_consts/types';
import { SubmissionError } from 'redux-form';
import { userUpdateFields } from '../forms/update_user_form'
import { toast } from "react-toastify";

const updateUserReducer = (dispatch, history) => (apiResponse, okStatus) => {
    if(okStatus)
    {   
        const { data } = apiResponse
        dispatch({type: USER_UPDATE, payload: data})
        history.push('/dashboard');
        toast.info("User details Updated")
    }
    else
        {
            const { data } = apiResponse && apiResponse.response ? apiResponse.response : {}
            if( _.difference(_.keys(data), userUpdateFields).length > 0)
                throw new SubmissionError({ _error: "Unknown error occured", });
            else
                throw new SubmissionError(data);
        }
}

export const userUpdateSubmit = async ( values, dispatch, props ) => {
    await dispatch({
        type: USER_UPDATE,
        failedType: USER_UPDATE_FAILED,
        meta:{
            type: 'api',
            method: 'patch',
            url: API_UPDATE_USER,
            data: values,
            then: updateUserReducer(dispatch, props.history),
        }
    })
}
