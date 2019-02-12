import React, { Component } from 'react';
import UserSignupForm from '../forms/user_signup_form';
import {
  Container,
  Header,
  Icon,
  Tab,
} from 'semantic-ui-react';

export default class UserSignupTab extends Component {

    render(){
        return(
        <Tab.Pane>
            <Container>
                <div>< br/>
                    <Header as='h2' icon textAlign='center'>
                        <Icon name='users' color='green' circular />
                        <Header.Content>Celeb Mark | User Signup</Header.Content>
                    </Header>
                </div>
                <UserSignupForm/>
            </Container>
        </Tab.Pane>
        );
    }
}