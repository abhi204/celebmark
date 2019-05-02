import { API_HOST } from '_consts/api';
import { SUBSCRIBE, SUBSCRIBE_FAILED } from '_consts/types'

function gotoPayPage(apiResponse, statusOk){
    if(!statusOk){
        console.log("Unable To Fetch Payment Link")
    }
    else
        window.location.assign(apiResponse.data.payURL);
}

function doSubscribe(model){
    return {
        type: SUBSCRIBE,
        failedType: SUBSCRIBE_FAILED,
        meta: {
            type: 'api',
            method: 'get',
            url: `${API_HOST}/user/subscribe/${model}/`,
            then: gotoPayPage,
        }
    }
}

export default doSubscribe;