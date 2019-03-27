import { NAV_SEARCH_RESPONSE, NAV_SEARCH_FAILED } from "../_consts/types";

/*
 total -> total number of matching queries
 next / previous  -> next/previous page number
 results -> list of users
*/
let initialState = { 
    searchTerm: '',
    total: 0,
    next: null,
    previous: null,
    results: []
};

/* 
 * if the previous query has result
 * but the new query
 * keep the previous state as long as the new searchTerm begins with the old searchTerm
 * (Done by the Regexp matching)
 */

let navSearchReducer = (state=initialState, action) => {
    switch (action.type) {
        case NAV_SEARCH_RESPONSE:
            let { count, searchTerm } = action.payload;
            let regexp = new RegExp(`^${state.searchTerm}`, 'gi')
            return count===0 && regexp.test(searchTerm) && state.total!==0 ? state : { ...action.payload, total: count }
        case NAV_SEARCH_FAILED:
            console.log("Unknown Error occured", action.payload)
            return state;
        default:
            return state;
    }
}

export default navSearchReducer;