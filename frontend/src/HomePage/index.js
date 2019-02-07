import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Button,
} from 'semantic-ui-react';

export default class HomePage extends Component {

    render(){
        return (
            <Container>
                <Link to='/login'><Button>Login</Button></Link>
                <Link to='/signup'><Button>Sign Up</Button></Link>
            </Container>
        );
    }
}