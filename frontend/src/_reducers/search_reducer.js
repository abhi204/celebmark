import { 
    SEARCH_RESPONSE,
    SEARCH_FAILED,
    SEARCH_LOADING,
    SEARCH_NEXT_RESPONSE,
    SEARCH_NEXT_FAILED,
    SEARCH_NEXT_LOADING,
    SEARCH_RESET,
} from "../_consts/types";

/*
 total -> total number of matching queries
 next / previous  -> next/previous page number
 results -> list of celebs
*/
let initialState = { 
    searchTerm: '',
    total: 0,
    next: null,
    previous: null,
    results: [],
    loading: false,
    loadingNext: false,
};


let SearchReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEARCH_LOADING:
            return {...state, loading: true}
        case SEARCH_RESPONSE:
            return { ...action.payload, total: action.payload.count,  loading: false }
        case SEARCH_FAILED:
            console.log("Unknown Error occured", action.payload)
            return {...state, loading: false};
        case SEARCH_NEXT_LOADING:
            return { ...state, loadingNext: true }
        case SEARCH_NEXT_RESPONSE:
            state.results.push( ...action.payload.results )
            return { ...action.payload , results: state.results, loadingNext: false }
        case SEARCH_NEXT_FAILED:
            window.alert("Unknown Error occured")
            return {...state, loadingNext: false};
        case SEARCH_RESET:
            return initialState;
        default:
            return state;
    }
}

export default SearchReducer;