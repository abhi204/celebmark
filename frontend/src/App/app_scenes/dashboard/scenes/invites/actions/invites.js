import { API_INVITE } from "_consts/api";
import {
    INVITE_GET,
    INVITE_GET_FAILED,
    INVITE_GET_LOADING
} from '_consts/types'

function getInvites()
{
    return {
        type: INVITE_GET,
        loadingType: INVITE_GET_LOADING,
        failedType: INVITE_GET_FAILED,
        meta:{
            type: 'api',
            method: 'get',
            url: API_INVITE
        }
    }
}

export default getInvites;