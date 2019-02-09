import axios from 'axios';
import { API_HOST } from "_consts/api";
import { SIGNUP_END, SIGNUP_FAILED } from "_consts/auth";


const submitSignupForm = (userDetails) => {
    return (dispatch) => (
        axios.post(`${API_HOST}/users/register/`, userDetails,)
            .then(response => { dispatch({type: SIGNUP_END, payload: response.data}) } )
            .catch(err => { dispatch({ type: SIGNUP_FAILED, payload:err }) })
    )
}

export default submitSignupForm;