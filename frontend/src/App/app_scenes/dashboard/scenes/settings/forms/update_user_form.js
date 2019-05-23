import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { userUpdateSubmit } from '../actions/update_user_submit';
import { MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';

export const userUpdateFields = ['first_name', 'last_name', 'email', 'mobile']


const renderField = ({ meta: { touched, error }, ...rest }) => {
    return (
      <MDBInput
        label={rest.label}
        type={rest.type}
        className={touched && error ? "form-control is-invalid" : "form-control is-valid"}
        hint={String(rest.hint) || ''}
        {...rest.input}
        >
        <div className="invalid-feedback">
            {error}
        </div>
        </MDBInput>
    );
}

 class UpdateUserForm extends Component {
  render(){
  let { submitting, handleSubmit } = this.props;
  let {details} = this.props.user;
  return (
    <form className="needs-validation" onSubmit={handleSubmit} noValidate>
    <Field
        label="First Name"
        name="first_name"
        hint={details.first_name}
        component={renderField}
        type="text"
    />
    <Field
        label="Last Name"
        name="last_name"
        hint={details.last_name}
        component={renderField}
        type="text"
    />
    <Field
        label="Email"
        name="email"
        hint={details.email}
        component={renderField}
        type="text"
    />
    <Field
        label="Mobile"
        name="mobile"
        component={renderField}
        hint={details.mobile}
        type="text"
    />
    <div className="text-center py-4 mt-3">
        <MDBBtn
          rounded
          color="cyan"
          type="submit"
          disabled={submitting}
        >
            Update Details
        </MDBBtn>
    </div>
    </form>
  );
};
}


UpdateUserForm = reduxForm({
  form: 'userDetailsForm',
  fields: userUpdateFields,
  onSubmit: userUpdateSubmit,
})(UpdateUserForm)

let mapStateToProps = (state) => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps)(UpdateUserForm));
