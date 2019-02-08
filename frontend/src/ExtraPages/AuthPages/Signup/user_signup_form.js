import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../../_components/form_field';
import {
    required,
    maxChars,
    minChars,
    isMobileNumber,
    setPassword,
    matchPassword,
    isAlpha,
    isAlphaNum
} from '../../../_helpers/field_validators';
import {
    Form,
    Button,
    Checkbox,
} from 'semantic-ui-react';

const fields = [
    {label: 'First Name', name:'first_name', type: 'text', placeholder: '', validators:[maxChars(30),isAlpha ]},
    {label: 'Last Name', name:'last_name', type: 'text', placeholder: '', validators:[maxChars(30),isAlpha ]},
    {label: 'Username', name:'user_name', type: 'text', placeholder: '', validators:[maxChars(30),isAlphaNum ]},
    {label: 'Email', name:'email', type: 'email', placeholder: '', validators:[maxChars(30), ]},
    {label: 'Contact Number', name:'mobile', type: 'text', placeholder: '', validators:[isMobileNumber,]},
    {label: 'Password', name:'password', type: 'password', placeholder: 'Enter Password', validators:[minChars(8),setPassword]},
    {label: 'Confirm Password', name:'password2', type: 'password', placeholder: 'Enter Password Again..', validators:[matchPassword,]},
]

class UserSignupForm extends Component {
    constructor(props){
        super(props);
        this.doSubmit = this.doSubmit.bind(this); 
        this.readTerms = this.readTerms.bind(this);
        this.state = { acceptTerms: false };
    }
    
    render(){
        const { pristine, submitting, invalid } = this.props;
        return (
            <Form onSubmit={ this.doSubmit }>
                {
                    fields.map(field => (
                        <Form.Group widths='equal' key={field.name}>
                            <Form.Field>
                                <Field
                                name={field.name}
                                component={renderField}
                                type={field.type}
                                placeholder={field.label}
                                validate={[required, ...(field.validators ? field.validators : [] ),]}
                                />
                            </Form.Field>
                        </Form.Group>
                    ))
                }
                <Form.Group>
                <Checkbox
                    label='I agree to the Terms and Conditions'
                    name="agreeToTerms"
                    onChange={ this.readTerms }
                    checked={this.state.acceptTerms}
                 />
                </Form.Group>
                <Button type='submit' color='green' disabled={ submitting || pristine || invalid  || !this.state.acceptTerms } >Signup</Button>
            </Form>
        );
    }

    readTerms(event) {
        this.setState({acceptTerms: (this.state.acceptTerms?false:true)})
    }

    doSubmit(values){
        console.log(values);
    }
    
}

UserSignupForm = reduxForm({
    form: 'user_signup_form', //unique name
    pristine: false,
    fields: fields.map(field => (field.name))
})(UserSignupForm);

export default UserSignupForm;