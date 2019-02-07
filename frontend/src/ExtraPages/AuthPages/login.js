import React, {Component} from 'react';
import {
    Container,
    Divider,
    Form, FormGroup, FormInput, Label, FormButton
} from 'semantic-ui-react';

export default class LoginPage extends Component {

    render(){
        return (
            <Container>
                <Divider />
                <Form>
                    <FormGroup>
                        <Label>Username:</Label>
                        <FormInput />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password:</Label>
                        <FormInput />
                    </FormGroup>
                    <FormButton>Login</FormButton>
                </Form>
                <Divider/>
            </Container>
        );
    }
}