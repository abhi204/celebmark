import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicHomePage from '../scenes/home/homepage';
import NavBar from '_containers/navbar/navbar';
import { Route } from 'react-router-dom';
import AppHome from './app_scenes/app_home/app_home';
import SearchPage from './app_scenes/search/search';

// Any Page/Component is to be rendered inside App
class App extends Component {
  
  render() {
    var { user } = this.props;
    if(!user.loggedIn) return <PublicHomePage />
    // Main App starts here
    return (
      <div>
        <NavBar />
        <br/><br/>
        <Route exact path="/" component={AppHome} />
        <Route exact path="/search" component={SearchPage} />
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