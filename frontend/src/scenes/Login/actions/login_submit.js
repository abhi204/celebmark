import axios from "axios";
import { SubmissionError } from 'redux-form'; 
import { API_GET_TOKEN } from '_consts/api';
import { LOGIN_SUCCESS, LOGIN_FAILED } from "_consts/auth";

export async function loginFormSubmit(values, dispatch, props){
    await axios.post(API_GET_TOKEN, {...values})
        .then(response => {
                dispatch({ type: LOGIN_SUCCESS, payload: response.data })
                return response.data
        })
        .catch(err => {
            const {data} = err.response;

            dispatch({ type: LOGIN_FAILED, payload: data });
            if(data.non_field_errors) // Returned on wrong credentials
                throw new SubmissionError({ _error: 'Invalid Username/Password' });
            else
                throw new SubmissionError({ _error: "Unknown error occured" });
        });
}

export const loginSuccesful = (values, dispatch, props) => {
    console.log("HISTORY ARE", props.history)
    props.history.replace('/');
}

export const loginFailed = (errors, dispatch, submitError, props) => {
    props.history.replace('/login', { message: errors._error })
}