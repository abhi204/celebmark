import React, { Component } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import Route from '_containers/custom_route.js'
import { connect } from 'react-redux';
import { MDBSpinner } from 'mdbreact';

// Import Pages/Components Here
// Homepage Component Already imported in App.js
import App from './App/App';
import LoginPage from './scenes/Login/login';
import SignupPage from './scenes/Signup/signup';
import LogoutPage from './scenes/Logout/logout';
import { checkLogin } from './_actions/auth';
import { LOGIN_IN_PROGRESS } from './_consts/auth';
import Error404Page from '_components/404_page/error404page';

import './routes.css';


class Routes extends Component{
    constructor(props){
        super(props);
        this.state = {loading: true};
    }

    componentDidMount(){
       this.props.checkLogin()
    }

    componentDidUpdate(){
        if(this.props.user.loggedIn !== LOGIN_IN_PROGRESS && this.state.loading )
            this.setState({loading: false})
    }

    render(){
        if(this.state.loading)
            return (
                <div>
                    <div 
                        className="d-flex 
                        flex-column
                        justify-content-center
                        align-items-center 
                        h-100"
                    >
                        Loading..
                        <br/>
                        <MDBSpinner green />
                    </div>
                </div>
            )
        // Initial actions dispatched here
        return (
            <div>
                {/* Pages Routed here, Components Routed inside App.js */}
                <Switch>
                    <Route publicOnly exact path='/login' component={LoginPage} />
                    <Route publicOnly exact path='/signup' component={SignupPage} />    
                    <Route exact path='/logout' component={LogoutPage} />
                    <Route exact path='/404' component={Error404Page} />
                    <Route path='/' component={App}/>
                </Switch>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    user: state.user,
})

const mapDispatchToProps = {
    checkLogin
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));