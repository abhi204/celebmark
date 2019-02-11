import React, { Component } from 'react';
import {
  Button,
  Form,
} from 'semantic-ui-react';


export default class LoginFormField extends Component {

    render(){
      return (
        <Form>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <br/>
          <Button color='green' fluid size='large'>
            Login
          </Button>          
        </Form>
      );
    }
}
