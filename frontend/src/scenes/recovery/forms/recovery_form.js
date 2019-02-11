import React, { Component } from 'react';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon,
  Input,
  Label

} from 'semantic-ui-react';


export default class RecoveryFormField extends Component {

    render(){
        return(

          <Form>
          <Form.Input
            fluid icon='at'
            iconPosition='left'
            type ='email'
            placeholder='Enter Your Registered Email.'
           />
          <Form.Input
            fluid
            icon='phone'
            iconPosition='left'
            placeholder='Enter Your Registered Phone.'
            type='text'
          /><br/>
          <Button color='green' fluid size='large'>
            Yes, that's my credentials.
          </Button>
          </Form>




        );
    }
}
