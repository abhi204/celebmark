import { PROFILE_LOADING, PROFILE_RESPONSE, PROFILE_FAILED } from "../_consts/types";

let initialState = {};

let profileReducer = (state=initialState, action) => {
    console.log("type", action.type)
    switch (action.type) {
        case PROFILE_LOADING:
            return { loading: true}
        case PROFILE_RESPONSE:
            return action.payload
        case PROFILE_FAILED:
            return { error: true, ...action.payload }
        default:
            break;
    }
    return state;
}

export default profileReducer;