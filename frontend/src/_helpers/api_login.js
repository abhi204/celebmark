import axios from 'axios';
import { API_GET_TOKEN } from "../_consts/api";
import { ACCESS_TOKEN_EXPIRE, REFRESH_TOKEN_EXPIRE } from "../_consts/auth";
import { setCookie } from "./cookies";

/*
 IF successful sendCredentials saves tokens to cookies
 and sends the server response which is in the format:
 JSON Object -> {
    'access': ..., 
    'refresh': ...,
    'user': ...,
    }
 * 
 *
 IF failed, returns the error response object from server 
 */
async function sendCredentials(user_name,password){
    const loginData = { user_name, password };
    let response = {};
    await axios.post(API_GET_TOKEN, loginData)
        .then(resp => { response = resp.data })
        .catch(err => { response = err.response.data })

    if(response.access && response.refresh){
        setCookie('access', response.access, ACCESS_TOKEN_EXPIRE);
        setCookie('refresh', response.refresh, REFRESH_TOKEN_EXPIRE);
        console.log("SET COOKIES COMPLETE")
        //dummy success response user data
        response.user = {name: "ABHI CHAURASIA", dummy:"TRUE", user_name:"abhi"}
    }
    return response;
}

export default sendCredentials;