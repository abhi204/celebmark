import { SIGNUP_END, SIGNUP_FAILED } from "_consts/auth";

export default function signupReducer(state=null, action){
    switch(action.type){
        case SIGNUP_END:
                return { ...state, signup: SIGNUP_END };
        case SIGNUP_FAILED:
                return { ...state, signup: SIGNUP_FAILED };
        default:
                return state;
    }

}