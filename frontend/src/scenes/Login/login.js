import React, { Component } from 'react'
import { connect } from 'react-redux';
import LoginFormField from './forms/login_form';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon,
  Modal,
  Input,
  Label
} from 'semantic-ui-react'

class LoginForm extends Component {

  render(){

  return (
    <div className='login-form'>
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='green' textAlign='center'>
            <center><Icon name='typo3' color='green' size='huge' /></center><br/> Sign In To CelebMark.
          </Header>



          <Segment stacked>
            <LoginFormField />

              <br/>
                <Label as='a' color='olive' tag> Forgot Password </Label>
                </Segment>


          <Message>
            New to us? <a href='./signup'>Sign Up</a> Or <a href='./'> Home</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div> );
  }
}

function mapStateToProps(state){
  return { state };
}

export default connect(mapStateToProps,)(LoginForm);
