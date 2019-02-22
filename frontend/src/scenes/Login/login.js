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

class LoginPage extends Component {

  render(){
    const { location } = this.props;
    const message = location.state ? location.state.message : null;
    return (
      <MDBContainer className="h-100">
        <MDBRow>
          <MDBCol size="1"/>
          <MDBCol size="10">
          <div style={{height: "4em"}} className="mx-4">
            { message ? <MDBAlert color={location.state.warn ? 'danger': 'success' }><center>{message}</center></MDBAlert> : '' }
          </div>
            <LoginForm />
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