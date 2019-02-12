import React from 'react';
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
import { Link } from 'react-router-dom';


var LoginPage = ({ location }) => (
      <div className='login-form'>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='green' textAlign='center'>
              <center><Icon name='typo3' color='green' size='huge' /></center><br/> Sign In To CelebMark.
            </Header>
            { location.state && location.state.message ? <Message>{location.state.message}</Message> : '' }
            <Segment stacked>
              <LoginForm />
                <br/>
              <Label as='a' color='olive' tag> Forgot Password </Label>
            </Segment>
            <Message>
              New to us? <Link to='/signup'>Sign Up</Link> Or <Link to="/"> Goto homepage</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div> 
    );

export default LoginPage;