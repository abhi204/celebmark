import _ from 'lodash';
import { API_INVITE } from "_consts/api";
import { SubmissionError } from 'redux-form';
import { inviteFields } from '../forms/invite_form'

const setInvite = (history) => (apiResponse, okStatus) => {
    if(okStatus)
    {   
        const { data } = apiResponse
        if(data.payURL)
            window.location.assign(apiResponse.data.payURL);
        else // Api sends => { invite: inviteObject }
            history.replace({
                pathname: `/invite/${data.invite.celeb}`,
                state: { inviteSent: true, invite: data.invite }
            })
    }
    else
        {
            const { data } = apiResponse && apiResponse.response ? apiResponse.response : {}
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
            then: setInvite(props.history),
        }
    })
}
