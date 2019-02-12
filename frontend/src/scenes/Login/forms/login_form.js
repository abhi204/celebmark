import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import renderField from '_components/form_field';
import { validators as $ } from '_helpers/field_validators';
import { loginFormSubmit, loginSuccesful, loginFailed } from '../actions/login_submit';
import {
  Button,
  Form,                                                                                                                           
} from 'semantic-ui-react';

class LoginForm extends Component {

    render(){
      const { submitting, handleSubmit } = this.props;
      return (
        <Form onSubmit={handleSubmit} >
          {/* <Form.Field fluid icon='user' iconPosition='left' placeholder='User Name' > */}
          <Form.Field>
            <Field 
            name="user_name"
            component={renderField}
            type="text"
            validate={[$.required,]}
            /> 
          </Form.Field>
          {/* <Form.Field fluid icon='lock' iconPosition='left' placeholder='Password' type='password'> */}
          <Form.Field>
          <Field 
            name="password"
            component={renderField}
            type="password"
            validate={[$.required,]}
            />
          </Form.Field>
          <br/>
          <Button type="submit" color='green' fluid size='large' disabled={ submitting }>
            Login
          </Button>          
        </Form>
      );
    }
}                                                                                                                                                                                                                                                                                                                                                                                   

LoginForm = reduxForm({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
  form: 'login_form',
  pristine: false,
  fields: ['user_name', 'password'],
  onSubmit: loginFormSubmit,
  onSubmitFail: loginFailed,
  onSubmitSuccess: loginSuccesful,
})(LoginForm);

export default withRouter(LoginForm);