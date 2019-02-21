import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter, MDBStepper, MDBStep } from 'mdbreact';

class SignUp  extends React.Component {

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
        <MDBCol></MDBCol>
        <MDBCol md="6" xs='4' sm='9' lg='5' xl='5'>
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <MDBIcon fab icon="accusoft" size="5x"/>
                  <h3 className="dark-grey-text mb-5">
                    <strong>Signup</strong>
                  </h3>
              </div>

              <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2"><strong>Registration form</strong></h2>
                    <MDBStepper icon>
                      <MDBStep far icon="folder-open" stepName="Basic Information" onClick={this.swapFormActive(1)(1)}></MDBStep>
                      <MDBStep icon="pencil-alt" stepName="Personal Data" onClick={this.swapFormActive(1)(2)}></MDBStep>
                      <MDBStep icon="photo" stepName="Terms and Conditions" onClick={this.swapFormActive(1)(3)}></MDBStep>
                      <MDBStep icon="check" stepName="Finish" onClick={this.swapFormActive(1)(4)}></MDBStep>
                    </MDBStepper>

                    <form>
                      <MDBRow>
                        {this.state.formActivePanel1 === 1 &&
                        (<MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4">
                            <strong>Basic Information</strong></h3>
                          <MDBInput label="Email" className="mt-4" autoFocus={this.calculateAutofocus(1)} />
                          <MDBInput label="Username" className="mt-4" />
                          <MDBInput label="Password" className="mt-4" />
                          <MDBInput label="Repeat Password" className="mt-4" />
                          <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(2)}>next</MDBBtn>
                        </MDBCol>)}

                        {this.state.formActivePanel1 === 2 &&
                        (<MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4"><strong>Personal Data</strong></h3>
                          <MDBInput label="First Name" className="mt-3" autoFocus={this.calculateAutofocus(1)} />
                          <MDBInput label="Second Name" className="mt-3" />
                          <MDBInput label="Surname" className="mt-3" />
                          <MDBInput label="Address" type="textarea" rows="2" />
                          <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(1)}>previous</MDBBtn>
                          <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(3)}>next</MDBBtn>
                        </MDBCol>)}

                        {this.state.formActivePanel1 === 3 &&
                        (<MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4"><strong>Terms and conditions</strong></h3>
                          <MDBInput label="I agreee to the terms and conditions" type="checkbox" id="checkbox" autoFocus={this.calculateAutofocus(1)} />
                          <MDBInput label="I want to receive newsletter" type="checkbox" id="checkbox2" />
                          <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(2)}>previous</MDBBtn>
                          <MDBBtn color="mdb-color" rounded className="float-right" onClick={this.handleNextPrevClick(1)(4)}>next</MDBBtn>
                        </MDBCol>)}

                        {this.state.formActivePanel1 === 4 &&
                        (<MDBCol md="12">
                          <h3 className="font-weight-bold pl-0 my-4"><strong>Finish</strong></h3>
                          <h2 className="text-center font-weight-bold my-4">Registration completed!</h2>
                          <MDBBtn color="mdb-color" rounded className="float-left" onClick={this.handleNextPrevClick(1)(3)}>previous</MDBBtn>
                          <MDBBtn color="success" rounded className="float-right" onClick={this.handleSubmission}>submit</MDBBtn>
                        </MDBCol>)}
                      </MDBRow>
                    </form>


            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already Member?
                <a href="#!" className="blue-text ml-1">

                Login
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol></MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}

export default SignUp;
