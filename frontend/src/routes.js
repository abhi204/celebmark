import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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

import './routes.css';

import { AnimatedSwitch } from 'react-router-transition';
import { mapStyles, bounceTransition } from '_helpers/page_animate'


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
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="switch-wrapper"
                >
                    <Route publicOnly exact path='/login' component={LoginPage} noNav />
                    <Route publicOnly exact path='/signup' component={SignupPage} noNav />    
                    <Route exact path='/logout' component={LogoutPage} noNav />
                    <Route path='/' component={App}/>
                </AnimatedSwitch>
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