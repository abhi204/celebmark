import React, { Component } from 'react';
import LoginForm from './forms/login_form';
import {
  Grid,
  Header,
  Message,
  Segment,
  Icon,
  Label
} from 'semantic-ui-react';
import './login.css';

export default class LoginPage extends Component {

  render(){
    const { message } = this.props.location ? this.props.location: '';
    return (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='green' textAlign='center'>
              <center><Icon name='typo3' color='green' size='huge' /></center><br/> Sign In To CelebMark.
            </Header>
            { message ? <Message>{message}</Message> : '' }
            <Segment stacked>
              <LoginForm />
                <br/>
              <Label as='a' color='olive' tag> Forgot Password </Label>
            </Segment>
            <Message>
              New to us? <a href='./signup'>Sign Up</a> Or <a href='./'> Goto homepage</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div> 
    );
  }
}
