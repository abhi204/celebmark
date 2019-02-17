import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicHomePage from '../scenes/home/homepage';
import { MDBContainer } from 'mdbreact';
import NavBar from '../_containers/navbar';

// Any Page/Component is to be rendered inside App
class App extends Component {
  
  render() {
    var { user } = this.props;
    if(!user.loggedIn) return <PublicHomePage />
    // Main App starts here
    return (
			<div>
        <NavBar />
        <br/><br/><br/><br/>
        <MDBContainer className="d-flex flex-column align-items-center justify-content-center">
        {/* Do PageLayout Styling here */}
        {/* APP visible only if logged in!!!!! */}
        {/* Do Route switches of containers/components here */}
        SITE CONTENT HERE!!
        </MDBContainer>
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