import React, { Component } from 'react';
import { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import Route from '_containers/custom_route.js'

// Import Pages/Components Here
// Homepage Component Already imported in App.js
import App from './App/App';
import LoginPage from './scenes/Login/login';
import SignupPage from './scenes/Signup/signup';
import LogoutPage from './scenes/Logout/logout';

class Routes extends Component{
    render(){
        return(
            <ConnectedRouter history={history}>
            <div>
                {/* Pages Routed here, Components Routed inside App.js */}
                <Switch>
                    <Route publicOnly exact path='/login' component={LoginPage} />
                    <Route publicOnly exact path='/signup' component={SignupPage} />    
                    <Route private exact path='/logout' component={LogoutPage} />
                    <Route path='/' component={App} />
                </Switch>
            </div>
            </ConnectedRouter>
        );
    }
}

export default Routes;