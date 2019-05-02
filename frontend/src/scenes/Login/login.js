import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAlert,
} from 'mdbreact';
import './login.css';
import LoginForm from './forms/login_form';
import { LOGIN_RETRY } from '_consts/auth';

class LoginPage extends Component {

  render(){
    const { location, user } = this.props;
    let state = location && location.state ? location.state : {}; 
    let message = state.message;
    let warnColour = state.warn ? 'danger' : 'success';
    if(user.loginStatus === LOGIN_RETRY){
      message = "Invalid Username or Password";
      warnColour = 'danger';
    }

    return (
      <MDBContainer className="h-100">
        <MDBRow>
          <MDBCol size="10" className="mt-1 ml-5">
            <div style={{height: "4em"}} className="mx-4">
              <center>
              { message ? <MDBAlert color={warnColour}><center>{message}</center></MDBAlert> : '' }
              </center>
            </div>
              <LoginForm/>
            </MDBCol>
          <MDBCol size="1"/>
        </MDBRow>
      </MDBContainer>
    );
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps,)(LoginPage);
