import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '_containers/navbar/navbar';
import { Switch } from 'react-router-dom';
import Route from '_containers/custom_route';
import AppHome from './app_scenes/app_home/app_home';
import SearchPage from './app_scenes/search/search';
import ProfilePage from './app_scenes/profile/profile';
import InvitePage from "./app_scenes/invite/invite";
import PaymentCheckPage from './app_scenes/payment/payment_check'
// Any Page/Component is to be rendered inside App
class App extends Component {
  
  render() {
    let { user } = this.props;
    // Main App starts here
    return (
      <div>
        <NavBar />
        <br/><br/>
        <Switch>
          <Route exact path="/" component={AppHome} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/profile/:user_name" component={ProfilePage} />
          <Route privateURL exact path="/invite/:celeb" component={InvitePage} />
          <Route privateURL exact path="/payment/check" component={PaymentCheckPage} />
          <Route path='*' render={() => (<div>PAGE NOT FOUND</div>)} />
        </Switch>
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