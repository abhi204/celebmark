import React, { Component } from 'react';
import { connect } from 'react-redux';
import PublicHomePage from '../scenes/home/homepage';
import { MDBContainer } from 'mdbreact';
import NavBar from '_containers/navbar/navbar';
import Carousel from '_components/carousel/carousel';

// Any Page/Component is to be rendered inside App
class App extends Component {
  
  render() {
    var { user } = this.props;
    if(!user.loggedIn) return <PublicHomePage />
    // Main App starts here
    return (
      <div>
        <br/><br/>
        <NavBar />
        <Carousel/>
        <br/>
        <MDBContainer className="d-flex flex-column align-items-center justify-content-center">
        {/* Do PageLayout Styling here */}
        {/* APP visible only if logged in!!!!! */}
        {/* Do Route switches of containers/components here */}
        START content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>Site content here<br/>
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