import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import loggedInReducer from './logged_in_reducer';

export default (history) => combineReducers({
    router: connectRouter(history), //saves the router state
    loggedIn: loggedInReducer,
})
