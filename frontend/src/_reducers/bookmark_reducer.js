import {
    BOOKMARK_GET_CELEB,
    BOOKMARK_GET_CELEB_LOADING,
    BOOKMARK_GET_CELEB_FAILED,
} from "_consts/types";

const initialState = { celebs: {}}

let bookmarkReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case BOOKMARK_GET_CELEB_LOADING:
            return { ...state, celebs: { loading: true } };
        case BOOKMARK_GET_CELEB:
            return { ...state, celebs: payload };
        case BOOKMARK_GET_CELEB_FAILED:
            return { ...state, celebs: { }, error: payload };
        default:
            return state;
    }
}

export default bookmarkReducer;