import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createAppStore from './configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const { persistor, store } = createAppStore();

window.store = store

ReactDOM.render(
    <PersistGate persistor={persistor}>
    <Provider store={store}>
        <Routes/>
    </Provider>
    </PersistGate>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
