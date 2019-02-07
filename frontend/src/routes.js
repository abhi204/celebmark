import React, { Component } from 'react';
import {history} from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

// Import Pages/Components Here
// Homepage Component Already imported in App.js
import App from './App/App';
import LoginPage from './ExtraPages/AuthPages/login';
import SignupPage from './ExtraPages/AuthPages/signup';

class Routes extends Component{
    render(){
        return(
            <ConnectedRouter history={history}>
            <div>
                {/* Pages Routed here, Components Routed inside App.js */}
                <Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Route path='/signup' component={SignupPage} />    
                    <Route path='/' component={App} />
                </Switch>
            </div>
            </ConnectedRouter>
        );
    }
}

export default Routes;