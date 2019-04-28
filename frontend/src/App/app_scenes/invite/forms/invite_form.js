import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { validators as $ } from '_helpers/field_validators';
import { getYMDFormat } from "_helpers/date_convertor";
import { inviteFormSubmit } from '../actions/invite_submit';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBDatePicker } from 'mdbreact';

const renderField = ({
  outline,
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
        outline={outline}
        >
        <div className="invalid-feedback">
            {error}
        </div>
        </MDBInput>
    );
}

 class InviteForm extends Component {
  render(){
  const { submitting, handleSubmit } = this.props;
  return (
    <MDBContainer>
      <MDBRow className="mt-5">
        <MDBCol lg='3' xl='3' className="ml-5"/>
        <MDBCol md="12" xs='12' sm='11' lg='5' xl='5' >
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                    <strong>Invite</strong>
                </h3>
              </div>
              <form className="needs-validation" onSubmit={handleSubmit} noValidate>
              <Field
                  label="Celeb ID"
                  name="celeb"
                  component={renderField}
                  type="text"
                  validate={[$.required,]}
                />
                <Field
                  label="Type of Event"
                  name="event_type"
                  component={renderField}
                  type="text"
                  validate={[$.required,]}
                />
                <Field
                  label="Role of Celeb"
                  name="role"
                  component={renderField}
                  type="text"
                  validate={[$.required,]}
                />
                Event Date:
                <MDBDatePicker
                  getValue={ (value) => { this.props.change("event_date", getYMDFormat(value) ) } }
                  disablePast
                  emptyLabel="Event Date"
                  clearLabel="Event Date"
                />
                <Field
                  name="event_date"
                  component={renderField}
                  type="text"
                  input={{ style: {display: 'none'} }}
                  validate={[$.required,]}
                />
                <Field
                  label="Venue of event"
                  name="venue"
                  component={renderField}
                  type="textarea"
                  validate={[$.required,]}
                  outline
                />
                <Field
                  label="Event Description"
                  name="description"
                  component={renderField}
                  type="textarea"
                  outline
                />
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  size="lg"
                  className="btn-block z-depth-1a"
                  disabled={submitting}
                >
                  Send Invite
                </MDBBtn>
              </div>
              </form>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg='3' xl='3' className="mr-5"/>
      </MDBRow>
    </MDBContainer>
  );
};
}

export const inviteFields = ['user', 'celeb', 'role', 'event_date', 'venue', 'description'] ;

InviteForm = reduxForm({
  form: 'invite_form',
  fields: inviteFields,
  onSubmit: inviteFormSubmit,
})(InviteForm)

export default withRouter(InviteForm);
