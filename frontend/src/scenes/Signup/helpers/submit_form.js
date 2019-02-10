import Axios from "axios";
import { API_HOST } from "_consts/api";
import { SubmissionError } from 'redux-form';

export async function submitForm(data){
    const url = `${API_HOST}/users/register/`;
    await Axios.post(url, data)
            .then(response => {
                if(response.status >=200 && response.status < 300){
                    return response.data
                }
                else{
                    throw new SubmissionError({ _error: "Unknown Error Occured" });
                }
            })
            .catch(err => {
                    throw new SubmissionError(err.response.data);
                }
            )
}

export function submitOK(props){
    props.history.push('/login', {message: 'Check email for confirmation link'})
}