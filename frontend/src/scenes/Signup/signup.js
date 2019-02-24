import React, { Component } from 'react';
import SignupStepper from './components/signup_stepper';
import {
  MDBContainer,
} from 'mdbreact';


class SignupPage extends Component {
  render() {
    return (
      <MDBContainer>
        <SignupStepper />
      </MDBContainer>
      );
  }
}
export default SignupPage;
