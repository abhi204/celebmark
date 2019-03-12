import React from "react";
import Form1 from '../forms/form1';
import Form2 from "../forms/form2";
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBCard, MDBCardBody, MDBIcon} from "mdbreact";
import { submitForm, submitOK } from "../helpers/submit_form";

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
      <MDBRow className="mt-5">
        <MDBCol xl="5" lg="7" md="10" className="mb-4 ml-5">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon fab icon="teamspeak" size="6x"/>
              </div>
                <h2 className="text-center font-weight-bold pt-4 pb-5">
                    <strong>Register At CelebMark</strong>
                </h2>
                <MDBStepper form>
                    <MDBStep form>
                      <a href="#formstep1">
                          <MDBBtn color={ this.state.formActivePanel1===1 ? "indigo" : "default" } circle>
                          1
                          </MDBBtn>
                      </a>
                      <p>Contact</p>
                    </MDBStep>
                    <MDBStep form>
                      <a href="#formstep2" >
                          <MDBBtn color={ this.state.formActivePanel1===2 ? "indigo" : "default" } circle>
                          2
                          </MDBBtn>
                      </a>
                      <p>Basic</p>
                    </MDBStep>
                </MDBStepper>

                <MDBRow>
                  {this.state.formActivePanel1 === 1 && (
                  <MDBCol md="12">
                    <Form1 onSubmit={this.handleNextPrevClick(1)(2)} />
                  </MDBCol>
                  )}
                  {this.state.formActivePanel1 === 2 && (
                  <MDBCol md="12">
                    <Form2 onSubmit={submitForm}  gotoPrev={this.handleNextPrevClick(1)(1)} onSubmitSuccess={submitOK}>
                    <hr/>
                  <div className="pl-4 pr-4 mb-4 text-center">
                         By clicking Signup, you agree to our <strong>Terms</strong> and that you have read our <strong>Data Use Policy</strong>, including our <strong>Cookie Use Policy.</strong>
                     </div>
                    </Form2>
                  </MDBCol>
                  )}
                </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  };
}

export default SignupStepper;
