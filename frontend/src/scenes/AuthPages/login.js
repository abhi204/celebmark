import React from 'react'
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

const LoginForm = () => (
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
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='User Name' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Button color='green' fluid size='large'>
              Login
            </Button>
            <br/>
                <Modal trigger={<Label as='a' color='olive' tag> Forgot Password </Label>} basic size='small'>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <center>
                    <Header icon='key' size='huge' inverted content='Recover your account.' />
                        <Modal.Content>
                          <div>
                          <Form>
                              <Form.Group widths='equal'>
                                <Form.Field
                                  id='form-input-control-registered-email'
                                  control={Input}
                                  textcolor='red'
                                  placeholder='Enter Your Registered Email Address.'
                                />
                                <Form.Field
                                  id='form-input-control-registered-phone'
                                  control={Input}
                                  placeholder='Enter Your Registered Phone Number.'
                                />
                              </Form.Group>

                            </Form>
                          </div>
                        </Modal.Content>
                        <Modal.Actions>
                          <Button basic color='red' inverted>
                            <Icon name='remove' /> Nope, this isn't right.
                          </Button>
                          <Button color='green' inverted>
                            <Icon name='checkmark' /> Yes, that's me.
                          </Button>
                        </Modal.Actions></center>
                        </Modal>
              </Segment>
            </Form>


        <Message>
          New to us? <a href='./signup'>Sign Up</a> Or <a href='./'> Home</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm
