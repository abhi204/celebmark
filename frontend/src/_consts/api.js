// All API endpoints defined here

export const API_HOST = 'http://localhost:8000';
export const API_GET_TOKEN = `${API_HOST}/auth/token/obtain/`;
export const API_REFRESH_TOKEN = `${API_HOST}/auth/token/refresh/`;

export const API_USER_REGISTER = `${API_HOST}/user/register/`;
export const API_USER_REGISTER_CHECK = `${API_HOST}/user/check/`;
export const API_USER_DETAILS = `${API_HOST}/user/details/`

export const API_SEARCH_CELEB = `${API_HOST}/profile`;
export const API_CELEB_PROFILE = `${API_HOST}/profile`;
export const API_CELEB_BOOKMARK = `${API_CELEB_PROFILE}/bookmark/`

export const API_MEDIA = `${API_HOST}/media`;