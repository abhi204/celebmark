import React, { Component } from 'react';
import UserDashboard from '../userdashboard/loggedin';
import NavBar from '_containers/navbar/navbar';

export default class PublicHomePage extends Component {
    render(){
        return (
          <div>
            <NavBar />
            <UserDashboard/>
          </div>
        );
    }
}
