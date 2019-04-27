import _ from 'lodash';
import { API_INVITE } from "_consts/api";
import { SubmissionError } from 'redux-form';
import { inviteFields } from '../forms/invite_form'

const setInvite = (apiResponseData, status) => {
    if(status === "failed")
        {
            let { data, status } = apiResponseData.response;
            let errorKeys = _.keys(data);
            let unknownErrorsList = _.difference(errorKeys, inviteFields);
            if(unknownErrorsList.length > 0)
                throw new SubmissionError({ _error: "Unknown error occured", statusCode: status});
            throw new SubmissionError(data)
        }
    if(status === "ok" )
        console.log("ok", apiResponseData);
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
