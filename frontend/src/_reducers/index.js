import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user_reducer';
import searchReducer from './search_reducer';
import { reducer as formReducer } from 'redux-form';


export default (history) => combineReducers({
    router: connectRouter(history), //saves the router state
    form: formReducer, //Redux-Form
    user: userReducer,
    search: searchReducer,
})
