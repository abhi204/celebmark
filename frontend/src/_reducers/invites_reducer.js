import {
    INVITE_GET,
    INVITE_GET_LOADING,
    INVITE_GET_FAILED
} from '_consts/types'

const initialState = { inviteList: [] }

let invitesReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case INVITE_GET_LOADING:
            return { loading: true }
        case INVITE_GET_FAILED:
            return { error: true, payload }
        case INVITE_GET:
            return { inviteList: payload }
        default:
            return state;
    }
}

export default invitesReducer;