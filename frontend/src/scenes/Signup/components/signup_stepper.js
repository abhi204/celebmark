import React from "react";
import SignupForm from '../forms/signup_form';
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBCard, MDBCardBody,} from "mdbreact";

class SignupStepper extends React.Component {

state = {
  formActivePanel1: 1,
  formActivePanel1Changed: false,
}

swapFormActive = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleNextPrevClick = (a) => (param) => (e) => {
  this.setState({
    ['formActivePanel' + a]: param,
    ['formActivePanel' + a + 'Changed']: true
  });
}

handleSubmission = () => {
  alert('Form submitted!');
}

calculateAutofocus = (a) => {
  if (this.state['formActivePanel' + a + 'Changed']) {
    return true
  }
}

render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol xl="6" lg="7" md="10">
          <MDBCard>
            <MDBCardBody>
                <h2 className="text-center font-weight-bold pt-4 pb-5">
                    <strong>Register at CelebMark</strong>
                </h2>
                <MDBStepper form>
                    <MDBStep form>
                      <a href="#formstep1">
                          <MDBBtn color={ this.state.formActivePanel1===1 ? "indigo" : "default" } circle>
                          1
                          </MDBBtn>
                      </a>
                      <p>{/* Name step 1 here */}</p>
                    </MDBStep>
                    <MDBStep form>
                      <a href="#formstep2" >
                          <MDBBtn color={ this.state.formActivePanel1===2 ? "indigo" : "default" } circle>
                          2
                          </MDBBtn>
                      </a>
                      <p>{/* Name step 2 here */}</p>
                    </MDBStep>
                </MDBStepper>
                <SignupForm
                  stepperState = {this.state}
                  calculateAutofocus = {this.calculateAutofocus}
                  handleNextPrevClick = {this.handleNextPrevClick}
                />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  };
}

export default SignupStepper;