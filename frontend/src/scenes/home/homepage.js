import React, { Component } from 'react';
import Footer from '_components/Footer/footer';
import UserDashboard from '../userdashboard/loggedin';

export default class PublicHomePage extends Component {
    render(){
        return (
          <div>

            <UserDashboard/>

            <Footer/>

          </div>
        );
    }
}
