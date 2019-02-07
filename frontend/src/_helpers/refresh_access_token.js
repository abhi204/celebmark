import { API_HOST, API_REFRESH_TOKEN } from '../_consts/api';
import createBody from './send_body';
import { setCookie } from './cookies';
import { ACCESS_TOKEN_EXPIRE } from '../_consts/auth';

// Return 1 on success and error JSON on Fail
let refreshAccessToken = async (refreshToken) => {
    const body = createBody({refresh: refreshToken});
    let refreshResponse = {};
    await fetch(`${API_HOST}${API_REFRESH_TOKEN}`, { method: 'POST', body })
        .then(response => response.json())
        .then(data => refreshResponse=data)

    if(refreshResponse.access){
        // 0.0021 days ~= 3 minutes
        setCookie('access', refreshResponse.access, ACCESS_TOKEN_EXPIRE);
        return 1;
    }
    return refreshResponse // {detail, code}

}

export default refreshAccessToken;