import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicHomePage from '../scenes/home/homepage';
import NavBar from '_containers/navbar/navbar';
import { Route } from 'react-router-dom';
import AppHome from './app_scenes/app_home/app_home';
import SearchPage from './app_scenes/search/search';
import ProfilePage from './app_scenes/profile/profile';
import InvitePage from "./app_scenes/invite/invite";

// Any Page/Component is to be rendered inside App
class App extends Component {
  
  render() {
    let { user } = this.props;
    if(user.loggedIn===false)
      return <PublicHomePage />
    // Main App starts here
    return (
      <div>
        <NavBar />
        <br/><br/>
        <Route exact path="/" component={AppHome} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/profile/:user_name" component={ProfilePage} />
        <Route exact path="/invite/:celeb" component={InvitePage} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps,)(App);