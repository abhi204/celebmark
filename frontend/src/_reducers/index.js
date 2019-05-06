import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import navSearchReducer from './nav_search_reducer';
import SearchReducer from './search_reducer';
import profileReducer from './profile_reducer';
import bookmarkReducer from './bookmark_reducer';


export default (history) => combineReducers({
    router: connectRouter(history), //saves the router state
    form: formReducer, //Redux-Form
    user: userReducer,
    navSearch: navSearchReducer, // for navbar search
    search: SearchReducer, //for search page
    profile: profileReducer, // for celeb profile page
    bookmark: bookmarkReducer,
})
