import React, { Component } from 'react';
import UserSignupTab from './containers/user_signup_tab';
import {
  Container,
  Tab,
  Message
} from 'semantic-ui-react';

class SignupScene extends Component {
  render() {
    return (
      <Container>
          <br/>
          <br/>
          <Tab
          panes={[
            {
              menuItem: { key: 'usersSignup', icon: 'users', content: 'User Signup', color: 'green' },
              render: ()=>(<UserSignupTab />)
            },
          ]}
          />
          <Message textalign='center'>
            Already have a account with us ? <a href='./login'> Login</a> Or <a href='./'> Home</a>
          </Message>
          <br/>
      </Container>

    );
  }
}
export default SignupScene;
