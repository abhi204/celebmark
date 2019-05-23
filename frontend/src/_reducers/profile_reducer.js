import { PROFILE_LOADING, PROFILE_RESPONSE, PROFILE_FAILED } from "_consts/types";
import { API_HOST } from "_consts/api";

let initialState = { loading: true };

let profileReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case PROFILE_LOADING:
            return { loading: true }
        case PROFILE_RESPONSE:
            let fullName = `${payload.first_name} ${payload.last_name}`;
            let gallery = payload.gallery.map(image_url => (`${API_HOST}/${image_url}`));
            payload.profile_pic = `${API_HOST}/${payload.profile_pic}`
            return { ...payload, fullName, gallery };
        case PROFILE_FAILED:
            return { error: true, ...payload }
        default:
            break;
    }
    return state;
}

export default profileReducer;