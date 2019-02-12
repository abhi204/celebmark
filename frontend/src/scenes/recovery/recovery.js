import React, { Component } from 'react'
import { connect } from 'react-redux';
import RecoveryFormField from './forms/recovery_form';
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
            <center><Icon name='typo3' color='green' size='huge' /></center><br/> Forgot CelebMark Credentials?
          </Header>



          <Segment stacked>
            <RecoveryFormField />

              <br/>

                </Segment>


        </Grid.Column>
      </Grid>
    </div> );
  }
}

function mapStateToProps(state){
  return { state };
}

export default connect(mapStateToProps,)(LoginForm);
