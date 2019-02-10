import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import UserDashboard from '../userdashboard/loggedin';
import {
  Container,
  Button
} from 'semantic-ui-react';

export default class PublicHomePage extends Component {
    render(){
        return (
          <div>

            <Container><br />
                <Link to='/signup'><Button floated='right'>Sign Up</Button></Link>
                <Link to='/login'><Button floated='right'>Login</Button></Link>
                <br /><br /><br /><br /><br />

            </Container>

            <UserDashboard/>

            <Footer/>

          </div>
        );
    }
}
