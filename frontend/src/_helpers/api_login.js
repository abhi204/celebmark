import axios from 'axios';
import { API_GET_TOKEN } from "../_consts/api";
import { ACCESS_TOKEN_EXPIRE, REFRESH_TOKEN_EXPIRE } from "../_consts/auth";
import { setCookie } from "./cookies";

async function sendCredentials(user_name,password){
    let response = {};
    const data = { user_name, password };
    await axios.post(API_GET_TOKEN,data)
        .then(resp => {
            if(resp.status >=200 && resp.status < 300){
                response = resp.data
                console.log("SUCCESS REPONSE", resp)
            }
            else
                throw resp
        })
        .catch(err => {
            response = err;
        })

    if(!(response.access && response.refresh))
        return response;

    setCookie('access', response.access, ACCESS_TOKEN_EXPIRE);
    setCookie('refresh', response.refresh, REFRESH_TOKEN_EXPIRE);
    return 'OK';    
}

export default sendCredentials;