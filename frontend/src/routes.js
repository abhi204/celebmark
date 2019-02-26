import React, { Component } from 'react';
import { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import Route from '_containers/custom_route.js'
import { connect } from 'react-redux';

// Import Pages/Components Here
// Homepage Component Already imported in App.js
import App from './App/App';
import LoginPage from './scenes/Login/login';
import SignupPage from './scenes/Signup/signup';
import LogoutPage from './scenes/Logout/logout';
import { checkLogin } from './_actions/auth';
import Footer from '_components/Footer/footer';

class Routes extends Component{
    constructor(props){
        super(props);
        this.state = {loading: true};
    }

    componentDidMount(){
        this.props.checkLogin().then(data => this.setState({loading: false}))
    }

    render(){
        if(this.state.loading)
            return <div>LOADING....</div>
        // Initial actions dispatched here
        return(
            <ConnectedRouter history={history}>
            <div>
                {/* Pages Routed here, Components Routed inside App.js */}
                <Switch >
                    <Route publicOnly exact path='/login' component={LoginPage} />
                    <Route publicOnly exact path='/signup' component={SignupPage} />    
                    <Route exact path='/logout' component={LogoutPage} />
                    <Route path='/' component={App} />
                </Switch>
                <Footer/>
            </div>
            </ConnectedRouter>
        );
    }
}

const mapDispatchToProps = {
    checkLogin
}

export default connect(null,mapDispatchToProps)(Routes);