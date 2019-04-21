import { API_CELEB_BOOKMARK } from '_consts/api';
import { BOOKMARK, BOOKMARK_FAILED } from '_consts/types';

export const doProfileBookmark = (celebUsername) => {
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