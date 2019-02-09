import Axios from "axios";
import { API_HOST } from "_consts/api";
import { SubmissionError } from 'redux-form';

export default async function submitForm(data){
    const url = `${API_HOST}/users/register/`;
    await Axios.post(url, data)
            .then(response => {
                if((response.code - 200)/100 < 1)
                    window.alert(`You submitted:\n\n${JSON.stringify(data, null, 2)}`)
                else
                    throw new SubmissionError({ _error: "Unknown Error Occured" })
            })
            .catch(err => {
                if(err.response)
                throw new SubmissionError({...err.response.data})
            })
}