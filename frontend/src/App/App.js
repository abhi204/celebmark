import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicHomePage from '../scenes/PublicHomePage';

// Any Page/Component is to be rendered inside App
class App extends Component {
  render() {
    if(!this.props.loggedIn)
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
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps,)(App);