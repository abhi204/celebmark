import React, { Component } from "react";
import { connect } from 'react-redux';
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBBtn, MDBNavbarNav, MDBIcon } from "mdbreact";
import AboutTab from './about'
import GalleryTab from './gallery'
import './profile_content.css';

class TabsPage extends Component {
state = {
  activeItemClassicTabs1: "1",
}

toggleClassicTabs1 = tab => () => {
  if (this.state.activeItemClassicTabs1 !== tab) {
  this.setState({
    activeItemClassicTabs1: tab
  });
  }
}

render() {
  return (
        <div className="classic-tabs">
          <MDBNav className="profile-nav-tabs pl-2" classicTabs>
            <MDBNavItem>
              <MDBNavLink to="#" className={this.state.activeItemClassicTabs1==="1" ? "active tab-header" : " tab-header " } onClick={this.toggleClassicTabs1("1")}>
                <span style={{ fontSize: "large", fontWeight:"normal", color:"black" }}>About</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={this.state.activeItemClassicTabs1==="2" ? "active tab-header" : " tab-header " } onClick={this.toggleClassicTabs1("2")}>
              <span style={{ fontSize: "large", fontWeight:"normal", color:"black" }}>Gallery</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#" className={this.state.activeItemClassicTabs1==="3" ? "active tab-header" : "tab-header" } onClick={this.toggleClassicTabs1("3")}>
              <span style={{ fontSize: "large", fontWeight:"normal", color:"black" }}>Events</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavbarNav right className="d-flex flex-row mr-5">
            <MDBNavItem>
            {/* <HandlesList handles={this.props.profile.handles} /> */}
            </MDBNavItem>
            <MDBNavItem>
              <MDBBtn color="black" className="invite-btn mr-5" >
              <span style={{ fontWeight:"normal", color:"white" }}>Send Invite</span>
              </MDBBtn>
            </MDBNavItem>
            <MDBNavItem className="mt-5">
              <span style={{ fontSize: "large", fontWeight:"normal", color:"black" }}><MDBIcon far icon="star"/></span>
            </MDBNavItem>
          </MDBNavbarNav>
          </MDBNav>
          <MDBTabContent activeItem={this.state.activeItemClassicTabs1}>
            <MDBTabPane tabId="1">
              <AboutTab />
            </MDBTabPane>
            <MDBTabPane tabId="2">
              <GalleryTab/>
            </MDBTabPane>
            <MDBTabPane tabId="3">
              EVENTS
            </MDBTabPane>
          </MDBTabContent>
        </div>
    );
  }
}

let mapStateToProps = (state) => (
  { profile: state.profile }
)

export default connect(mapStateToProps)(TabsPage);