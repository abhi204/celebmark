import axios from 'axios';
import { API_REFRESH_TOKEN } from '../_consts/api';
import { setCookie } from './cookies';
import { ACCESS_TOKEN_EXPIRE } from '../_consts/auth';

// Return 1 on success and error JSON on Fail
let refreshAccessToken = async (refreshToken) => {
    let refreshResponse = {};
    await axios.post(API_REFRESH_TOKEN, {refresh: refreshAccessToken})
        .then(response => {
            refreshResponse = response.data
        })

    if(refreshResponse.access){
        // 0.0021 days ~= 3 minutes
        setCookie('access', refreshResponse.access, ACCESS_TOKEN_EXPIRE);
        return 1;
    }
    return refreshResponse // {detail, code}

}

export default refreshAccessToken;