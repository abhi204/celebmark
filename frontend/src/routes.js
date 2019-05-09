import React, { Component } from 'react';
import { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import Route from '_containers/custom_route.js'
import { connect } from 'react-redux';
import { MDBSpinner, MDBRow, MDBCol } from 'mdbreact';

// Import Pages/Components Here
// Homepage Component Already imported in App.js
import App from './App/App';
import LoginPage from './scenes/Login/login';
import SignupPage from './scenes/Signup/signup';
import LogoutPage from './scenes/Logout/logout';
import { checkLogin } from './_actions/auth';
import Footer from '_components/Footer/footer';
import { LOGIN_IN_PROGRESS } from './_consts/auth';

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
            return <div>
                <MDBRow className="mt-5 pt-5">
                    <MDBCol size="5"></MDBCol>
                    <MDBCol size="2" className="mt-5 pt-5">Loading..<br/><MDBSpinner green /></MDBCol>
                    <MDBCol size="5"></MDBCol>
                </MDBRow>
        </div>
        // Initial actions dispatched here
        return (
            <div>
                <ConnectedRouter history={history}>
                    {/* Pages Routed here, Components Routed inside App.js */}
                    <Switch className="switch-wrapper">
                        <Route publicOnly exact path='/login' component={LoginPage} noNav />
                        <Route publicOnly exact path='/signup' component={SignupPage} noNav />    
                        <Route exact path='/logout' component={LogoutPage} noNav />
                        <Route path='/' component={App}/>
                    </Switch>
                </ConnectedRouter>
                <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);