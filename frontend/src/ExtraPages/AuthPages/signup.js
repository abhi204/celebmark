import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Form,
  Container,
  Header,
  Icon,
  Tab,
  Message
} from 'semantic-ui-react'



const panes = [
  {
    menuItem: { key: 'userssignup', icon: 'users', content: 'Users Signup', color: 'green' },
    render: () => <Tab.Pane>
                    <Container>
                      <div>< br/>
                        <Header as='h2' icon textAlign='center'>
                          <Icon name='users' color='green' circular />
                          <Header.Content>Celeb Mark | Users Signup</Header.Content>
                        </Header>
                      </div>
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Field>
                               <label>First Name</label>
                                 <input placeholder='First Name' type='text' />
                        </Form.Field>
                        <Form.Field>
                              <label>Last Name</label>
                                <input placeholder='Last Name' type='text' />
                        </Form.Field>
                        <Form.Field>
                               <label>Username</label>
                                 <input placeholder='Username' type='text' />
                        </Form.Field>
                     </Form.Group>
                     <Form.Group widths='equal'>
                        <Form.Field>
                             <label>Email Address</label>
                               <input placeholder='Your Email' type='email' />
                        </Form.Field>
                        <Form.Field>
                             <label>Phone Number</label>
                               <input placeholder='Phone' type='tel'/>
                        </Form.Field>
                    </Form.Group>

                    <Form.Group widths='equal'>
                    <Form.Field>
                       <label>Password</label>
                         <input placeholder='Password' type='password' />
                    </Form.Field>
                    <Form.Field>
                       <label>Confirm Password</label>
                         <input placeholder='Re-Enter Password' type='password' />
                    </Form.Field>


                    <Form.Field>
                       <label>Upload Profile Picture</label>
                         <input type="file" name="pic" accept="image/*" />
                    </Form.Field>
                    </Form.Group>

                    <Form.Field>
                       <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                        <Button type='submit' color='green' >Signup</Button>
                    </Form>
                    </Container>
                  </Tab.Pane>,
  },


  {
    menuItem:{ key: 'celebsignup', icon: 'youtube play', content: 'Celeb Signup', color: 'green' },
    render: () => <Tab.Pane>
                    <Container>
                      <div>< br/>
                        <Header as='h2' icon textAlign='center'>
                          <Icon name='youtube play' color='green' circular />
                          <Header.Content>Celeb Mark | Celeb Signup</Header.Content>
                        </Header>
                      </div>
                    <Form>

                      <Form.Group widths='equal'>
                        <Form.Field>
                               <label>First Name</label>
                                 <input placeholder='First Name' type='text' />
                        </Form.Field>
                        <Form.Field>
                              <label>Last Name</label>
                                <input placeholder='Last Name' type='text' />
                        </Form.Field>
                        <Form.Field>
                               <label>Username</label>
                                 <input placeholder='Username' type='text' />
                        </Form.Field>
                     </Form.Group>

                     <Form.Group widths='equal'>
                        <Form.Field>
                             <label>Email Address</label>
                               <input placeholder='Your Email' type='email' />
                        </Form.Field>
                        <Form.Field>
                             <label>Phone Number</label>
                               <input placeholder='Phone' type='tel'/>
                        </Form.Field>
                    </Form.Group>

                    <Form.Group widths='equal'>
                      <Form.Field>
                             <label>Youtube Username</label>
                               <input placeholder='Youtube Username' type='text' />
                      </Form.Field>
                      <Form.Field>
                            <label>Instagram Username</label>
                              <input placeholder='Instagram Username' type='text' />
                      </Form.Field>
                      <Form.Field>
                             <label>Facebook Username</label>
                               <input placeholder='Facebook Username' type='text' />
                      </Form.Field>
                      <Form.Field>
                             <label>Twitter Username</label>
                               <input placeholder='Twitter Username' type='text' />
                      </Form.Field>
                   </Form.Group>

                    <Form.Group widths='equal'>
                    <Form.Field>
                       <label>Password</label>
                         <input placeholder='Password' type='password' />
                    </Form.Field>
                    <Form.Field>
                       <label>Confirm Password</label>
                         <input placeholder='Re-Enter Password' type='password' />
                    </Form.Field>

                    <Form.Field>
                       <label>Upload Profile Picture</label>
                         <input type="file" name="pic" accept="image/*" />
                    </Form.Field>
                    </Form.Group>

                    <Form.Field>
                       <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                        <Button type='submit' color='green' >Signup</Button>
                    </Form>
                    </Container>
                  </Tab.Pane>,
  },
]


class App extends Component {
  render() {
    return (

      <Container>
          <br/>
          <br/>
          <Tab panes=  {panes} />
          <Message textAlign='center'>
            Already have a account with us ? <a href='./login'> Login</a> Or <a href='./'> Home</a>
          </Message>
          <br/>
      </Container>

    );
  }
}
export default App;
