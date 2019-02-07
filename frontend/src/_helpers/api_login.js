import createBody from "./send_body";
import { API_GET_TOKEN } from "../_consts/api";
import { ACCESS_TOKEN_EXPIRE, REFRESH_TOKEN_EXPIRE } from "../_consts/auth";
import { setCookie } from "./cookies";

async function sendCredentials(user_name,password){
    let body = createBody({ user_name, password });
    let response = {};
    await fetch(`${API_GET_TOKEN}`, { method:"POST", body})
            .then(res => res.json())
            .then(data => response=data);
    if(!(response.access && response.refresh))
        return response;

    setCookie('access', response.access, ACCESS_TOKEN_EXPIRE);
    setCookie('refresh', response.refresh, REFRESH_TOKEN_EXPIRE);
    return 'OK';    
}

export default sendCredentials;