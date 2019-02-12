import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicHomePage from '../scenes/home/homepage';

// Any Page/Component is to be rendered inside App
class App extends Component {
  render() {
    var { user } = this.props;
    if(!user.loggedIn)
      return <PublicHomePage />
    
    // Main App starts here
    return (
			<div>
        {/* Do PageLayout Styling here */}
        APP visible only if logged in!!!!!
        {/* Do Route switches of containers/components here */}
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