import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { Link, Redirect } from 'react-router-dom';

class LoginPage extends Component {

  render(){
    const { location } = this.props;
    //Below check becomes redundant on creating public only routes
    if(this.props.user.loggedIn)
      return <Redirect to='/' />

    return (
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
  }
}

function mapStateToProps(state){
  return {user: state.user}
}

export default connect(mapStateToProps,)(LoginPage);