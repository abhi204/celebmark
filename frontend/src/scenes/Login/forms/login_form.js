import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import { validators as $ } from '_helpers/field_validators';
import { loginFormSubmit } from '../actions/login_submit';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';

const renderField = ({
  label,
  input,
  type,
  meta: { touched, error }
 }) => {
    return (
      <MDBInput
        label={label}
        type={type}
        className={touched && error ? "form-control is-invalid" : "form-control is-valid"}
        {...input}
        >
        <div className="invalid-feedback">
              {error}
        </div>
        </MDBInput>
    );
}

 class LoginForm extends Component {
  render(){
  const { submitting, handleSubmit } = this.props;
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="mr-5"/>
        <MDBCol md="7" xs='6' sm='9' lg='5' xl='5'>
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <MDBIcon fab icon="teamspeak" size="6x"/>
                <h3 className="dark-grey-text mb-5">
                    <center>
                      <strong><br/>Login</strong>
                    </center>
                </h3>
              </div>
              <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <Field
                  label="Username"
                  name="user_name"
                  component={renderField}
                  type="text"
                  outline
                  validate={[$.required,]}
                />
                <Field
                  name="password"
                  label="Password"
                  component={renderField}
                  type="password"
                  validate={[$.required,]}
                />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                <a href="#!" className="blue-text ml-1">
                Forgot Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  size="lg"
                  className="btn-block z-depth-1a"
                  disabled={submitting}
                >
                  Sign in
                </MDBBtn>
              </div>
              </form>

            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <Link to="/signup" className="blue-text ml-1">
                  Sign Up
                </Link>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol/>
      </MDBRow>
    </MDBContainer>
  );
};
}

LoginForm = reduxForm({
  form: 'login_form',
  fields: ['user_name', 'password'],
  onSubmit: loginFormSubmit,
})(LoginForm)

export default withRouter(LoginForm);
