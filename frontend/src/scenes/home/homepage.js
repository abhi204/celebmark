import React, { Component } from 'react';
import Footer from '../footer/footer';
import UserDashboard from '../userdashboard/loggedin';
import BeforeLoginNav from '../navigation/beforelogin/beforeloginnav';


export default class PublicHomePage extends Component {
    render(){
        return (
          <div>

            <BeforeLoginNav/>

            <UserDashboard/>

            <Footer/>

          </div>
        );
    }
}
