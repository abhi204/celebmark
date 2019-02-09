import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createRootReducer from './_reducers/index';
import { createBrowserHistory } from 'history';

// Import middlewares
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk';
import { apiMiddleware } from './_middleware/api_middleware';


export const history = createBrowserHistory();

// Add Middlewares Here
const middlewares = [
  routerMiddleware(history),
  thunk,
  apiMiddleware,
]


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = composeEnhancers(
  applyMiddleware(...middlewares),
)(createStore)

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['router','form'], //mention state names you wish to persist
    // blacklist: [] add the state names here which you don't wish to persist
};

const combinedReducer = persistReducer(persistConfig, createRootReducer(history))

const createAppStore = () => {
  let store = configureStore(combinedReducer)
  let persistor = persistStore(store)

  return { persistor, store }
}

export default createAppStore