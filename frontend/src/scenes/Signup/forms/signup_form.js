import React from "react";
import { Field, reduxForm } from 'redux-form';
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBAlert } from "mdbreact";
import { validators as $ } from '_helpers/field_validators';
import { withRouter } from 'react-router-dom';

const renderField = ({
    label,
    input,
    type,
    meta: { touched, error, active }
   }) => {
     return (
          <MDBInput
            label={label}
            type={type}
            className={(touched && error) && !active ? "form-control is-invalid" : "form-control is-valid"}
            {...input}
            >
            <div className="invalid-feedback">
                  {error}
            </div>
            </MDBInput>
            );
  }

const fields = {
    required: [
        {label: 'Username', name:'user_name', type: 'text', placeholder: '', validators:[$.maxChars(30),$.isAlphaNum ]},
        {label: 'Password', name:'password', type: 'password', placeholder: 'Enter Password', validators:[$.minChars(8),]},
        {label: 'Confirm Password', name:'password2', type: 'password', placeholder: 'Enter Password Again..', validators:[$.matchPassword,]},
    ],
    personal: [
        {label: 'First Name', name:'first_name', type: 'text', placeholder: '', validators:[$.maxChars(30),$.isAlpha ]},
        {label: 'Last Name', name:'last_name', type: 'text', placeholder: '', validators:[$.maxChars(30),$.isAlpha ]},
        {label: 'Email', name:'email', type: 'email', placeholder: '', validators:[$.maxChars(30),$.isValidEmail ]},
        {label: 'Contact Number', name:'mobile', type: 'text', placeholder: '', validators:[$.isMobileNumber,]},
    ]
}

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.allFieldsValid = this.allFieldsValid.bind(this);
        this.state = { fields: 0 , validated: 0 };
    }

    allFieldsValid(fieldGroup){
        let invalidFields=fieldGroup.filter( field => {
                return document.querySelector(`input.is-invalid[name=${field.name}]`) || document.querySelector(`input[name=${field.name}]`).value === ""
        })
        return invalidFields.length === 0
    }

    render() {
        var { stepperState, handleNextPrevClick } = this.props;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        const { error, pristine, submitting, handleSubmit, } = this.props;
        var errorMessage = error && error._error ? error._error : "Oops... Something Went Wrong!";
        return (
            <form onSubmit={handleSubmit}>
            { error ? <MDBAlert color="danger"><center><h3>{ errorMessage }</h3></center></MDBAlert> : '' }
                <MDBRow>
                <MDBCol md="12" style={{display: (stepperState.formActivePanel1 !== 1?"none":"")}}>
                    <h3 className="font-weight-bold pl-0 my-4">
                    <strong>MDBStep 1</strong>
                    </h3>
                    {fields.personal.map(field => (
                        <Field
                          name={field.name}
                          component={renderField}
                          type={field.type}
                          label={field.label}
                          validate={[$.required, ...(field.validators ? field.validators : [] ),]}
                          key={field.name}
                        />
                    ))}
                    <MDBBtn
                      color="indigo"
                      rounded
                      className="float-right"
                      onClick={(e)=>{ if(this.allFieldsValid(fields.personal)) {handleNextPrevClick(1)(2)(e)} }}
                      disabled={ submitting || pristine || error }
                    >
                    next
                    </MDBBtn>
                </MDBCol>

                <MDBCol md="12" style={{display: (stepperState.formActivePanel1 !== 2?"none":"")}}>
                    <h3 className="font-weight-bold pl-0 my-4">
                    <strong>MDBStep 2</strong>
                    </h3>
                    {fields.required.map(field => (
                        <Field
                          name={field.name}
                          component={renderField}
                          type={field.type}
                          label={field.label}
                          validate={[$.required, ...(field.validators ? field.validators : [] ),]}
                          key={field.name}
                        />
                    ))}
                    <br/>
                    <hr/>
                    <div className="mb-4">
                        By clicking Signup, you agree to our <strong>Terms</strong> and that you have read our <strong>Data use Policy</strong>, including our <strong>Cookie Use</strong>
                    </div>
                    <MDBBtn color="indigo" rounded className="float-left" onClick={(e)=>{ if(this.allFieldsValid(fields.required)) {handleNextPrevClick(1)(1)(e)} }}>
                    previous
                    </MDBBtn>
                    <MDBBtn color="green" rounded className="float-right" type="submit" disabled={ submitting || pristine || error } >
                    Signup
                    </MDBBtn>
                </MDBCol>
                </MDBRow>
            </form>
        );
    };
}

export const fieldNames = [
    ...fields.required.map(field => field.name),
    ...fields.personal.map(field => field.name),
    ]

SignupForm = reduxForm({
    form: 'user_signup_form', //unique name
    pristine: false,
    fields: fieldNames,
    onSubmit: async (values, dispatch, props) => { console.log("SUBMIT") },
    onSubmitSuccess: (result, dispatch, props) => { console.log("SUBMIT SUCCESSFUL") }
})(SignupForm);

export default withRouter(SignupForm);