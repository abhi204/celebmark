import { PROFILE_LOADING, PROFILE_RESPONSE, PROFILE_FAILED } from "../_consts/types";

let initialState = {};

let profileReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case PROFILE_LOADING:
            return { loading: true}
        case PROFILE_RESPONSE:
            let fullName = `${payload.first_name} ${payload.last_name}`
            return { ...payload, fullName }
        case PROFILE_FAILED:
            return { error: true, ...payload }
        default:
            break;
    }
    return state;
}

export default profileReducer;