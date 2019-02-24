import axios from "axios";
import { API_USER_REGISTER } from "_consts/api";
import { SubmissionError } from 'redux-form';
import _ from 'lodash';
import { fields as fieldsForStep1 } from "../forms/form1";
import { fields as fieldsForStep2 } from "../forms/form2"

let getNames = (fields) => (fields.map( field => (field.name)))


let fieldNames = [].concat(
    getNames(fieldsForStep1),
    getNames(fieldsForStep2),
)

console.log("FIELD NAMES ARE", fieldNames)


export async function submitForm(data){
    await axios.post(`${API_USER_REGISTER}`, data)
            .then(response => {
                    return response.data
            })
            .catch(err => {
                    const { data, status } = err.response;
                    const errorKeys = _.keys(data);
                    const unknownErrorsList = _.difference(errorKeys, fieldNames); // list of non from Field based errors
                    if (unknownErrorsList.length > 0)
                        throw new SubmissionError({ _error: "Unknown error occured", statusCode: status});
                    else
                        throw new SubmissionError({...err.response.data});
                }
            )
}

export function submitOK(result, dispatch, props){
    props.history.push('/login', {message: 'Check email for confirmation link'})
}
