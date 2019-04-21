import axios from 'axios';
import { API_REFRESH_TOKEN } from '../_consts/api';
import { setCookie } from './cookies';
import { ACCESS_TOKEN_EXPIRE } from '../_consts/auth';

// Return 1 on success and 0 on Fail
let refreshAccessToken = async (refreshToken) => {
    return axios.post(API_REFRESH_TOKEN, {refresh: refreshToken})
            .then( ({data}) => {
                if(data.access) // if access token returned in response
                {
                    setCookie('access', data.access, ACCESS_TOKEN_EXPIRE);
                    return 1;
                }
                return 0
            } )
            .catch( error => (error) )

}

export default refreshAccessToken;