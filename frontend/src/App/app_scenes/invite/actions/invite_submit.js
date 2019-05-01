import _ from 'lodash';
import { API_INVITE } from "_consts/api";
import { SubmissionError } from 'redux-form';
import { inviteFields } from '../forms/invite_form'

const setInvite = (apiResponse, okStatus) => {
    if(okStatus)
    {
        window.location.assign(apiResponse.data.payURL);
    }
    else
        {
            let { data } = apiResponse && apiResponse.response ? apiResponse.response : {}
            if( _.difference(_.keys(data), inviteFields).length > 0)
                throw new SubmissionError({ _error: "Unknown error occured", });
            else
                throw new SubmissionError(data);
        }
}

export const inviteFormSubmit = async ( values, dispatch, props ) => {
    await dispatch({
        failedType: "Failed To Send Invite",
        meta:{
            type: 'api',
            method: 'post',
            url: API_INVITE,
            data: values,
            then: setInvite,
        }
    })
}
