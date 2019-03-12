import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { MDBRow, MDBCol, MDBBtn, MDBInput, MDBAlert } from "mdbreact";
import { validators as $ } from '_helpers/field_validators';
import { asyncValidate } from '../helpers/async_validate'
import { withRouter } from 'react-router-dom';

export const fields = [
    {label: 'Username', name:'user_name', type: 'text', placeholder: '', validators:[$.maxChars(30),$.isAlphaNum ], asyncField: true },
    {label: 'Password', name:'password', type: 'password', placeholder: 'Enter Password', validators:[$.minChars(8),]},
    {label: 'Confirm Password', name:'password2', type: 'password', placeholder: 'Enter Password Again..', validators:[$.matchPassword,]},
    {label: 'Email', name:'email', type: 'email', placeholder: '', validators:[$.maxChars(30),$.isValidEmail ], asyncField: true },
]

const renderField = ({
    asyncField,
    label,
    input,
    type,
    meta: { asyncValidating, touched, error, active }
   }) => {

     return (
          <MDBInput
            label={label}
            type={type}
            className={ error && ( touched || (asyncField && active )) ? "form-control is-invalid" : "form-control is-valid" }
            {...input}
            >
            { asyncValidating ? <div>CHECKING....</div>:''}
            <div className="invalid-feedback">
                  { error }
            </div>
            </MDBInput>
            );
  }

class Form1 extends Component {
    render(){
        const { error, submitting, handleSubmit, } = this.props;
        var errorMessage = error && error._error ? error._error : "Oops... Something Went Wrong!";
        return (
            <form onSubmit={handleSubmit}>
            { error ? <MDBAlert color="danger"><center><h3>{ errorMessage }</h3></center></MDBAlert> : '' }
            <MDBRow>
                <MDBCol md="12">
                    <h3 className="font-weight-bold pl-0 my-4">
                      <center>
                        <strong>Enter Your Contact Details.</strong>
                      </center>
                    </h3>
                    {fields.map(field => (
                        <Field
                          name={field.name}
                          component={renderField}
                          type={field.type}
                          label={field.label}
                          validate={[$.required, ...(field.validators ? field.validators : [] ),]}
                          key={field.name}
                          asyncField={field.asyncField?true:false}
                        />))
                    }
                    <MDBBtn
                      color="indigo"
                      rounded
                      className="float-right"
                      type="submit"
                      disabled={ submitting }
                    >
                    next
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </form>
        );
    }
}


Form1 = reduxForm({
    form: 'signup_form', //unique name
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    pristine: false,
    fields: ['user_name', 'password', 'password2'],
    asyncBlurFields: ['email'],
    asyncChangeFields: ['user_name'],
    asyncValidate:  asyncValidate,
})(Form1);

export default withRouter(Form1);
