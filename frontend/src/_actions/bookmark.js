import { API_CELEB_BOOKMARK } from '_consts/api';
import { 
    BOOKMARK, 
    BOOKMARK_FAILED,
    BOOKMARK_GET_CELEB,
    BOOKMARK_GET_CELEB_LOADING,
    BOOKMARK_GET_CELEB_FAILED,
} from '_consts/types';

export function doProfileBookmark(celebUsername){
    // Used Custom Authentication Middleware for JWT
    return {
        type: BOOKMARK,
        failedType: BOOKMARK_FAILED,
        meta: {
            type: 'api',
            method: 'post',
            url: API_CELEB_BOOKMARK,
            data: { celeb: celebUsername }
        }
    }
}

export const getCelebBookmark = () => {
    return {
        type: BOOKMARK_GET_CELEB,
        loadingType: BOOKMARK_GET_CELEB_LOADING,
        failedType: BOOKMARK_GET_CELEB_FAILED,
        meta: {
            type: 'api',
            method: 'get',
            url: API_CELEB_BOOKMARK
        }
    }
}