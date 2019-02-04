import React, { Component } from 'react';
import {history} from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';

//Import Pages/Components Here
import App from './App/App';

class Routes extends Component{
    render(){
        return(
            <ConnectedRouter history={history}>
                <div>
                <Route path='/' component={App} />
                    {/* Component/Page Routing Here */}
                </div>
            </ConnectedRouter>
        );
    }
}

export default Routes