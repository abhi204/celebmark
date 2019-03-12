import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { MDBBtn, MDBRow, MDBCol, MDBInput, MDBAlert } from "mdbreact";
import { validators as $ } from '_helpers/field_validators';
import { asyncValidate } from '../helpers/async_validate'
import { withRouter } from 'react-router-dom';

export const fields = [
    {label: 'First Name', name:'first_name', type: 'text', placeholder: '', validators:[$.maxChars(30),$.isAlpha ]},
    {label: 'Last Name', name:'last_name', type: 'text', placeholder: '', validators:[$.maxChars(30),$.isAlpha ]},
    {label: 'Contact Number', name:'mobile', type: 'text', placeholder: '', validators:[$.isMobileNumber,], asyncField: true},
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

class Form2 extends Component {
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
                      <strong>Enter Your Basic Details.</strong>
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
                    <br/>
                    {this.props.children}
                    <MDBBtn color="indigo" rounded className="float-left" onClick={this.props.gotoPrev}>
                      previous
                    </MDBBtn>
                    <MDBBtn color="default" rounded className="float-right" type="submit" disabled={ error || submitting }>
                      Register
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </form>
        );
    }
}


Form2 = reduxForm({
    form: 'signup_form', //unique name
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    pristine: false,
    fields: ['first_name', 'last_name'],
    asyncBlurFields: ['mobile'],
    asyncValidate:  asyncValidate,
})(Form2);

export default withRouter(Form2);
