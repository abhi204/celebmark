import React from "react";
import Form1 from '../forms/form1';
import Form2 from "../forms/form2";
import { MDBContainer, MDBRow, MDBCol, MDBStepper, MDBStep, MDBBtn, MDBCard, MDBCardBody,} from "mdbreact";
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

                <MDBRow>
                  {this.state.formActivePanel1 === 1 && (
                  <MDBCol md="12">
                    <h3 className="font-weight-bold pl-0 my-4">
                      <strong>MDBStep 1</strong>
                    </h3>
                    <Form1 onSubmit={this.handleNextPrevClick(1)(2)} />
                  </MDBCol>
                  )}
                  {this.state.formActivePanel1 === 2 && (
                  <MDBCol md="12">
                    <h3 className="font-weight-bold pl-0 my-4">
                      <strong>MDBStep 2</strong>
                    </h3>
                    <Form2 onSubmit={submitForm}  gotoPrev={this.handleNextPrevClick(1)(1)} onSubmitSuccess={submitOK}>
                    <hr/>
                     <div className="mb-4">
                         By clicking Signup, you agree to our <strong>Terms</strong> and that you have read our <strong>Data use Policy</strong>, including our <strong>Cookie Use</strong>
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