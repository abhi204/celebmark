import React, { Component } from 'react';
import Footer from '_components/Footer/footer';
import UserDashboard from '../userdashboard/loggedin';
import BeforeLoginNav from '_components/navigation/beforelogin/beforeloginnav';


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
