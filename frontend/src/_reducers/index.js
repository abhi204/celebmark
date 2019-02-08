import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loggedInReducer from './logged_in_reducer';
import { reducer as formReducer } from 'redux-form';

export default (history) => combineReducers({
    router: connectRouter(history), //saves the router state
    form: formReducer, //Redux-Form
    loggedIn: loggedInReducer,
})
